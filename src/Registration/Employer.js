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


const Employer = () => {
  const [type, setType] = React.useState('');

  const [categoryofactivity, setCategoryofactivity] = React.useState('');
  const [organizationregisteredas, setOrganizationregisteredas] = React.useState('');

  const handleChange1 = (event) => {
    setType(event.target.value);
  };
  const handleChange2 = (event) => {
    setCategoryofactivity(event.target.value);
  };
  const handleChange3 = (event) => {
    setOrganizationregisteredas(event.target.value);
  };


    const validationSchema = Yup.object().shape({
      type : Yup.string().required('select'),
      organizationname: Yup.string().required(),
      pannumber: Yup.string().required('Enter PAN number'),
      gstnumber: Yup.string(),
      website: Yup.string(),
      establishmentyear : Yup.string().required('Enter established year')
          .matches(/^[0-9]+$/, "Must be only digits"),
      state : Yup.string().required('State is required'),
      address : Yup.string().required('address is required'),
      district : Yup.string().required('district is required'),
      categoryofactivity : Yup.string().required('select'),
      organizationregisteredas : Yup.string().required('select'),
      designation : Yup.string().required('Enter Designation'),
      name: Yup.string().required('Enter Name'),
      emailid : Yup.string().required('emailid is required'),
      contactno : Yup.string().required('Enter Contact Number')
              .matches(/^[0-9]+$/, "Must be only digits")
              .min(8, 'contactnumber must be at least 8 characters')
              .max(10, 'contactnumber must not exceed 10 characters'),
      alternatenumber: Yup.string(),
      username: Yup.string().email().required('Enter UserName'),
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
              <Typography variant="h6" margin="dense" style={{backgroundColor: "blue", color:"white",margin:" 10px 0px 15px 0px"}}>
                 ORGANIZATION REGISTRATION 
              </Typography>
            <Box px={3} py={2}  style={{margin:"5% 10%"}}>
              <Typography variant="h6" margin="dense" style={{backgroundColor: "blue", color:"white",margin:" 10px 0px 15px 0px"}}>
                 GENERAL DETAILS
              </Typography>
              <Grid container spacing={1}>
              <Grid item xs={12} sm={6} lg={4}>
                  <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name='type'
                    label="type"  
         
                    {...register('type')}

                    onChange={handleChange1}
                  >
                    <MenuItem>--select--</MenuItem>
                    <MenuItem value={'company'}>Company/ Corporate</MenuItem>
                    <MenuItem value={'recruitmentpatner'}>Recruitment Patner</MenuItem>
                    
                  </Select>
                </FormControl>
                <Typography variant="inherit" color="textSecondary">
                  {errors.type?.message}
                </Typography>
                </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="organizationname"
                    name="organizationname"
                    label="Enter Organization name"
                    fullWidth
                    margin="dense"
                    {...register('organizationname')}
                    error={errors.organizationname ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.organizationname?.message}
                  </Typography>
                </Grid> 
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="gstnumber"
                    name="gstnumber"
                    label="GST NUMBER "
                    fullWidth
                    margin="dense"
                    {...register('gstnumber')}
                    error={errors.gstnumber ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.gstnumber?.message}
                  </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="pannumber"
                    name="pannumber"
                    label="ENTER PAN NUMBER"
                    fullWidth
                    margin="dense"
                    {...register('pannumber')}
                    error={errors.pannumber ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.pannumber?.message}
                  </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6} lg={4}>
                    <TextField
                        required
                        id="establishmentyear"
                        name="establishmentyear"
                        label="establishmentyear"
        
                        fullWidth
                        margin="dense"
                        {...register('establishmentyear')}
                        error={errors.establishmentyear ? true : false}
                      />
                  <Typography variant="inherit" color="textSecondary">
                     {errors.establishmentyear?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <TextField
                        required
                        id="website"
                        name="website"
                        label="website"
                        type="url"
                        fullWidth
                        margin="dense"
                        {...register('website')}
                        error={errors.website ? true : false}
                      />
                  <Typography variant="inherit" color="textSecondary">
                     {errors.website?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <TextField
                        required
                        id="organizationlogo"
                        name="organizationlogo"
                        label="organizationlogo"
                        type="file"
                        fullWidth
                        margin="dense"
                        {...register('organizationlogo')}
                        error={errors.organizationlogo ? true : false}
                      />
                  <Typography variant="inherit" color="textSecondary">
                     {errors.organizationlogo?.message}
                  </Typography>
                </Grid>
                {/* company(or)corporater / Recruitment Partner */}
                
                </Grid>


                
                <Typography variant="h6" margin="dense" fullWidth style={{backgroundColor: "blue",my:10, color:"white"}}>
                 ORGANIZATION DETAILS
                </Typography>
                {/* Rural/ Urban */}
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
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">categoryofactivity</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="categoryofactivity"
                      name='categoryofactivity'
                      label="Category of activity"     
                      {...register('categoryofactivity')}

                      onChange={handleChange2}
                    >
                      <MenuItem>--select--</MenuItem>
                      <MenuItem value={'manufacturing'}>Manufacturing</MenuItem>
                      <MenuItem value={'service'}>Service</MenuItem>
                      <MenuItem value={'trade'}>Trade</MenuItem>
                      <MenuItem value={'others'}>Others</MenuItem>
                      
                    </Select>
                  </FormControl>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.categoryofactivity?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Oganization registered as</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="organizationregisteredas"
                      name='organizationregisteredas'
                      label="organizationregisteredas"    
                      {...register('organizationregisteredas')}

                      onChange={handleChange3}
                    >
                      <MenuItem>--select--</MenuItem>
                      <MenuItem value={'pvt ltd'}>Pvt Ltd</MenuItem>
                      <MenuItem value={'public ltd'}>Public Ltd</MenuItem>
                      <MenuItem value={'proprietorship'}>Proprietorship</MenuItem>
                      <MenuItem value={'patnership'}>Patnership</MenuItem>
                      <MenuItem value={'society'}>Society</MenuItem>
                      <MenuItem value={'trust'}>Trust</MenuItem>
                      <MenuItem value={'others'}>Others</MenuItem>
                      
                    </Select>
                  </FormControl>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.organizationregisteredas?.message}
                  </Typography>
                </Grid>
            
                </Grid>


                <Typography variant="h6" margin="dense" fullWidth style={{backgroundColor: "blue",margin:"10px 0px 15px 0px", color:"white"}}>
                    CONTACT DETAILS
                </Typography>
                <Grid container spacing={1}>
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
                    id="contactno"
                    name="contactno"
                    label="Contact number"
                    fullWidth
                    margin="dense"
                    {...register('contactno')}
                    error={errors.contactno? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.contactno?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="alternatenumber"
                    name="alternatenumber"
                    label="Alternate number"
                    fullWidth
                    margin="dense"
                    {...register('alternatenumber')}
                    error={errors.alternatenumber? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.alternatenumber?.message}
                  </Typography>
                </Grid>
                </Grid>


                <Typography variant="h6" margin="dense" fullWidth style={{backgroundColor: "blue",my:10, color:"white"}}>
                    LOGIN CREDENTIALS
                </Typography>
                <Grid container spacing={1}>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="username"
                    name="username"
                    label="username"
                    type="username"
                    fullWidth
                    margin="dense"
                    {...register('username')}
                    error={errors.username ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.username?.message}
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
    export default Employer;
  