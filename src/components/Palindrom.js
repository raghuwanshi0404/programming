import React, { useEffect } from 'react'
import '../App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BsFillCheckCircleFill, BsFillQuestionCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { useState } from 'react';



export default function Palindrom() {
    const [isPalin, setIsPalin] = useState("")
    const [palindrom, setPalindrom] = useState(true)

    useEffect(() => {
        checkPalindrom();
    }, [isPalin]);
    
    const handleChange = (event) => {
        setIsPalin(event.target.value);
    }
    const checkPalindrom = () => {
        var i, _isPalindrom = true;
        for (i = 0; i < isPalin.length / 2; i++) {
            if (isPalin[i] !== isPalin[isPalin.length - 1 - i]) {
                _isPalindrom = false;
                break;
            }
        }
        setPalindrom(_isPalindrom);
    }
    return (
        <div className='container'>
            <div className='palin'>
                Palindrom 
                {
                    isPalin.trim() === '' ?  (<BsFillQuestionCircleFill /> ) : ( palindrom ? (<BsFillCheckCircleFill color="green"/>) : (<BsFillXCircleFill color="red"/>))
                }
                <i class="bi bi-x-circle"></i>
            </div>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
            >
                <TextField fullWidth label="Enter a string to check if it is a pailndrom" id="fullWidth"
                    value={isPalin}
                    onChange={handleChange} />
            </Box>
        </div>
    )
}







