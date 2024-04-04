import {cva, type VariantProps} from "class-variance-authority"
import Grid from '@mui/material/Grid';
import {twMerge} from "tailwind-merge"
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import makeStyles from "@mui/material/styles/makeStyles";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {KeyboardArrowDownRounded} from "@mui/icons-material";


const button = cva(
    [
        "justify-center",
        "inline-flex",
        "items-center",
        "rounded-xl",
        "text-center",
        "border",
        "border-blue-400",
        "transition-colors",
        "delay-50",
    ],
    {
        variants: {
            intent: {
                primary: ["bg-blue-400", "text-white", "hover:enabled:bg-blue-700"],
                secondary: ["bg-transparent", "text-blue-400", "hover:enabled:bg-blue-400", "hover:enabled:text-white"],
            },
            size: {
                sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
                lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
            },
            underline: {true: ["underline"], false: []},
        },
        defaultVariants: {
            intent: "primary",
            size: "lg",
        },
    }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof button> {
    underline?: boolean
    href: string
}

export function HeaderLinksBarButton({className, intent, size, underline, ...props}: ButtonProps) {
    const handleClick = function(event:any) {
        if (typeof props != 'undefined' && props != null && typeof props.onClick == 'function'){
            props.onClick(event);
        }
    }
    return (
        <Grid item>
            <Button
                onClick={handleClick}
                className={"headerLinksBarButton"}
                type="submit"
                variant="contained"
            >{props.children}
                <KeyboardArrowDownRounded></KeyboardArrowDownRounded>
            </Button>

        </Grid>
    )
}
