import React from 'react'
import gandhi from '../images/gandhi.jpg'
import paidikotayya from '../images/paidikotayya.jpg'
import magantigopinath from '../images/MagantiGopinath.jpg'
import { Fragment } from 'react';
import {
    Paper,
    Box,
    Grid,
  } from '@material-ui/core';
import { Typography } from '@mui/material';
import NavComponent from './NavComponent';


const Boardofdirectors = () => {
  
  return (
    <div>
         <Fragment>
      <div class="d-none d-md-block">
          <NavComponent />
          </div>
          <Paper elevation={10}>
            <Box px={3} py={2}  style={{margin:"0px 10% 10%"}}>
                <h1 style={{fontSize:"36px", textAlign:"center", boxSizing:"border-box", margin:"0px 0px 30px 0px", backgroundColor:"blue",color:"white"}}>Board of Directors</h1>
              <Grid container spacing={1}>         
              
                <Grid item xs={12} sm={6} lg={4} style={{margin:"0px 0px 10px 0px"}}>
                    <div style={{textAlign:"center", boxSizing:"border-box"}}>
                        <img src={gandhi} width="30%"  height="30%" style={{borderRadius:"50%"}}/>
                        <h1 style={{fontSize:"28px"}}> Sri. Arekapudi Gandhi</h1>
                        <h2 style={{fontSize:"20px"}}>MLA TRS,<br></br>
                        Serilingampally,Telangana</h2>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{margin:"0px 0px 10px 0px"}}>
                    <div style={{textAlign:"center", boxSizing:"border-box"}}>
                        <img src={paidikotayya} width="30%"  height="30%" style={{borderRadius:"50%"}}/>
                        <h1 style={{fontSize:"28px"}}>Sri. Paidi Kotayya</h1>
                        <h2 style={{fontSize:"20px"}}>Former Chairman of NABARD,<br></br>
                        Serilingampally,Telangana</h2>
                    </div>
                  
                </Grid>
                <Grid item xs={12} sm={6} lg={4} style={{margin:"0px 0px 10px 0px"}}>
                    <div style={{textAlign:"center", boxSizing:"border-box"}}>
                        <img src={magantigopinath} width="40%"  height="40%" style={{borderRadius:"50%"}}/>
                        <h1 style={{fontSize:"28px"}}>Sri. Maganti Gopinath</h1>
                        <h2 style={{fontSize:"20px"}}>MLA TRS,<br></br>
                        Jubilee Hills,Telangana</h2>
                    </div>
                </Grid>
                </Grid>
            </Box>
            </Paper>
            </Fragment>

    </div>
  )
}

export default Boardofdirectors