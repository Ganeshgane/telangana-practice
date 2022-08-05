import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
    Button
  } from '@material-ui/core';

const MaterialUIform = () => {
  const [gender, setGender] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleChange1 = (event) => {
    setGender(event.target.value);
  };
  const handleChange2 = (event) => {
    setCategory(event.target.value);
  };

    const validationSchema = Yup.object().shape({
      aadharno: Yup.string().required()
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(12, 'Enter your 12 digit aadhar')
          .max(12, 'Must be exactly 12 digits'),
      firstname: Yup.string().required('Fullname is required'),
      lastname: Yup.string()
          .required('Username is required')
          .min(6, 'Username must be at least 6 characters')
          .max(20, 'Username must not exceed 20 characters'),
      dateofbirth:  Yup.string().required(),
      familyannualincome: Yup.string().required()
          .matches(/^[0-9]+$/, "Must be only digits"),
      contactnumber: Yup.string().required()
          .matches(/^[0-9]+$/, "Must be only digits")   
          .min(8, 'contactnumber must be at least 8 characters')
          .max(10, 'contactnumber must not exceed 10 characters'),
      alternatenumber: Yup.string().required()
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(8, 'alternatenumber must be at least 8 characters')
          .max(10, 'alternatenumber must not exceed 10 characters'),
      state : Yup.string().required('State is required'),
      district : Yup.string().required('District is required'),
      constituency : Yup.string().required('Constituency is required'),
      village : Yup.string().required('Village is required'),
      mandal : Yup.string().required('Mandal is required'),
      pincode : Yup.string().required('Pincode  is required')
          .matches(/^[0-9]+$/, "Must be only digits"),
      housenumber : Yup.string().required('house number is required'),
      gender : Yup.string().required('State is required'),
      category : Yup.string().required('State is required'),
      candidatephoto : Yup.string().required('State is required'),
      
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      emailid: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
      acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
    });
    const paperStyle={padding:20,height:'100%',width:"95%",margin:"20px auto"}
    const buttonStyle={padding:"4px 50px",height:'6vh',width:30,margin:"10px"}

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });
      const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
      };
      
      return (
        <Fragment>
          <Paper elevation={10} style={paperStyle}   sx={{ width: 1 }}  mx={{ width: 3/4 }}  lg={{ width: 1/2 }}>
            <Box px={3} py={2}   mx={{ width: 450 }}  lg={{ width: 1/2 }} sx={{ width: 35 }}>
              <Typography variant="h6" margin="dense" style={{backgroundColor: "blue", color:"white"}}>
                 PERSONAL DETAILS
              </Typography>
              <Grid container spacing={1}>
              <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="aadharno"
                    name="aadharno"
                    label="Aadhar no"
                    fullWidth
                    margin="dense"
                    {...register('aadharno')}
                    error={errors.aadharno ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.aadharno?.message}
                  </Typography>
                </Grid> 
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="fullname"
                    name="fullname"
                    label="Full Name"
                    fullWidth
                    margin="dense"
                    {...register('firstname')}
                    error={errors.firstname ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.firstname?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    fullWidth
                    margin="dense"
                    {...register('lastname')}
                    error={errors.lastname ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.lastname?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <TextField
                        required
                        id="dateofbirth"
                        name="dateofbirth"
                        type="date"
                        fullWidth
                        margin="dense"
                        {...register('dateofbirth')}
                        error={errors.dateofbirth ? true : false}
                      />
                  <Typography variant="inherit" color="textSecondary">
                     {errors.dateofbirth?.message}
                  </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6} lg={4}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name='gender'
                      required={true}
                      value={gender}
                      label="gender"
                      {...register('gender')}
                      onChange={handleChange1}
                      style={{overflow:"hidden"}}
                    >
                      <MenuItem>--select--</MenuItem>
                      <MenuItem value={'Male'}>Male</MenuItem>
                      <MenuItem value={'Female'}>Female</MenuItem>
                      <MenuItem value={'Others'}>Others</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.fullname?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="Category"  
                      {...register('category')}
                      onChange={handleChange2}
                    >
                      <MenuItem>--select--</MenuItem>
                      <MenuItem value={'OC'}>OC</MenuItem>
                      <MenuItem value={'BC'}>BC</MenuItem>
                      <MenuItem value={'SC'}>SC</MenuItem>
                      <MenuItem value={'ST'}>ST</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.fullname?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="familyannualincome"
                    name="familyannualincome"
                    label="familyannualincome"
                    fullWidth
                    margin="dense"
                    {...register('familyannualincome')}
                    error={errors.familyannualincome ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.fullname?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <Typography>candidatephoto</Typography>
                  <TextField
                    required
                    
                    id="candidatephoto"
                    name="candidatephoto"
                    type="file"
                    fullWidth
                    margin="dense"
                    {...register('candidatephoto')}
                    error={errors.candidatephoto ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.candidatephoto?.message}
                  </Typography>
                </Grid>
                </Grid>


                <Typography variant="h6" margin="dense" fullWidth style={{backgroundColor: "blue",my:10, color:"white"}}>
                 CONTACT DETAILS
                </Typography>
                <Grid container spacing={1}>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    margin="dense"
                    {...register('email')}
                    error={errors.email ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.email?.message}
                  </Typography>
                </Grid><Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="contactnumber"
                    name="contactnumber"
                    label="Contact Number"
                    fullWidth
                    margin="dense"
                    {...register('contactnumber')}
                    error={errors.contactnumber ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.contactnumber?.message}
                  </Typography>
                </Grid><Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="alternatenumber"
                    name="alternatenumber"
                    label="Alternate Number"
                    fullWidth
                    margin="dense"
                    {...register('alternatenumber')}
                    error={errors.alternatenumber ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.alternatenumber?.message}
                  </Typography>
                </Grid>
                </Grid>


                <Typography variant="h6" margin="dense" fullWidth style={{backgroundColor: "blue",my:10, color:"white"}}>
                 ADDRESS
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="state"
                    type=""
                    fullWidth
                    margin="dense"
                    {...register('state')}
                    error={errors.state ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.state?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="district"
                    name="district"
                    label="district"
                    fullWidth
                    margin="dense"
                    {...register('district')}
                    error={errors.district ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.district?.message}
                  </Typography>
                </Grid><Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="constituency"
                    name="constituency"
                    label="constituency"
                    fullWidth
                    margin="dense"
                    {...register('constituency')}
                    error={errors.constituency ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.constituency?.message}
                  </Typography>
                </Grid><Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="village"
                    name="village"
                    label="village"
                    fullWidth
                    margin="dense"
                    {...register('village')}
                    error={errors.village ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.village?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="mandal"
                    name="mandal"
                    label="mandal"
                    fullWidth
                    margin="dense"
                    {...register('mandal')}
                    error={errors.mandal ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.mandal?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="pincode"
                    name="pincode"
                    label="Pincode"
                    fullWidth
                    margin="dense"
                    {...register('pincode')}
                    error={errors.pincode ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.pincode?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="housenumber"
                    name="housenumber"
                    label="housenumber"
                    fullWidth
                    margin="dense"
                    {...register('housenumber')}
                    error={errors.housenumber ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.housenumber?.message}
                  </Typography>
                </Grid>
                </Grid>


                <Typography variant="h6" margin="dense" fullWidth style={{backgroundColor: "blue",my:10, color:"white"}}>
                 LOGIN DETAILS
                </Typography>
                <Grid container spacing={1}>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="emailid"
                    name="emailid"
                    label="Email ID"
                    type="email"
                    fullWidth
                    margin="dense"
                    {...register('emailid')}
                    error={errors.emailid ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.emailid?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    margin="dense"
                    {...register('password')}
                    error={errors.password ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.password?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    margin="dense"
                    {...register('confirmPassword')}
                    error={errors.confirmPassword ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.confirmPassword?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Controller
                        control={control}
                        name="acceptTerms"
                        defaultValue="false"
                        inputRef={register()}
                        render={({ field: { onChange } }) => (
                          <Checkbox
                            color="primary"
                            onChange={e => onChange(e.target.checked)}
                          />
                        )}
                      />
                    }
                    label={
                      <Typography color={errors.acceptTerms ? 'error' : 'inherit'}>
                        I have read and agree to the Terms *
                      </Typography>
                    }
                  />
                  <br />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.acceptTerms
                      ? '(' + errors.acceptTerms.message + ')'
                      : ''}
                  </Typography>
                </Grid>
              </Grid>
              <Box mt={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onSubmit)}
                  style={buttonStyle}
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Paper>
        </Fragment>
      );
    };
    export default MaterialUIform;
  