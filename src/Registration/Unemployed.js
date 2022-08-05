
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
import NavComponent from '../Loginpage/NavComponent';


const Unemployed = () => {
  const [region, setRegion] = React.useState('');
  const [educationtype, setEducationtype] = React.useState('');

  const [gender, setGender] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleChange1 = (event) => {
    setGender(event.target.value);
  };
  const handleChange2 = (event) => {
    setCategory(event.target.value);
  };
  const handleChange3 = (event) => {
    setRegion(event.target.value);
  };
  const handleChange4 = (event) => {
    setEducationtype(event.target.value);
  };
    const validationSchema = Yup.object().shape({
      firstname: Yup.string().required('Firstname is required'),
      lastname: Yup.string()
          .required('Enter Last name')
          .min(6, 'Lastname must be at least 5 characters')
          .max(20, 'Lastname must not exceed 20 characters'),
      aadharno: Yup.string().required()
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(12, 'Enter your 12 digit aadhar')
          .max(12, 'Must be exactly 12 digits'),
      dateofbirth:  Yup.string().required(),
      gender : Yup.string().required('select gender'),
      category : Yup.string().required('select category'),

      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      contactnumber: Yup.string().required()
          .matches(/^[0-9]+$/, "Must be only digits")   
          .min(8, 'contactnumber must be at least 8 characters')
          .max(10, 'contactnumber must not exceed 10 characters'),
      alternatenumber: Yup.string(),


      state : Yup.string().required('State is required'),
      region : Yup.string().required('Select Region'),
      district : Yup.string().required('District is required'),
      mandal : Yup.string().required('mandal is required'),
      village : Yup.string().required('Village is required'),
      pincode : Yup.string().required('Pincode  is required')
          .matches(/^[0-9]+$/, "Must be only digits"),
          
      educationtype : Yup.string().required('Select Educationtype'),

      collegename : Yup.string().required('collegename is required'),
      coursename : Yup.string().required('Enter coursename'),
      specialization : Yup.string().required('Select specialization'),
      passedoutyear : Yup.string().required('Enter passedoutyear'),
      registrationid : Yup.string().required('Enter Registration id'),
      username : Yup.string().email().required('Enter username'),
      password: Yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s:]).*$/, {
        message: "Password need to contain 1 uppercase character (A-Z), 1 lowercase character (a-z), 1 digit (0-9) and 1 special character (punctuation)"
      })
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
      <div class="d-none d-md-block">
              <NavComponent />
              </div>
          <Paper elevation={10} style={paperStyle}   sx={{ width: 1 }}  mx={{ width: 3/4 }}  lg={{ width: 1/2 }}>
            <Box px={3} py={2}   mx={{ width: 450 }}  lg={{ width: 1/2 }} sx={{ width: 35 }}>
              <Typography variant="h6" margin="dense" style={{backgroundColor: "blue", color:"white"}}>
                 PERSONAL DETAILS
              </Typography>
              <Grid container spacing={1}>         
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="firstname"
                    name="firstname"
                    label="First Name"
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
                    {errors.gender?.message}
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
                    {errors.category?.message}
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


                <Typography variant="h6" margin="dense" fullWidth style={{backgroundColor: "blue",marginBottom:"15px",marginTop:"10px", color:"white"}}>
                 COMMUNICATION DETAILS
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Region</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      required={true}
                      value={region}
                      margin="dense" 
                      {...register('region')}
                      onChange={handleChange3}
                      style={{overflow:"hidden"}}
                    >
                      <MenuItem>--select--</MenuItem>
                      <MenuItem value={'rural'}>Rural</MenuItem>
                      <MenuItem value={'urban'}>Urban</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.region ?.message}
                  </Typography>
                  
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="state"
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
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="mandal"
                    name="mandal"
                    label="mandal/municipality"
                    fullWidth
                    margin="dense"
                    {...register('mandal')}
                    error={errors.mandal ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.mandal?.message}
                  </Typography>
                </Grid><Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="village"
                    name="village"
                    label="village/town"
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
                </Grid>


                <Typography variant="h6" margin="dense" fullWidth style={{backgroundColor: "blue",my:10, color:"white"}}>
                 LOGIN DETAILS
                </Typography>
                <Grid container spacing={1}>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="username"
                    name="username"
                    label="Username"
                    fullWidth
                    margin="dense"
                    {...register('username')}
                    error={errors.username ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.username ?.message}
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
            </Grid>

            <Typography variant="h6" margin="dense" style={{backgroundColor: "blue", color:"white", margin:'10px 0px 15px 0px'}}>
                 EDUCATIONAL DETAILS
              </Typography>
              <Grid container spacing={1}>         
                <Grid item xs={12} sm={6} lg={4}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Education type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name='gender'
                      required={true}
                      value={educationtype}

                      {...register('educationtype')}
                      onChange={handleChange4}
                      style={{overflow:"hidden"}}
                    >
                      <MenuItem>--select--</MenuItem>
                      <MenuItem value={'engineering'}>Engineering</MenuItem>
                      <MenuItem value={'polytechnic'}>Polytechnic</MenuItem>
                      <MenuItem value={'degree'}>Degree</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.educationtype?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="collegename"
                    name="collegename"
                    label="College Name"
                    fullWidth
                    margin="dense"
                    {...register('collegename')}
                    error={errors.collegename ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.collegename?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                <TextField
                    required
                    id="coursename"
                    name="coursename"
                    label="Coursename"
                    fullWidth
                    margin="dense"
                    {...register('coursename')}
                    error={errors.coursename ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.coursename?.message}
                  </Typography>
                </Grid> 
                <Grid item xs={12} sm={6} lg={4}>
                    <TextField
                        required
                        id="specialization"
                        name="specialization"
                        label="specialization"
                        fullWidth
                        margin="dense"
                        {...register('specialization')}
                        error={errors.specialization ? true : false}
                      />
                  <Typography variant="inherit" color="textSecondary">
                     {errors.specialization?.message}
                  </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6} lg={4}>
                    <TextField
                        required
                        id="passedoutyear"
                        name="passedoutyear"
                        label="Passed out Year"
                        fullWidth
                        margin="dense"
                        {...register('passedoutyear')}
                        error={errors.passedoutyear ? true : false}
                      />
                  <Typography variant="inherit" color="textSecondary">
                     {errors.passedoutyear?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <TextField
                        required
                        id="registrationid"
                        name="registrationid"
                        label="registrationid"
                        fullWidth
                        margin="dense"
                        {...register('registrationid')}
                        error={errors.registrationid ? true : false}
                      />
                  <Typography variant="inherit" color="textSecondary">
                     {errors.registrationid?.message}
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
    export default Unemployed;
  