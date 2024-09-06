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
        isPriority: false,
    },
    {
        id: 2,
        title: "Breakfast Prep",
        description: "Make a healthy breakfast to fuel your body.",
        dueDate: "2024-09-05",
        completed: false,
        isPriority: false,
    },
    {
        id: 3,
        title: "Email Check",
        description: "Review and respond to important emails.",
        dueDate: "2024-09-05",
        completed: false,
        isPriority: false,
    },
    {
        id: 4,
        title: "Work on Project ",
        description: "Spend 2 hours working on your current project (e.g., coding, writing, design).",
        dueDate: "2024-09-05",
        completed: false,
        isPriority: false,
    },
    {
        id: 5,
        title: "Client Meeting",
        description: "Attend a virtual meeting with a client to discuss progress and next steps.",
        dueDate: "2024-09-05",
        completed: false,
        isPriority: false,
    },
    {
        id: 6,
        title: "Lunch Break",
        description: "Take a 1-hour break to relax and eat.",
        dueDate: "2024-09-05",
        completed: false,
        isPriority: false,
    },
    {
        id: 7,
        title: "Task Prioritization",
        description: "Organize and prioritize remaining tasks for the afternoon.",
        dueDate: "2024-09-05",
        completed: false,
        isPriority: false,
    },
    {
        id: 8,
        title: "Skill Development",
        description: "Spend 1 hour learning or practicing a new skill (e.g., coding, language, reading).",
        dueDate: "2024-09-05",
        completed: false,
        isPriority: false,
    },
    {
        id: 9,
        title: "Plan Tomorrow",
        description: "Create a to-do list and plan for the next day.",
        dueDate: "2024-09-05",
        completed: false,
        isPriority: false,
    }
];
export default function TodoList() {

    const [todos, setTodos] = useState(tasks);

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(t => t.id !== id);
        });
    };
    const sortByPriority = () => {
        setTodos(prevTodos => {
            return [...prevTodos].sort((a, b) => {
                return b.isPriority - a.isPriority;
            });
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
    const togglePriority = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, isPriority: !todo.isPriority }
                }
                else {
                    return todo;
                }
            })
        })

    }
    const addTodo = (todo) => {
        setTodos((prevTodos) => [...prevTodos, todo]);
    };

    return (
        <List sx={{
            width: '100%', maxWidth: 550, bgcolor: 'background.paper'
        }}>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => {
                return <TodoListItem todo={todo} key={todo.id} remove={removeTodo} toggle={toggleTodo}
                 handlePriority={togglePriority} sort={sortByPriority} />
            }
            )}
        </List>
    );
}




