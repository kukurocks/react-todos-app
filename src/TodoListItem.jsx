import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Card, CardContent, Typography, Chip, Grid2 } from "@mui/material";
import { ListItem } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function TodoListItem({ todo, remove, toggle, handlePriority, sort }) {

    const labelId = `checkbox-list-label-${todo.id}`;

    const removeTodo = () => {
        remove(todo.id);

    }
    const sortTodo = () => {
        sort();
    }
    const toggleTodo = () => {
        toggle(todo.id);
    }
    const priority = () => {
        handlePriority(todo.id);
    }

    return (
        <ListItem sx={{ display: "grid", gridTemplateColumns: "1fr" }}>
            <Card variant="outlined" sx={{
                filter: todo.completed ? "grayscale(80%)" : "none",
                opacity: todo.completed ? 0.4 : 1
            }}>
                <CardContent>
                    <ListItemButton role={undefined} dense>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={todo.completed}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                                onChange={toggleTodo}
                            />
                        </ListItemIcon>
                        <Typography sx={{ textDecoration: todo.completed ? "line-through" : "none" }}
                            variant="h6">{todo.title} </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {todo.description}
                        </Typography>
                        <Chip
                            label={`Due: ${todo.dueDate}`}
                            color="primary"
                            size="small"
                        />
                        <Checkbox {...labelId} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} onChange={(e) => {
                            priority();
                            sortTodo();
                        }
                        } />
                        <IconButton aria-label="remove" color='info' onClick={removeTodo}>
                            <RemoveCircleOutlineIcon fontSize='small' />
                        </IconButton>
                    </ListItemButton>
                </CardContent>
            </Card>
        </ListItem>
    )
}
