const { Schema, model } = require('mongoose');

//SCHEMA FOR TODOS

const TodoSchema = new Schema({
    action: {
        type: String,
        require: [true, 'The todo text field is required'],
    }
})

//THIS WILL CREATE MODEL FOR TODO
const Todo = model('todo', TodoSchema);

module.exports = Todo;

