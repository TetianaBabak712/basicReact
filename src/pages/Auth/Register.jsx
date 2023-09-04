
import { Paper, TextField, Button } from "@mui/material";
import React, { useState} from "react";


const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const data = {
            fullName,
            email,
            password,
    };
    console.log(data);
    }
    return (
       <Paper sx={{padding: "50px"}}>
        <form style={{display: "flex", flexDirection: "column", gap: "10opx"}} onSubmit={handleFormSubmit }>
            <h1>Registration</h1>
            <TextField 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            type="text" 
            name="fullName" 
            helperText={fullName.length < 5 ? "too short" : ""}
            />
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
            <TextField  value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
            <Button type="submit">Register</Button>

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




// import { Paper, TextField, Button } from "@mui/material";
// import React, { useRef} from "react";


// const Register = () => {
//     const fullNameRef = useRef("");
//     const emailRef = useRef("");
//     const passwordRef = useRef("");
//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         const data = {
//             fullName: fullNameRef.current.value,
//             email: emailRef.current.value,
//             password: passwordRef.current.value,
//         };
//         console.log(data);
//     };
//     return (
//        <Paper sx={{padding: "50px"}}>
//         <form style={{display: "flex", flexDirection: "column", gap: "10opx"}} onSubmit={handleFormSubmit }>
//             <h1>Registration</h1>
//             <TextField inputRef={fullNameRef} type="text" name="fullName" />
//             <TextField inputRef={emailRef} type="email" name="email" />
//             <TextField inputRef={passwordRef}  type="password" name="password" />
//             <Button type="submit">Register</Button>
//         </form>
//        </Paper>
//     );
// };


// export default Register;
export default Register;
