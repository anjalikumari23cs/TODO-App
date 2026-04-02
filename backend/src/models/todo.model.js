const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
}, { timestamps: true });

// const controllers = {
//     createTodo: async (req, res) => {
//         try {
//             const { title, description } = req.body;
//             const newTodo = new Todo({ title, description });
//             await newTodo.save();
//             res.status(201).json(newTodo);
//         } catch (error) {
//             res.status(500).json({ error: 'Failed to create todo' });
//         }   
//     },
//     getTodos: async (req, res) => {
//         try {
//             const todos = await Todo.find();
//             res.status(200).json(todos);
//         } catch (error) {
//             res.status(500).json({ error: 'Failed to fetch todos' });
//         }
//     },
//     updateTodo: async (req, res) => {
//         try {
//             const { id } = req.params;
//             const { title, description, completed } = req.body;
//             const updatedTodo = await Todo.findByIdAndUpdate
//                 (id, { title, description, completed }, { new: true });
//             if (!updatedTodo) {
//                 return res.status(404).json({ error: 'Todo not found' });
//             }   
//             res.status(200).json(updatedTodo);
//         } catch (error) {       
//             res.status(500).json({ error: 'Failed to update todo' });
//         }
//     }
// };

const controllers = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodo = await Todo.findByIdAndUpdate
            (id, { title, description, completed }, { new: true });
        if (!updatedTodo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.status(200).json(updatedTodo);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update todo' });
    }
};
const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;