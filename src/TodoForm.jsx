import { ListItem } from "@mui/material";
import { TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";

export default function TodoForm({addTodo }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(null);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleChangeDate = (newValue) => {
        const newDate = dayjs(newValue);
        setDate(newDate);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedDate = date ? dayjs(date).format('YYYY-MM-DD') : ""; 
        const newItem = {description, title, dueDate: formattedDate, completed: false, id: Date.now()};
        addTodo(newItem);
        setTitle("");
        setDescription("");
        setDate(null)
    }

    return (
        <ListItem style={{ display: "flex", gap: "5px" }}>
            <form onSubmit = {handleSubmit}>
                <TextField id="outlined-basic" label="Title" variant="outlined" onChange={handleChangeTitle} value={title} />
                <TextField id="outlined-basic" label="Description" variant="outlined" onChange={handleChangeDescription} value={description} />
                 <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker label="Basic date picker" value={date} onChange={handleChangeDate} />
                </LocalizationProvider>
                <button variant="outlined" style={{ fontSize: "15px", padding: "14px" }}>Add Todo</button>
            </form>
        </ListItem>
    )
}
