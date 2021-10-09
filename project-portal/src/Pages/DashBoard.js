import { Button } from '@mui/material'
import React from 'react'
import Footer from '../Components/Footer'

function DashBoard() {
    return (
        <div>
            <h1>DashBoard</h1>
            <Button
                type="submit"
                variant="contained"
                sx={{
                    mt:3,
                    mb:2
                }}
                href="/user"
            >
                User
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
                Log out
            </Button>
            <Footer
                sx = {{
                    mt:35
                }}
            />
        </div>
    )
}

export default DashBoard
