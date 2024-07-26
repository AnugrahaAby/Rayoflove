import React from 'react';
import { Typography, Grid, Button, IconButton, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import image1 from '../Ray of love/Images/image-13.jpg';
import image2 from '../Ray of love/Images/image-14.jpg';

function SectionTwo() {
    return (
        <div style={{ padding: '16px' }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#b71c1c', fontFamily:'Lexend',fontWeight:'bold', textAlign:"center" }}>
                PASSION FOR GIVING
            </Typography>
            <Typography variant="h4" gutterBottom sx={{color:'#1B1C57',fontFamily:'Lexend', textAlign:"center"}}>
                The best way to find yourself <span><br></br>is to lose yourself in the service of others</span>
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <div style={{
                        position: 'relative',
                        textAlign: 'center',
                        color: 'white',
                    }}>
                        <img src={image1}
                         alt="Experience" style={{ width: '100%' }} />
                        <Typography variant="h6" style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            padding: '10px',
                        }}>
                            32+ years of experience
                       </Typography>
                    </div>
               </Grid>
                <Grid item xs={12} md={4}>
                    <div style={{ position: 'relative', textAlign: 'center' }}>
                        <img src={image2} alt="Play Video" style={{ width: '100%' }} />
                        <IconButton
                            aria-label="play video"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color:'white'
                            }}
                        >
                        <PlayCircleOutlineIcon style={{ fontSize: 40 }} />
                       </IconButton>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                <Box>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'left',
                        height: '100%',
                        flexDirection: 'column'
                    }}>
                        <Typography variant="h6" gutterBottom sx={{color:'#bdbdbd',textAlign: 'left',fontSize:'15px'}}>
                            Beguiled and demoralized by the charms of pleasure of the moment, so by desire,that they cannot foresea the pain and trouble that are bound to ensure to those who fail in their shrinking.
                       </Typography>
                        <Button sx={{color: '#b71c1c', fontWeight:'bold', textAlign: 'left'}}>
                        <ArrowForwardIcon /><Typography sx={{color: '#b71c1c', fontWeight:'bold',textAlign: 'left'}}> Contact Us </Typography>
                        </Button>
                    </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default SectionTwo;
