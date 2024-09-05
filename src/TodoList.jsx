import List from '@mui/material/List';
import TodoListItem from './TodoListItem';
import { useState } from 'react';
import TodoForm from './TodoForm';

const tasks = [
    {
        id: 1,
        title: "Morning Exercise",
        description: "Go for a 30-minute run in the park.",
        dueDate: "2024-09-05",
        completed: false,
    },
    {
        id: 2,
        title: "Work on React Project",
        description: "Complete the UI components and fix Vite setup.",
        dueDate: "2024-09-05",
        completed: false,
    },
    {
        id: 3,
        title: "Meeting with Client",
        description: "Discuss project requirements via Zoom.",
        dueDate: "2024-09-05",
        completed: false,
    }
];
export default function TodoList() {

    const [todos, setTodos] = useState(tasks);

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(t => t.id !== id);
        });
    };

    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                else {
                    return todo;
                }
            })
        })

    }
    const addTodo = (todo) => {
        setTodos((prevTodos) => [ ...prevTodos, todo]);
    };

    return (
        <List sx={{
            width: '100%', maxWidth: 900, bgcolor: 'background.paper'
        }}>
            {todos.map((todo) => {
                return <TodoListItem todo={todo} key={todo.id} remove={removeTodo} toggle={toggleTodo} />
            }
            )}
           <TodoForm addTodo={addTodo} />
        </List>
    );
}




