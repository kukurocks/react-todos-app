import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Card, CardContent, Typography, Chip, Grid2 } from "@mui/material";
import { ListItem } from '@mui/material';

export default function TodoListItem({ todo, remove, toggle }) {
    const labelId = `checkbox-list-label-${todo.id}`
    const removeTodo = () => {
        remove(todo.id);

    }
    const toggleTodo = () => {
        toggle(todo.id);
    }

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                    <RemoveCircleOutlineIcon fontSize='large' />
                </IconButton>
            }
            disablePadding
        >
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
                <Card variant="outlined" sx={{
                    filter: todo.completed ? "grayscale(80%)" : "none",
                    opacity: todo.completed ? 0.4 : 1
                }}>
                    <CardContent>
                        <Grid2 container spacing={2}>
                            {/* Task Title */}
                            <Grid2 item xs={12} sx={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                                <Typography variant="h6">{todo.title} </Typography>
                            </Grid2>
                            {/* Task Description */}
                            <Grid2 item xs={12}>
                                <Typography variant="body2" color="textSecondary">
                                    {todo.description}
                                </Typography>
                            </Grid2>
                            {/* Due Date */}
                            <Grid2 item xs={12}>
                                <Chip
                                    label={`Due: ${todo.dueDate}`}
                                    color="primary"
                                    size="small"
                                />
                            </Grid2>
                        </Grid2>
                    </CardContent>
                </Card>
            </ListItemButton>
        </ListItem>
    )
}
