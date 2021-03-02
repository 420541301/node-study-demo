let indexDao = require('../Dao/indexDao');
module.exports = {
    login(req, resp) {
    		let {user,pwd} = req.body
        	indexDao.user(user,pwd).then(res => {
            resp.send(res)
        	})
    },
    getInfo(req,resp){
    	let {token} = req.query
    	indexDao.getInfo(token).then(res=>{
    		resp.send(res)
    		})
	},
	getDiscountList(req,resp){
		indexDao.getDiscountList().then(res=>{
			resp.send(res)
		})
	}
};
