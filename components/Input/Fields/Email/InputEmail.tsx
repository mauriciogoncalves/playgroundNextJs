"use client"
import {TextField} from "@mui/material";
import React, {forwardRef, useImperativeHandle, useRef} from "react";
import {useGlobals} from "../../../../app/globalsContext";
import {darkTheme} from "../../../../app/theme";

export function isValidateEmail(email: string): boolean {
    return !!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
}

interface InputEmailProps {
    label?: string;
    errorMessage?: string;
    onBlur?: () => void;
    required?: boolean;
    id?: string;
    name?: string;
}

export interface InputEmailRef {
    isValid: () => boolean;
    markAsError: () => void;
    markAsSuccess: () => void;
    markAsInitial: () => void;
}

const InputEmail = forwardRef<InputEmailRef, InputEmailProps>((props, ref) => {
    const pageTexts = {
        label: props?.label || "E-mail",
        errorMessage: props?.errorMessage || "Please enter a valid e-mail",
    };
    const [value, setValue] = React.useState("");
    const [wasTouched, setTouched] = React.useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [forceError, setForceError] = React.useState(false);
    const isInvalid = React.useMemo(() => {
        return !isValidateEmail(value);
    }, [value]);

    const addShakeCssClass = () => {
        const myElement = document.getElementById('email');
        myElement.parentElement.parentElement.classList.remove('shakeWrongInput');
        void myElement.parentElement.parentElement.offsetWidth;
        myElement.parentElement.parentElement.classList.add('shakeWrongInput');
    }
    const removeShakeCssClass = () => {
        const myElement = document.getElementById('email');
        myElement.parentElement.parentElement.classList.remove('shakeWrongInput');
        void myElement.parentElement.parentElement.offsetWidth;
    }
    useImperativeHandle(ref, () => ({
        isValid: () => {
            return !isInvalid;
        },
        markAsError: () => {
            setTouched(true);
            setForceError(true);
            addShakeCssClass();
        },
        markAsSuccess: () => {
            setTouched(true);
            removeShakeCssClass();
        },
        markAsInitial: () => {
            setTouched(false);
            setForceError(false);
            removeShakeCssClass();
        },
    }));
    const {isWhiteTheme} = useGlobals();

    return (
        <TextField
            margin="normal"
            type="email"
            onBlur={() => {
                const myElement = document.querySelector('#email');
                myElement.classList.remove('shakeWrongPassword');
                setTouched(value.length > 0);
                setForceError(false);
                props?.onBlur?.();
            }}
            onChange={(e) => {
                setValue(e.target.value);
            }}
            error={(wasTouched && isInvalid) || forceError}
            color={(wasTouched && isInvalid) || forceError ? "error" : "primary"}
            fullWidth
            id="email"
            label={(wasTouched && isInvalid) || forceError ? pageTexts.errorMessage : pageTexts.label}
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={inputRef}
            sx={{
                '& input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active': {
                    color: !isWhiteTheme ? darkTheme.palette.secondary.main : darkTheme.palette.primary.main,
                    boxShadow: "0 0 0 100px #121212 inset !important;"
                },
            }}
        />
    );
});

InputEmail.displayName = "InputEmail";
export default InputEmail;
