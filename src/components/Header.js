import {React, useState }from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../logo.svg'
import '../App.css'

export default function Header(props) {
	const [select, setSelect] = useState('selectProgram');
	const handleChange = (event) => {
		setSelect(event.target.value);
		props.remote(event.target.value)
	}
	return (
		<Box sx={{ flexGrow: 1, p: 1 }}>
			<AppBar position="static" >
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<img src={logo} className="App-logo" alt="logo" />

					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						Programming World
					</Typography>
					<select className="form-select" aria-label="Default select example" value={select} onChange={handleChange}>
						<option selected value={"selectProgram"}>Open this to select Programs</option>
						<option value="1">Palindrom</option>
						<option value="2">Counter App</option>
						<option value="3">Multiple Of 3 or 5</option>
					</select>

				</Toolbar>
			</AppBar>
		</Box>
	);
}