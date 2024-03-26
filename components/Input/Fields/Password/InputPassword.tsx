"use client"
import TextField from '@mui/material/TextField';
import React from "react";
import EyeFilledIcon from "./EyeFilledIcon";
import EyeSlashFilledIcon from "./EyeSlashFilledIcon";

let a = 1;

export function valid() {
    return a;
}

export default function InputPassword({...props}) {
    const pageTexts = {
        label: props?.label || "Your password",
        errorMessage: props?.errorMessage || "Please enter a valid password"
    };
    const [value, setValue] = React.useState("");
    const [wasTouched, setTouched] = React.useState(false);
    const [isTextVisible, setIsTextVisible] = React.useState(false);

    const isInvalid = React.useMemo(() => {
        return wasTouched && !((!wasTouched && value === "") || isValid());
    }, [value]);

    function isValid() {
        setTouched(true);
        return value.length > 3;
    }

    return (
        <TextField
            {...props}
            label={wasTouched && isInvalid ? pageTexts.errorMessage : pageTexts.label}
            required={!!props.isRequired}
            error={wasTouched && isInvalid}
            // color={wasTouched && isInvalid ? "danger" : "default"}
            onChange={(e) => {
                setValue(e.target.value);
                isValid();
            }}
            onBlur={() => {
                isValid()
            }}
            InputProps={{
                endAdornment: (
                    <button className="focus:outline-none h-full" type="button" onClick={() => setIsTextVisible(!isTextVisible)}>
                        {isTextVisible ? (
                            <EyeSlashFilledIcon className="h-full t  pointer-events-none"/>
                        ) : (
                            <EyeFilledIcon className="h-full   pointer-events-none"/>
                        )}
                    </button>
                ),
            }}
            type={isTextVisible ? "text" : "password"}
        />
    )
}
