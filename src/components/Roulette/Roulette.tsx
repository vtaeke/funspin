import {useNavigate} from "react-router-dom";
import {Divider, List, ListItemButton, ListItemText, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";

function Roulette() {

    const navigate = useNavigate();

    const routes = [
        { label: 'CS2', path: '/roulettecs' },
        { label: 'Random number', path: '/randomnumber' },
    ]
    return (
        <Paper
            elevation={3}
            sx={{
                maxWidth: 800,
                margin: '40px auto',
                padding: 2,
                borderRadius: 2
            }}
        >
            <Typography variant="h5" align="center" gutterBottom>
                🎰 Выберите рулетку
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
                {routes.map((route) => (
                    <ListItemButton
                        key={route.path}
                        onClick={() => navigate(route.path)}
                        sx={{
                            mb: 1,
                            borderRadius: 1,
                            '&:hover': { backgroundColor: 'primary.light' },
                        }}
                    >
                        <ListItemText primary={route.label} sx={{ textAlign: 'center' }} />
                    </ListItemButton>
                ))}
            </List>
        </Paper>
    );
}

export default Roulette;
