const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const cors = require('cors');


const PORT = process.env.PORT || 5000

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://ankitsuman07:Silenced%408697@bookstore.cm8rbur.mongodb.net/books-collection?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//app.use('/games', gameRoutes);

// const Task = mongoose.model('Task', {
//     text: String
// });

// app.get('/', async (req, res) => {
//     res.send("Working Home");
// });

// app.get('/users', async (req, res) => {
//     const tasks = await Task.find();
//     res.json(tasks);
// });

// app.post('/users', async (req, res) => {
//     const task = new Task({ text: req.body.text });
//     await task.save();
//     res.json(task);
// });

//Use userRoutes
app.use('/users', userRoutes);
app.use('/games', gameRoutes);


app.get('/', (req, res) => {
    res.send("Working Users and Games");
});

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
