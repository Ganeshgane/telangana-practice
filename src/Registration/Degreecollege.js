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

const Degreecollege = () => {
  const [categoryofinstitution,setCategoryofinstitution] = React.useState('');
  const [typeofinstitution, setTypeofinstitution] = React.useState('');
  const [collegestatus, setCollegestatus] = React.useState('');
  const [collegetype, setCollegetype] = React.useState('');
  const [nba, setNba] = React.useState('');
  const [nacc, setNacc] = React.useState('');
  const [region, setRegion] = React.useState('');

  const handleChange1 = (event) => {
    setCategoryofinstitution(event.target.value);
  };
  const handleChange2 = (event) => {
    setTypeofinstitution(event.target.value);
  };
  const handleChange3 = (event) => {
    setCollegestatus(event.target.value);
  };
  const handleChange4 = (event) => {
    setCollegetype(event.target.value);
  };
  const handleChange5 = (event) => {
    setNba(event.target.value);
  };
  const handleChange6 = (event) => {
    setNacc(event.target.value);
  };
  const handleChange7 = (event) => {
    setRegion(event.target.value);
  };

    const validationSchema = Yup.object().shape({

      categoryofinstitution : Yup.string().required('select one'),
      collegeregistrationno : Yup.string().required('Enter college registration no'),
      nameoftheinstitution : Yup.string().required('Name of the college'),
      yearoftheestablishment : Yup.string().required('Year of establishment')
            .matches(/^[0-9]+$/, "Must be only digits")   ,
      University : Yup.string().required('Enter university'),
      typeofinstitution : Yup.string().required('select one'),
      collegestatus : Yup.string().required('select one'),
      collegetype : Yup.string().required('select one'),
      nba : Yup.string().required('select Yes/No'),
      nacc : Yup.string().required('select Yes/no'),
      region : Yup.string().required('select Region '),
      state : Yup.string().required('State is required'),
      district : Yup.string().required('district is required'),
      mandal : Yup.string().required('mandal  is required'),
      address : Yup.string().required('address is required'),
      name : Yup.string().required('name is required'),
      email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
      emailid: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
      contactno: Yup.string().required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(8, 'contactnumber must be at least 8 characters')
      .max(10, 'contactnumber must not exceed 10 characters'),
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
            <Box px={3} py={2}  style={{margin:"5% 10%"}}>
              <Typography variant="h6" margin="dense" style={{backgroundColor: "blue", color:"white", margin:'10px 0px 15px 0px'}}>
                 GENERAL PARTICULARS OF THE INSTITUTION
              </Typography>
              <Grid container spacing={1}>
              <Grid item xs={12} sm={6} lg={4}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"> Category Of Institution* </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name='categoryofinstitution'
                     
                      value={categoryofinstitution}

                      type='categoryofinstitution'   
                      {...register('categoryofinstitution')}

                      onChange={handleChange1}
                    >
                      <MenuItem>--select--</MenuItem>
                      <MenuItem value={'UG'}>UG courses only</MenuItem>
                      <MenuItem value={'PG'}>PG courses only</MenuItem>
                      <MenuItem value={'both'}>both courses(UG & PG)</MenuItem>
                      
                    </Select>
                  </FormControl>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.categoryofinstitution ?.message}
                  </Typography>
                </Grid> 
              <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="collegeregistrationno"
                    name="collegeregistrationno"
                    label="College Registration no"
                    fullWidth
              
                    margin="dense"
                    {...register('collegeregistrationno')}
                    error={errors.collegeregistrationno ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.collegeregistrationno?.message}
                  </Typography>
                </Grid> 
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="nameoftheinstitution"
                    name="nameoftheinstitution"
                    label="Name of the Institution"
                    fullWidth
                    margin="dense"
                    {...register('nameoftheinstitution')}
                    error={errors.nameoftheinstitution ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.nameoftheinstitution ?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="yearoftheestablishment"
                    name="yearoftheestablishment"
                    label="Year of the establishment"
                    fullWidth
                    margin="dense"
                    {...register('yearoftheestablishment')}
                    error={errors.yearoftheestablishment ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.yearoftheestablishment?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <TextField
                        required
                        id="University"
                        name="University"
                        label="University"
                        fullWidth
                        margin="dense"
                        {...register('University')}
                        error={errors.University ? true : false}
                      />
                  <Typography variant="inherit" color="textSecondary">
                     {errors.University?.message}
                  </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6} lg={4}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">typeofinstitution</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="typeofinstitution"
                      name='typeofinstitution'
                      value={typeofinstitution}
                      label="type of institution"
                      {...register('typeofinstitution')}

                      onChange={handleChange2}
                    >
                      <MenuItem>--select--</MenuItem>
                      <MenuItem value={'affiliated'}>Affiliated college</MenuItem>
                      <MenuItem value={'university'}>University </MenuItem>
                      <MenuItem value={'autonomous'}>Autonomous college</MenuItem>
                      <MenuItem value={'deemed'}>Deemed University</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.typeofinstitution ?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">collegestatus</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="collegestatus"
                      name='collegestatus'
                      value={collegestatus}
                      label="collegestatus"  
                      type='radio'      
                      {...register('collegestatus')}

                      onChange={handleChange3}
                    >
                      <MenuItem>--select--</MenuItem>
                      <MenuItem value={'government'}>Government</MenuItem>
                      <MenuItem value={'private'}>Private</MenuItem>
                      <MenuItem value={'missionary'}>Missionary</MenuItem>
                      <MenuItem value={'educationalsociety'}>Educational society</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.collegestatus ?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">collegetype</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="collegetype"
                      name='collegetype'
                      label="collegetype"  
                      type='radio'        
                      {...register('collegetype')}

                      onChange={handleChange4}
                    >
                      <MenuItem>--select--</MenuItem>
                      <MenuItem value={'men'}>Men</MenuItem>
                      <MenuItem value={'women'}>Women</MenuItem>
                      <MenuItem value={'coeducation'}>Co- education</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.collegetype ?.message}
                  </Typography>
                </Grid>
                </Grid>


                <Typography variant="h6" margin="dense"  fullWidth style={{backgroundColor: "blue",marginTop:"10px",marginBottom:"15px",  color:"white"}}>
                   AFFILIATIONS
                </Typography>
                <Grid container spacing={2} mb={3}>
                <Grid item xs={12} sm={6} lg={4}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">NBA</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="nba"
                      name='nba'
                      label="nba"  
                      type='radio'   
                      {...register('nba')}

                      onChange={handleChange5}
                    >
                      <MenuItem>--select--</MenuItem>
                      <MenuItem value={'yes'}>yes</MenuItem>
                      <MenuItem value={'no'}>no</MenuItem>
                      
                    </Select>
                  </FormControl>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.nba?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">NACC</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="nacc"
                      name='nacc'
                      label="nacc"  
                      {...register('nacc')}

                      onChange={handleChange6}
                    >
                      <MenuItem>--select--</MenuItem>
                      <MenuItem value={'yes'}>yes</MenuItem>
                      <MenuItem value={'no'}>no</MenuItem>
                      
                    </Select>
                  </FormControl>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.nacc?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="website"
                    name="website"
                    label="website"
                  
                    fullWidth
                    margin="dense"
                    {...register('website')}
                    error={errors.website ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.website?.message}
                  </Typography>
                </Grid>
                </Grid>


                <Typography variant="h6" margin="dense" fullWidth style={{backgroundColor: "blue",margin:"10px 0px 15px 0px", color:"white"}}>
                 ADDRESS FOR COMMUNICATION
                </Typography>
                {/* Rural/ Urban */}

                <Grid container spacing={1}>
                <Grid item xs={12} sm={6} lg={4}>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Region</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="region"
                      name='region'
                      label="region"  
                      type='radio'    
                      {...register('region')}

                      onChange={handleChange7}
                    >
                      <MenuItem>--select--</MenuItem>
                      <MenuItem value={'rural'}>Rural</MenuItem>
                      <MenuItem value={'urban'}>Urban</MenuItem>
                      
                    </Select>
                  </FormControl>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.region?.message}
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
                    id="address"
                    name="address"
                    label="address"
                    fullWidth
                    margin="dense"
                    {...register('address')}
                    error={errors.address ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.address?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="name"
                    fullWidth
                    margin="dense"
                    {...register('name')}
                    error={errors.name ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.name?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="email"
                    fullWidth
                    margin="dense"
                    {...register('email')}
                    error={errors.email ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.email?.message}
                  </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="contactno"
                    name="contactno"
                    label="contactno"
              
                    fullWidth
                    margin="dense"
                    {...register('contactno')}
                    error={errors.contactno ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.contactno?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="designation"
                    name="designation"
                    label="designation"
                    fullWidth
                    margin="dense"
                    {...register('designation')}
                    error={errors.designation ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.designation?.message}
                  </Typography>
                </Grid>
                </Grid>
                
                <Typography variant="h6" margin="dense" fullWidth style={{backgroundColor: "blue",margin:"10px 0px 15px 0px", color:"white"}}>
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
    export default Degreecollege;
  