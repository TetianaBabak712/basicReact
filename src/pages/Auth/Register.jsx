import { Paper, TextField } from "@mui/material";
import React from "react";


const Register = () => {
    return (
       <Paper sx={{padding: "50px"}}>
        <form style={{display: "flex", flexDirection: "column", gap: "10opx"}}>
            <h1>Registration</h1>
            <TextField type="text" name="fullName" />
            <TextField type="email" name="email" />
            <TextField type="password" name="password" />
        </form>
       </Paper>
    );
};


export default Register;