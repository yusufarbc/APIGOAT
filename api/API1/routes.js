const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.status(200);
    res.json({
        message:"API1 is working"
    });
});

router.post('/signup', (req, res, next) => {
    Account.find({email:req.body.email})
    .exec()
    .then( account=> {
        if (account.length >= 1) {
            return res.status(409).json({
                message: 'Mail Exist'
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
            
                if (err) {
                    return res.status(500).json({
                        message: "unexpected error",
                        error: err
                    });
        
                } else {
                    const account = new Account({_id: new mongoose.Types.ObjectId, name:req.body.name, email: req.body.email, password: hash});
                    
                    account
                    .save()
                    .then( (result) => {
                        res.status(201).json({
                            message: "auth succesfull",
                            result: result
                        });
                    })
                    .catch( (err) => {
                        res.status(500).json({
                            message: "error",
                            error: err
                        });
                    });
                }
            });
        }
    
    })
    .catch( (err) => {
        console.error(err);
        res.status(500).json({
            message:"unexpected error",
            error: err
        })
    })
});

router.post("/login", (req, res, next) => {
    Account.find({ email: req.body.email })
    .exec()
    .then( (accounts) => {
        if (accounts.length <1) {
            return res.status(404).json({
                message: "Mail not found, account doesn't exist",
                message: 'Auth Failed'
            });
        } 
        bcrypt.compare(req.body.password, accounts[0].password, (err, result) => {
            if(err) {
                return res.status(401).json({
                    message: 'auth failed'
                });
            }

            if (result) {
                const token = jwt.sign({
                    email: accounts[0].email,
                    Id: accounts[0]._id
                }, "api1", 
                {
                    expiresIn: "1h"
                })

                return res.status(200).json({
                    message: 'Auth succesfull',
                    token: token
                });
            }

            res.status(401).json({
                message: 'Auth failed'
            });
        })
    })
    .catch();
});




router.delete('/:accountId',checkAuth, (req, res, next) => {
    Account.deleteOne({_id: req.params.accountId})
    .exec()
    .then( (result) => {
        res.status(200).json({
            message: "account removed",
            result: result
        })
    })
    .catch( (err) => {
        console.error(err);
        res.status(500).json({
            message:"account cannot removed",
            error: err
        })
    })
});


// Vulnerable endpoint for downloading files (Broken Authorization)
router.get('/files/:fileId', checkAuth, (req, res) => {
    const fileid = req.params.fileId;
    File.findOne({'number': fileid})
        .exec()
        .then(result => {
            if (result) {
               res.status(200).json({result}); 
            } else {
                res.status(404).json({message: 'No valid entry found for provided id'});
            }
        })
        .catch( err => {
            console.log(err);
            res.status(500).json({error:err});
        });
});

router.post('/files',  (req, res, next) => {
    const file = new File({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        content: req.body.content,
        path: req.body.path,
        number: req.body.id
    });
    file
        .save()
        .then(result => {
        //success call back
        console.log(result);
        res.status(201).json({
            message: 'files successfully created',
            creadtedProduct: result
        });
        })
        //error call back
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            })
        });
});

router.delete('files/:filesId', checkAuth, (req, res, next) => {
    const id = req.params.filesId;
    File.deleteOne({ "number":id })
        .exec()
        .then(result => {
            console.log("success")
            console.log(res);
            res.status(200).json({result}); 
        })
        .catch( err => {
            console.log(err);
            res.status(500).json({error:err});
        });
});

router.patch('/:filesId', checkAuth, (req, res, next) => {
    const id = req.params.filesId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    File.updateOne({ "number":id }, { $set: updateOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({result})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});




module.exports = router;