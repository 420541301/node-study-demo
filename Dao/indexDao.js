let dbsql = require('../config/dbConfig');
module.exports = {
    user(user, pwd) {
        return new Promise((resolve, reject) => {
            dbsql.db(`SELECT * FROM USER WHERE USER='${user}' AND pwd='${pwd}'`, [user, pwd], (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    const res = {
                        message: '',
                        token: ''
                    }
                    if (data.length === 0) {
                        res.message = 'fail'
                        resolve(res)
                    } else {
                        res.message = 'success'
                        res.token = data[0].token
                        resolve(res)
                    }
                }
            })
        })
    },
    getInfo(token) {
        return new Promise((resolve, reject) => {
            dbsql.db(`SELECT token FROM USER WHERE token='${token}'`, [token], (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    if (data.length === 0) {
                        resolve({
                            code: 60204,
                            message: 'Account and password are incorrect.'
                        })
                    } else {
                        resolve({
                            code: 20000,
                            data: {
                                roles: ['admin'],
                                introduction: 'I am a super administrator',
                                avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
                                name: 'Super Admin'
                            }
                        })
                    }
                }
            })
        })
    },
    getDiscountList() {
        return new Promise((resolve, reject) => {
            dbsql.db(`SELECT * FROM discountList`, [], (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    }
};