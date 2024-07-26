import React from 'react';
import { Box, Typography, Button, CardContent } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import bg from '../Ray of love/Images/bg-13.jpg';

export default function Contactus() {
    return (
        <Box sx={{ position: 'relative' }}>
            <img
                src={bg}
                alt="background"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", 
                    ml:"20px",
                    backgroundColor:"#283593"
                }}
            />
             <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    padding: '20px',
                    color:'white'
                   
                }}
            >
                <Typography variant="h3" gutterBottom sx={{ fontFamily: "Lexend", textAlign: "center",mb:"50px" }}>
                    Get Touch With Us
                </Typography>
            </Box> 
             

            <Grid container spacing={2}>

                <Grid item xs={12} md={8}>
                    <Typography variant="h4" gutterBottom sx={{ fontFamily: "Lexend", textAlign: "left", color: "#2c387e",mb:"40px",mt:"30px",ml:"30px" }}>
                        Drop a line us
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} >
                            <TextField
                                label="Name"
                                variant="outlined"
                                size="medium"
                                required
                                fullWidth
                                sx={{ml:"30px"}}  
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                size="medium"
                                required
                                fullWidth
                                sx={{ml:"30px"}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Phone"
                                variant="outlined"
                                size="medium"
                                required
                                fullWidth
                                sx={{ml:"30px"}}   
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Subject"
                                variant="outlined"
                                size="medium"
                                required
                                fullWidth
                                sx={{ml:"30px"}}
                              
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                                defaultValue=""
                                variant="outlined"
                                fullWidth
                                sx={{ml:"30px"}}
                              
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" gutterBottom sx={{color:"#ff5722",marginLeft:"30px"}} >
                                Send Message
                            </Button>
                            <Typography variant="body2" sx={{ textAlign: 'left, marginTop: 2 ', color: "#2c387e",marginLeft:"30px"}}>
                                * Get answers to common questions through our help center.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

              
                <Grid item xs={12} md={4}>
                    <Card sx={{ 
                        display: 'inline-block',
                         mx: '2px', 
                         transform: 'scale(0.9)',
                         mb:"40px",
                         mt:"30px"
                          }}>
                    <CardContent>
                    <Typography variant="h5" component="div" sx={{  mb: 1.5,fontFamily: "arial",textAlign: "left",color: "#2c387e",marginTop: 2}}>
                       Global HQ
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign={'left'}>
                    5404 Berrick Street, 2nd cross str,<br></br> Boston, MA 02115.
                    </Typography>
                    <CardActions>
                    <Button size="small" sx={{color:"#ff5722",fontWeight:"bold",textAlign:"left"}}>YOUR NEAREST LOCATION</Button>
                    </CardActions>
                    </CardContent>
                    <div style={{ borderTop: '1px solid #e0e0e0', width:'90%', margin: '10px  ' }}className="horizontal-line"></div>
                    {/* <Card sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.9)' }}> */}
                    <CardContent>
                    <Typography variant="h5" component="div" sx={{  mb: 1.5, fontFamily: "arial", textAlign: "left", color: "#2c387e", marginTop: 2 }}>
                    Quick Contact
                    </Typography>
                    <Typography  color="text.secondary" textAlign={'left'}>
                    supportyou@goodsoul.com
                    </Typography>
                    <Typography sx={{ mb: 1.5}} color="text.secondary" textAlign={'left'}>
                    +211 456 789 & 123
                    </Typography>
                    <CardActions>
                    <Button size="small" sx={{color:"#ff5722", fontWeight:"bold",textAlign:"left"}}>GET CALL BACK</Button>
                    </CardActions>
                    </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}