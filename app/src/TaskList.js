import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://server-gameit.onrender.com/tasks'); // Relative URL, works for both local and deployed environments
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    const addTask = async () => {
        try {
            await axios.post('https://server-gameit.onrender.com/tasks', { text: newTask }); // Relative URL, works for both local and deployed environments
            setNewTask('');
            //fetchData(); // Refresh tasks after adding a new one, without reloading the entire page
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <div>
            <h1>Task List Demo</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New Task"
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>{task.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
