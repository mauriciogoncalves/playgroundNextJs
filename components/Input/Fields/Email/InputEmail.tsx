"use client"
import TextField from "@mui/material/TextField";
import React from "react";

export default function InputEmail({...props}) {
    const pageTexts = {
        label: props?.label || "E-mail",
        errorMessage: props?.errorMessage || "Please enter a valid e-mail",
    };

    const [value, setValue] = React.useState("");
    const [wasTouched, setTouched] = React.useState(false);

    const isInvalid = React.useMemo(() => {
        return !(value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/));
    }, [value]);

    return (
        <TextField
            {...props}
            margin="normal"
            type="email"
            required={!!props.isRequired}
            onBlur={() => {
                setTouched(value.length > 0);
                props?.onBlur?.call();
            }}
            onChange={(e) => {
                setValue(e.target.value);
            }}
            error={wasTouched && isInvalid}
            color={wasTouched && isInvalid ? "error" : "primary"}
            fullWidth
            id="email"
            label={wasTouched && isInvalid ? pageTexts.errorMessage : pageTexts.label}
            name="email"
            autoComplete="email"
            autoFocus
        />
    )
}