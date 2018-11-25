const myController = require('./controllers/myController.js');
const userController = require('./controllers/UserController.js');


module.exports= function(app){
    app.get('/', myController.hello);
    app.get('/hello', myController.hello);


    //Users routes/controllers
    app.get('/users', userController.getUsers);
}