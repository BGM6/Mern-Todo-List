//THIS IS WHERE THE ROUTES ARE CREATED
const router = require('express').Router();
const Todo = require('../models/todos');

router.route('/todos')
    .get((req, res) => {

    })
    .post((req, res ) => {

    })
    .delete((req, res) => {

    })

router.get('/todos', (req, res, next) => {
    //This will return all the data, exposing only the id and action field to the client
    Todo.find({}, 'action')
        .then(data => res.json(data))
        .catch(next)
});
// router.post('/todos', (req, res, next) => {


// });

router.delete('/todos/:id', (req, res, next) => {

});

module.exports = router;
