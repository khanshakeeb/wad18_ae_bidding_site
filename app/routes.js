const myController = require('./controllers/myController.js');
const userController = require('./controllers/UserController.js');
//const mypassport  = require('passport');

module.exports= function(app){
    app.get('/', myController.hello);
    app.get('/hello', myController.hello);
    //app.get('/login', mypassport.facebook);

    //Users routes/controllers
    app.get('/users', userController.getUsers);
}