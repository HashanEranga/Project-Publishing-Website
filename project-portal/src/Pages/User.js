import { Button } from '@mui/material'
import React from 'react'
import Footer from '../Components/Footer'

function User() {
    return (
        <div>
            <h1>User Page</h1>
            <Button
                type="submit"
                variant="contained"
                sx={{
                    mt:3,
                    mb:2
                }}
                href="/dashboard"
            >
                DashBoard
            </Button>
            <Button
                type="submit"
                variant="contained"
                sx={{
                    mt:3,
                    mb:2
                }}
                href="/"
            >
                Log Out
            </Button>
            <Footer
                sx = {{
                    mt:35
                }}
            />

        </div>
    )
}

export default User
