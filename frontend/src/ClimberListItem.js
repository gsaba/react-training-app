import * as React from 'react';
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

export default function ClimberListItem({climber, handleListItemClick, selectedIndex, index}) {

    return (
        <ListItemButton
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
        >
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={climber.name} />
        </ListItemButton>
    );
}