"use client"
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from 'react';
import {useState} from "react";
import {HeaderLinksBarButton} from "./HeaderLinksBarButton";


export default function HeaderLinksPrimaryBar() {
    const [anchorEl2, setMenuAnchorEl] = useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl2);
    const handleClose = () => {
        setMenuAnchorEl(null);
    };
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(1);
        setMenuAnchorEl(event.currentTarget);
    };
    let currentlyHovering = false;
    function handleHover() {
        currentlyHovering = true;
    }
    function handleCloseHover() {
        currentlyHovering = false;
        setTimeout(() => {
            if (!currentlyHovering) {
                handleClose();
            }
        }, 50);
    }
    return (
        <div className={"flexRow flexRowWrap"}>
            <Menu
                id="simple-menu"
                onClose={handleClose}
                MenuListProps={{
                    onMouseEnter: handleHover,
                    onMouseLeave: handleCloseHover,
                    style: {pointerEvents: "auto"}
                }}
                open={menuOpen}
                onClick={handleClose}
                anchorEl={anchorEl2}
                anchorOrigin={{horizontal: "left", vertical: "bottom"}}
                PopoverClasses={{
                    // root: styles.popOverRoot
                }}>
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <HeaderLinksBarButton
                onClick={handleClick}
                href={"#"}>Main Link 1</HeaderLinksBarButton>
            <HeaderLinksBarButton href={"#"}>Main Link 2</HeaderLinksBarButton>
            <HeaderLinksBarButton href={"#"}>Main Link 3 Long Text</HeaderLinksBarButton>
            <HeaderLinksBarButton href={"#"}>M.L 4</HeaderLinksBarButton>
        </div>
    );
}