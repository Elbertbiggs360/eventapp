const userController = require('../controllers').user

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Approach and behold greatness'
    }));
    app.post('/login', userController.authenticate);
    app.post('/api/users', userController.createUser);
    app.get('/api/users', userController.getUser);
}