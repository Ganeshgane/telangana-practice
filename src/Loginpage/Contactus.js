import React from 'react'
import { Fragment } from 'react';
import {
    Paper,
    Box,
    Grid,
  } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
    TextField,
    Typography,
    Button
  } from '@material-ui/core';
import NavComponent from './NavComponent';


const Contactus = () => {
  const buttonStyle={padding:"4px 50px",height:'6vh',width:30,margin:"10px"}
    
    const validationSchema = Yup.object().shape({
      name: Yup.string().required('Enter your name '),
      email: Yup.string()
      .required('Enter Email')
      .email('Email is invalid'),
      phonenumber: Yup.string().required()
            .matches(/^[0-9]+$/, "Must be only digits")   
            .min(8, 'contactnumber must be at least 8 characters')
            .max(10, 'contactnumber must not exceed 10 characters'),
      description : Yup.string().required('Tell us what u want to know'),
      
    })
    const {
      register,
      // control,
      handleSubmit,
      formState: { errors }
    } = useForm({
      resolver: yupResolver(validationSchema)
    });
    const onSubmit = data => {
      console.log(JSON.stringify(data, null, 2));
    };
    
  return (
    <div>
         <Fragment>
      <div class="d-none d-md-block">
          <NavComponent />
          </div>
          <Paper elevation={10}>
            <Box px={3} py={2} style={{margin:"5% 10%"}}>
                <h1 style={{fontSize:"36px", textAlign:"center", boxSizing:"border-box", margin:"0px 0px 30px 0px", backgroundColor:"blue",color:"white"}}> Contact Us</h1>
            <Grid container spacing={1}>         
              
                <Grid item xs={12} sm={6} lg={6} style={{margin:"0px 0px 10px 0px", padding:"0px 25px 25px"}}>

                <TextField
                    required
                    id="name"
                    name="name"
                    label="Name"
                    autoComplete='off'
                    fullWidth
                    margin="dense"
                    {...register('name')}
                    error={errors.name ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.name?.message}
                  </Typography>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    margin="dense"
                    {...register('email')}
                    error={errors.email ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.email?.message}
                  </Typography>

                  <TextField
                    required
                    id="phonenumber"
                    name="phonenumber"
                    label="phonenumber"
                    fullWidth
                    margin="dense"
                    {...register('phonenumber')}
                    error={errors.phonenumber ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.phonenumber?.message}
                  </Typography>

                  
                  <TextField
                    required
                    id="description"
                    name="description"
                    label="description"
                    fullWidth
                    margin="dense"
                    {...register('description')}
                    error={errors.description ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.description?.message}
                  </Typography>
                  <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onSubmit)}
                  style={buttonStyle}
                >
                  Register
                </Button>
                </Grid>
                
                <Grid item xs={12} sm={6} lg={6} style={{margin:"0px 0px 10px 0px"}}>
                <h1 style={{fontSize:"24px"}}>Corporate Address</h1>
                  <p>Sri Sai Ram Estate
                  H No 8-3-949/1/1, Nagarjuna Nagar Ameerpet
                  Beside Chermas lane, Ameerpet - 500073
                  Hyderabad, Telangana, India.</p>

                  <h1 style={{fontSize:"24px"}}>Branches Over South India</h1>
                 <p> Bangalore, Vijayawada, Nellore, Vishakapatnam,

                  Tirupati</p>

                 <h1 style={{fontSize:"24px"}}> Phone number</h1>
                  <p>Call us: 040-48555549

                  Phone : +91-9108181659</p>

                  <h1 style={{fontSize:"24px"}}>E-mail address</h1>
                  <p>sivakrishna@yskinfotech.com</p>
                </Grid>
                
            </Grid>
            </Box>
            </Paper>
            </Fragment>

    </div>
  )
}

export default Contactus