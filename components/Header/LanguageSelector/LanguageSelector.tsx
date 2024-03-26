"use client"
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';

export default function LanguageSelector() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip title="Change Language">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{mr: 0, ml: 0}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Box
                            sx={{
                                backgroundImage: `url("/images/languages/1x1/en.svg")`,
                                backgroundPosition: `center center`,
                                backgroundRepeat: `no-repeat`,
                                backgroundSize: `32px 32px`,
                                borderRadius: '50%',
                                height: 33,
                                width: 33,
                            }}
                        >
                        </Box>
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
                <MenuItem onClick={handleClose}>
                    <Box
                        sx={{
                            backgroundImage: `url("/images/languages/4x3/en.svg")`,
                            backgroundPosition: `center center`,
                            backgroundRepeat: `no-repeat`,
                            backgroundSize: `24px 24px`,
                            height: 24,
                            width: 24,
                            paddingRight:"10px"
                        }}
                    >
                    </Box><span style={{paddingLeft: "12px"}}>English</span>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Box
                        sx={{
                            backgroundImage: `url("/images/languages/4x3/pt.svg")`,
                            backgroundPosition: `center center`,
                            backgroundRepeat: `no-repeat`,
                            backgroundSize: `24px 24px`,
                            height: 24,
                            width: 24,
                            paddingRight:"10px"
                        }}
                    >
                    </Box><span style={{paddingLeft: "12px"}}>Portug&ecirc;s</span>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Box
                        sx={{
                            backgroundImage: `url("/images/languages/4x3/pt-br.svg")`,
                            backgroundPosition: `center center`,
                            backgroundRepeat: `no-repeat`,
                            backgroundSize: `24px 24px`,
                            height: 24,
                            width: 24,
                            paddingRight:"10px"
                        }}
                    >
                    </Box><span style={{paddingLeft: "12px"}}>Portug&ecirc;s Brasileiro</span>
                </MenuItem>
            </Menu>
        </>
    );
}