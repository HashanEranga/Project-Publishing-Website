import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

function Footer(props) {
    
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright '}
            <Link 
                color="inherit"
                href="#">
                    Web Site
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
        </Typography>
    )
}

export default Footer
