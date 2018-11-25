module.exports = {
    getUsers: function(req, res, next){
        const users = [];
        users.push({id:101, name: 'shakeeb'});
        users.push({id:102, name: 'ali'});
        users.push({id:103, name: 'rauf'});
        users.push({id:104, name: 'tayyab'});
        users.push({id:105, name: 'haseeb'});
        users.push({id:106, name: 'muzammil'});
        res.render('users', { title: 'Get usres',users: users });
        
    }

}