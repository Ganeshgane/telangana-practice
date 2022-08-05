import React from 'react'
import flower1 from '../images/flower2.jpg'
import flower from '../images/flower3.jpg'
import { Fragment } from 'react';
import {
    Paper,
    Box,
    Grid,
  } from '@material-ui/core';
import { Typography } from '@mui/material';

const Dashboard= () => {
  return (
    <div>
  
      <Fragment>
          <Paper elevation={10}>
            <Box px={3} py={2}  style={{margin:"0px 10%"}}>
              <Grid container spacing={4}>         
                <Grid item xs={12} sm={12} lg={12} style={{textAlign:"center", backgroundColor:"blue", margin:"0px 0px 15px 0px", color:"white"}}>
                   
                   <Typography variant='h4'>Dashboard</Typography> 
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={flower} style={{height:"50%", display :"inline" ,width:"50%"}}/>
                        </span>
                        <span style={{float:"right", display :"inline", top:"0"}}>
                          <p>Total schemes</p>
                          <p>0</p>
                        </span>
                                                          
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={flower} style={{height:"100px" ,width:"50%"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p>Active schemes</p>
                          
                          
                            <p>0</p>
                          
                            

                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={flower} style={{height:"100px" ,width:"50%"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p>Total Programs</p>
                          
                          
                            <p>0</p>
                          
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={flower} style={{height:"100px" ,width:"50%"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p>Active Programs</p>
                          
                          
                            <p>0</p>
                          
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={flower} style={{height:"100px" ,width:"50%"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p>Total Batches</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4}  style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={flower} style={{height:"100px" ,width:"50%"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p>Active Batches</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={flower} style={{height:"100px" ,width:"50%"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p>Ongoing batches</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={flower} style={{height:"100px" ,width:"50%"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p>Upcoming Batches</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={flower} style={{height:"100px" ,width:"50%"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p>Total Jobfair</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={flower} style={{height:"100px" ,width:"50%"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p>Active jobfair</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                
                <Grid item xs={12} sm={6} lg={4}  style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={flower} style={{height:"100px" ,width:"50%"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p>Completed Job fair</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={flower} style={{height:"100px" ,width:"50%"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p>Total participated</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={flower} style={{height:"100px" ,width:"50%"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p>Registered candidates</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
              
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={flower} style={{height:"100px" ,width:"50%"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p>Skilled candidates</p>
                          
                          
                            <p>0</p>
                          
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={flower}  style={{height:"100px" ,width:"50%"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p>Certified candidates</p>
                          
                          
                            <p>0</p>
                                                      
                        </span>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{border:"2px solid black"}}>
                        <span style={{float:"left"}}>
                            <img src={flower} style={{height:"100px" ,width:"50%"}}></img>
                        </span>
                        <span style={{float:"right"}}>
                          
                            <p>Placed candidates</p>
                          
                          
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