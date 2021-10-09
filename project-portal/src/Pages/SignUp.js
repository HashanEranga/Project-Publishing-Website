import { ThemeProvider } from '@emotion/react'
import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Footer from '../Components/Footer'

const theme = {

};


function SignUp() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password')
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Container  
                component="main"
                maxWidth="xs"
            >
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop:8,
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center"

                    }}
                >
                    <Avatar
                        sx={{
                            m:1,
                            bgcolor:"secondary.main"

                        }}>
                            {/* Need to add an icon */}
                        </Avatar>
                        <Typography
                            component="h1"
                            variant="h5"
                        >
                            Sign Up
                        </Typography>
                        <Box    
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{
                                mt:1
                            }}
                        >

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="fname"
                                label="First Name"
                                name="fname"
                                autoComplete="fname"
                                autoFocus
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="lname"
                                label="Last Name"
                                name="lname"
                                autoComplete="lname"
                                autoFocus
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                autoFocus
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember Me"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt:3,
                                    mb:2
                                }}
                                href="/user"
                            >
                                Sign Up
                            </Button>

                            
                        </Box>
                </Box>
            </Container>
            <Footer
                sx = {{
                    mt:35
                }}
            />
        </ThemeProvider>
    )
}

export default SignUp
