import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'


const useStyles = makeStyles({
    hero : {
        textAlign:"center",
    }
})

function HeroSection() {
    const theme = useStyles();
    return (
        <div className={theme.hero}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs/>
                <Grid item xs={6}>
                    <Typography 
                        variant="h1" 
                        component="div" 
                        gutterBottom
                        sx={{
                            mt:8
                        }}>

                        Project Portal
                    </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        A new way for promote yourself
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        href="/login"
                        sx={{
                            mt:8
                        }}
                    >
                        Get Started
                    </Button>
                </Grid>
                <Grid item xs/>
            </Grid>
        </div>
    )
}

export default HeroSection
