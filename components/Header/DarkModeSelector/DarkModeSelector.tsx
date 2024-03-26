"use client"
import {Brightness4, Brightness5, DarkMode} from "@mui/icons-material";
import {Avatar, Box, IconButton, MenuItem, Switch} from '@mui/material';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import {useGlobals} from "../../../app/globalsContext";

export default function DarkModeSelector() {
    const {isWhiteTheme, setIsWhiteTheme} = useGlobals();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const updateTheme = () => {
        setIsWhiteTheme(!isWhiteTheme);
    };
    return (
        <>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip title="Change Dark Mode">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{mr: 0, ml: 0}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{borderRadius: '50%', height: 33, width: 33}}>
                            {isWhiteTheme ? (
                                <DarkMode style={{height: 33, width: 33}} className="h-full t  pointer-events-none"/>
                            ) : (
                                <Brightness5 style={{height: 33, width: 33}} className="h-full t  pointer-events-none"/>
                            )}
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 24,
                                height: 24,
                                ml: -0,
                                mr: 1.5,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <MenuItem onClick={updateTheme}>
                    <Switch checked={!isWhiteTheme}/> Use Dark Theme
                </MenuItem>
            </Menu>
        </>
    );
}