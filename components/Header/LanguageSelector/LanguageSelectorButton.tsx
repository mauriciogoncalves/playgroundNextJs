import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from 'react';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";


export default function LanguageSelectorButton() {
    const [alignment, setAlignment] = React.useState('left');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };
    const ToggleButtonLangItem = ({url, title}: { url: string, title: string }) => {
        return <Tooltip title={title}>
            <Box sx={{
                backgroundImage: `url("` + url + `")`,
                backgroundPosition: `center center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `24px 24px`,
                height: 24,
                width: 24,
            }}>
            </Box>
        </Tooltip>
    }
    return (
        <Stack spacing={0} alignItems="center">
            <ToggleButtonGroup size="small" exclusive={true} onChange={handleChange} value={alignment} aria-label="Small sizes">
                <ToggleButton value="left" key="left">
                    <ToggleButtonLangItem title={"English"} url={"/images/languages/1x1/en.svg"}/>
                </ToggleButton>,
                <ToggleButton value="center" key="center">
                    <ToggleButtonLangItem title={"Português Brasileiro"} url={"/images/languages/1x1/pt-br.svg"}/>
                </ToggleButton>,
                <ToggleButton value="right" key="right">
                    <ToggleButtonLangItem title={"Português "} url={"/images/languages/1x1/pt.svg"}/>
                </ToggleButton>,
            </ToggleButtonGroup>
        </Stack>
    );
}