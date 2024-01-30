import * as React from "react";
import ClimberListItem from "./ClimberListItem";
import useFetch from "./useFetch";
import Grid from '@mui/material/Grid';
import ClimberFilters from "./ClimberFilters";
import ClimberDetail from "./ClimberDetail";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';


export default function Climbers() {

    const { data: climbers, loading, error } = useFetch('http://localhost:8080/climbers');

    const [selectedIndex, setSelectedIndex] = React.useState(null);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Grid container spacing={1}>
            <Grid item xs={2}>
                <ClimberFilters/>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{bgcolor: 'background.paper' }}>
                    <List component="nav" aria-label="main mailbox folders">
                        {climbers && climbers.map((climber, i) => (
                            <ClimberListItem key={i} climber={climber} handleListItemClick={handleListItemClick} selectedIndex={selectedIndex} index={i}></ClimberListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Grid>
            <Grid item xs={4}>
                <ClimberDetail
                    climber={(climbers && selectedIndex !== null) ? climbers[selectedIndex]: null}
                    selectedIndex={selectedIndex}
                />
            </Grid>
        </Grid>
    );
}
