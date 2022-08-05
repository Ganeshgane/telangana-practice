import React from 'react'
import dashboard1 from '../images/dashboard1.png'
import dashboard2 from '../images/dashboard2.png'
import dashboard3 from '../images/dashboard3.png'
import dashboard4 from '../images/dashboard4.png'
import dashboard5 from '../images/dashboard5.png'
import dashboard6 from '../images/dashboard6.png'
import dashboard7 from '../images/dashboard7.png'
import dashboard8 from '../images/dashboard8.png'
import dashboard9 from '../images/dashboard9.png'
import dashboard10 from '../images/dashboard10.png'
import dashboard11 from '../images/dashboard11.png'
import dashboard12 from '../images/dashboard12.png'
import dashboard13 from '../images/dashboard13.png'
import dashboard14 from '../images/dashboard14.png'
import dashboard15 from '../images/dashboard15.png'
import dashboard16 from '../images/dashboard16.png'
import { Fragment } from 'react';
import {
    Paper,
    Box,
    Grid,
  } from '@material-ui/core';
import { Typography } from '@mui/material';
import NavComponent from './NavComponent';
const Dashboard= () => {
  return (
    <div>
  
      <Fragment>
      <div class="d-none d-md-block">
        <NavComponent />
        </div>
          <Paper elevation={10}>
            <Box px={3} py={2}  style={{margin:"5% 10%"}}>
              <Grid container spacing={4}>         
                <Grid item xs={12} sm={12} lg={12} style={{textAlign:"center", backgroundColor:"blue", margin:"0px 0px 15px 0px", color:"white"}}>
                   
                   <Typography variant='h4'>Dashboard</Typography> 
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black", boxSizing:"border-box"}}>
                        <span style={{float:"left"}}>
                            <img src={dashboard1} style={{height:"100px", display :"inline" ,width:"100px"}}/>
                        </span>
                        <span style={{float:"right"}}>
                          <p style={{width:"100px"}}>Total schemes</p>
                          <p>0</p>
                        </span>
                                                          
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={dashboard2} style={{height:"100px" ,width:"100px"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p style={{width:"100px"}}>Active schemes</p>
                          
                          
                            <p>0</p>
                          
                            

                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={dashboard3} style={{height:"100px" ,width:"100px"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p style={{width:"100px"}}>Total Programs</p>
                          
                          
                            <p>0</p>
                          
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={dashboard4} style={{height:"100px" ,width:"100px"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p style={{width:"100px"}}>Active Programs</p>
                          
                          
                            <p>0</p>
                          
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={dashboard5} style={{height:"100px" ,width:"100px"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p style={{width:"100px"}}>Total Batches</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4}  style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={dashboard6} style={{height:"100px" ,width:"100px"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p style={{width:"100px"}}>Active Batches</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={dashboard7} style={{height:"100px" ,width:"100px"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p style={{width:"100px"}}>Ongoing batches</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={dashboard8} style={{height:"100px" ,width:"100px"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p style={{width:"100px"}}>Upcoming Batches</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={dashboard9} style={{height:"100px" ,width:"100px"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p style={{width:"100px"}}>Total Jobfair</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={dashboard10} style={{height:"100px" ,width:"100px"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p style={{width:"100px"}}>Active jobfair</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                
                <Grid item xs={12} sm={6} lg={4}  style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={dashboard11} style={{height:"100px" ,width:"100px"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p style={{width:"100px"}}>Completed Job fair</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={dashboard12} style={{height:"100px" ,width:"100px"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p style={{width:"100px"}}>Total participated</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={dashboard13} style={{height:"100px" ,width:"100px"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p style={{width:"100px"}}>Registered candidates</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
              
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={dashboard14} style={{height:"100px" ,width:"100px"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p style={{width:"100px"}}>Skilled candidates</p>
                          
                          
                            <p>0</p>
                          
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={dashboard15}  style={{height:"100px" ,width:"100px"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p style={{width:"100px"}}>Certified candidates</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={dashboard16} style={{height:"100px" ,width:"100px"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p style={{width:"100px"}}>Placed candidates</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>                
                </Grid>
            </Box>
            </Paper>
            </Fragment>
    </div>
  )
}

export default Dashboard
// import React from "react";
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

// const Dashboard = () => {
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol size="4">.col-4</MDBCol>
//         <MDBCol size="4">.col-4</MDBCol>
//         <MDBCol size="4">.col-4</MDBCol>
//         <MDBCol sm="4">.col-sm-4</MDBCol>
//         <MDBCol sm="4">.col-sm-4</MDBCol>
//         <MDBCol sm="4">.col-sm-4</MDBCol>
//         <MDBCol md="4">.col-md-4</MDBCol>
//         <MDBCol md="4">.col-md-4</MDBCol>
//         <MDBCol md="4">.col-md-4</MDBCol>
//         <MDBCol lg="4">.col-lg-4</MDBCol>
//         <MDBCol lg="4">.col-lg-4</MDBCol>
//         <MDBCol lg="4">.col-lg-4</MDBCol>
//         <MDBCol xl="4">.col-xl-4</MDBCol>
//         <MDBCol xl="4">.col-xl-4</MDBCol>
//         <MDBCol xl="4">.col-xl-4</MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default Dashboard;