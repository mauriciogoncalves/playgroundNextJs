import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

export function Copyright(props: any) {
    return (
        <Typography className={"copyright"} variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                Mauricio Vieira
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

  
