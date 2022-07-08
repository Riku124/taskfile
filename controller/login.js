const crypto = require('crypto')
const User = require('../model/account')
const userRepository = require('../repository/account_box') ()

module.exports = function login(req, res){
    const user_id = req.body.user_id
    const password = req.body.password

    const user = userRepository.find(user_id,(user) => {
        if(user && user.verifyPassword(password)) {
            res.render('after_login.ejs', {name: user.name})
        }else{
            res.render('login.ejs', {
                message: 'ユーザIDまたはパスワードに誤りがあります。'
            })
        }
    })
}

