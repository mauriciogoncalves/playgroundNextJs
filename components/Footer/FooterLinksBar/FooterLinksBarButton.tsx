import {cva, type VariantProps} from "class-variance-authority"
import Grid from '@mui/material/Grid';
import {twMerge} from "tailwind-merge"
import Button from "@mui/material/Button";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

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

export function FooterLinksBarButton({className, intent, size, underline, ...props}: ButtonProps) {
    return (
        <Grid item>
            <CssBaseline/>
            <Button className={"footerLinksBarButton"} type="submit" variant="text" sx={{mt: 3, mb: 2}}>{props.children}</Button>
        </Grid>
    )
}
