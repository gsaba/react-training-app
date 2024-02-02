import {Controller, Form, useForm} from "react-hook-form";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';

import {DatePicker} from "@mui/x-date-pickers";
import {DemoContainer, DemoItem} from '@mui/x-date-pickers/internals/demo';
import DateFnsUtils from "@date-io/date-fns";
import dayjs from 'dayjs';
import {useEffect, useRef, useState} from "react";
import {Button, FormControl, FormHelperText, FormLabel, Input, InputLabel, TextField} from "@mui/material";


const ClimberDetail = ({climber, selectedIndex}) => {

    const [enteredClimber, setEnteredClimber] = useState({
        name: undefined,
        birthDate: undefined
    });

    useEffect(() => {
        setEnteredClimber({
            name: climber?.name,
            birthDate: dayjs(climber?.birthDate)
        });
    }, [climber]);

    const saveClimberData = () => {
        console.log(enteredClimber);
    }

    function handleEnteredData(name, value) {
        setEnteredClimber(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (

        <FormControl>
            <FormLabel>Climber Name</FormLabel>
            <TextField
                required
                id="name"
                size="normal"
                defaultValue={enteredClimber?.name}
                value={enteredClimber?.name}
                onChange={(event) => handleEnteredData('name', event?.target?.value)}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormLabel>Climber birth date</FormLabel>
                <DatePicker
                    defaultValue={enteredClimber?.birthDate}
                    value={enteredClimber?.birthDate}
                    onChange={(newValue) => handleEnteredData('birthDate', newValue)}
                />
            </LocalizationProvider>
            <Button onClick={saveClimberData}>Save</Button>
        </FormControl>
    );
}

export default ClimberDetail;