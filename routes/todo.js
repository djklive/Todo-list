const router = require('express').Router();
const Todo = require('../models/Todo');

// Route pour ajouter une nouvelle tâche
router.post('/add/todo', (req, res) => {
    const { todo } = req.body;
    const newTodo = new Todo({ todo });

    newTodo.save()
        .then(() => {
            console.log("Successfully added todo");
            res.redirect('/');
        })
        .catch((err) => console.log(err));
});

// Route pour supprimer une tâche
router.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
        .then(() => {
            console.log("Successfully deleted todo");
            res.redirect('/');
        })
        .catch((err) => console.log(err));
});

// Route pour modifier une tâche existante
router.post('/edit/todo/:_id', (req, res) => {
    const { _id } = req.params;
    const { todo } = req.body;

    Todo.updateOne({ _id }, { todo })
        .then(() => {
            console.log("Successfully updated todo");
            res.redirect('/');
        })
        .catch((err) => console.log(err));
});

module.exports = router;