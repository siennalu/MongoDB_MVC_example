const userSchemaModel = require('../models/user_model.js');

module.exports = class User {
  insertUser(req, res, next) {
    let user = new userSchemaModel({
      name: req.body.name,
      password: req.body.password
    });

    user.save()
      .then(value => res.json(value))
      .catch(error => res.json(error));
  }

  retrieveUser(req, res, next) {
    userSchemaModel.find()
    .then(value => res.json(value))
    .catch(error => res.json(error))
  }


  updateUser(req, res, next){
    let updateUserName = req.body.name;
    let updateUserPwd = req.body.password;

      userSchemaModel.findOne({ name: updateUserName })
      .then(doc => {
        doc.password = updateUserPwd;
        doc.save().then(value => res.json(value));
      })
      .catch(err => res.json(err));
  }

}

/*

1.create Promise
2.use Promise

1.let myPromise = new Promise((resolve, reject) =>{
  ...
  resolve(res);
  reject(err);
})

2.myPromise
  .then(value => res.json(value))
  .catch(err => res.json(err)));

 */
select