import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup(props) {
    const eventHandler = (event) => {
        props.onChange(event.target.name, event.target.value)
    }
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name={props.name}
                value={props.value}
                onChange={eventHandler}
            >
                <FormControlLabel value="male" control={<Radio sx={{ '&.Mui-checked': { color: '#FFDC39' } }} />} label="Male" />
                <FormControlLabel value="female" control={<Radio sx={{ '&.Mui-checked': { color: '#FFDC39' } }} />} label="Female" />
                <FormControlLabel value="other" control={<Radio sx={{ '&.Mui-checked': { color: '#FFDC39' } }} />} label="Other" />
            </RadioGroup>
        </FormControl>
    );
}