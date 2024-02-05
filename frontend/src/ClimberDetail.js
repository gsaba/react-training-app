import {Controller, Form, useForm} from "react-hook-form";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';

import {DatePicker} from "@mui/x-date-pickers";
import {DemoContainer, DemoItem} from '@mui/x-date-pickers/internals/demo';
import DateFnsUtils from "@date-io/date-fns";
import dayjs from 'dayjs';
import {useEffect, useRef, useState} from "react";
import {Button, FormControl, FormHelperText, FormLabel, Input, InputLabel, TextField, Typography} from "@mui/material";
import useFetch from "./useFetch";


const ClimberDetail = ({climber, selectedIndex}) => {

    const [enteredClimber, setEnteredClimber] = useState({
        id: undefined,
        name: undefined,
        birthDate: undefined
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setEnteredClimber({
            id: climber?.id,
            name: climber?.name,
            birthDate: dayjs(climber?.birthDate)
        });
    }, [climber]);

    const saveClimberData = () => {
        setLoading('saving data...');
        setError(null);

        console.log(JSON.stringify(enteredClimber));

        fetch('http://localhost:8080/climbers', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(enteredClimber)
        })
            .then((res) => {
                setLoading(false);
                //return res.json();
            })
            .then((data) => {
                //console.log(data);
                //setData(data);
            })
            .catch(err => {
                console.error(err);
                setLoading(false)
                setError('An error occurred. Awkward..')
            });

    }

    function handleEnteredData(name, value) {
        setEnteredClimber(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <>
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
            {
                error && (<Typography>Error during save data {error}</Typography>)
            }
            {
                loading && (<Typography>{loading}</Typography>)
            }
        </>
    );
}

export default ClimberDetail;