import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../App.css'


export default function Counter() {
    const [increment, setIncrement] = useState(0);
    const [start, setStart]          = useState(0);
    const [endValue, setEndValue]    = useState(0);
    const [putValue, setPutValue]    = useState('');

    const handleClick = () => {
        let str = '';
       
        for(let i = start; i <= endValue; i = i + increment ){
            str = str + i + ', ';
            

        }
        str  = str.substring(0 , str.length -2)
        setPutValue(str);
    }


    return (
        <div>
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '100%',
                    p: 5,
                    display: 'flex',
                    justifyContent: 'spaceBetween',
                    alignItems: 'center'
                }}
            >
                <TextField fullWidth label="Increment By " sx={{ mr: 10 }}
                    type='number'
                    value={increment}
                    onChange={(event) => setIncrement(Number(event.target.value))}
                />
                <TextField fullWidth label="start From" sx={{ mr: 10 }}
                    type='number'
                    value={start}
                    onChange={(event) => setStart(Number(event.target.value))}
                />
                <TextField fullWidth label="End with"
                    type='number'
                    value={endValue}
                    onChange={(event) => setEndValue(Number(event.target.value))}
                />
            </Box>
            <Button variant="contained" sx={{ ml: 5 }} onClick={handleClick} >Submit</Button>
            <Box className="inputCont"
            
                sx={{
                    p: 5,
                    border: '2px solid #1976d2',
                    mr: 20
                }}>
                    {putValue}
            </Box>
        </div>
    )
}
