import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import NavComponent from '../Loginpage/NavComponent';

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

const Engineeringcollege = () => {
  const [typeofcollege, setTypeofcollege] = React.useState('');
  const [tier, setTier] = React.useState('');

  const [typeofinstitution, setTypeofinstitution] = React.useState('');
  const [collegestatus, setCollegestatus] = React.useState('');

  const [nba, setNba] = React.useState('');
  const [nacc, setNacc] = React.useState('');
  const [nirf, setNirf] = React.useState('');
  const [iso, setIso] = React.useState('');


  const handleChange1 = (event) => {
    setTypeofcollege(event.target.value);
  };
  const handleChange2 = (event) => {
    setTypeofinstitution(event.target.value);
  };
  const handleChange3 = (event) => {
    setCollegestatus(event.target.value);
  };
  const handleChange4 = (event) => {
    setTier(event.target.value);
  };
  const handleChange5 = (event) => {
    setNba(event.target.value);
  };
  const handleChange6 = (event) => {
    setNacc(event.target.value);
  };
  const handleChange7 = (event) => {
    setNirf(event.target.value);
  };
  const handleChange8 = (event) => {
    setIso(event.target.value);
  };
    const validationSchema = Yup.object().shape({
      typeofcollege : Yup.string().required('select college type'),
      eamcetcode : Yup.string().required('enter eamcetcode'),
      collegename: Yup.string()
      .required('College name is required')
      .min(6, 'College name must be at least 6 characters'),
      establishmentyear : Yup.string().required()
            .matches(/^[0-9]+$/, "Must be only digits"),
      typeofinstitution : Yup.string().required('select institution type'),
      collegestatus : Yup.string().required('select college status'),
      tier : Yup.string().required('select one'),

      nba : Yup.string().required('select yes/no'),
      nacc : Yup.string().required('select yes/no'),
      nirf : Yup.string().required('select yes/no'),
      iso : Yup.string().required('select yes/no'),
      pincode : Yup.string().required('pincode  is required')
          .matches(/^[0-9]+$/, "Must be only digits"),
      state : Yup.string().required('State is required'),
      district : Yup.string().required('district is required'),
      mandal : Yup.string().required('mandal is required'),
      address : Yup.string().required('address is required'),
      designation : Yup.string().required('designation is required'),      
      contactno : Yup.string().required('house number is required')
                
            .matches(/^[0-9]+$/, "Must be only digits")   
            .min(8, 'contactnumber must be at least 8 characters')
            .max(10, 'contactnumber must not exceed 10 characters'),
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      emailid: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
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
              <Typography variant="h6" margin="dense" style={{backgroundColor: "blue", color:"white", marginBottom:"15px"}}>
                 College Details
              </Typography>
              <Grid container spacing={1}>
              <Grid item xs={12} sm={6} lg={4}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">TYPE OF COLLEGE</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name='collegetype'
                      label="collegetype" 
                      value={typeofcollege}

                      type='collegetype'   
                      {...register('typeofcollege')}

                      onChange={handleChange1}
                    >
                      <MenuItem>--select--</MenuItem>
                      <MenuItem value={'Engineering'}>Engineering</MenuItem>
                      <MenuItem value={'Polytechnic'}>Polytechnic</MenuItem>
                      
                    </Select>
                  </FormControl>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.typeofcollege?.message}
                  </Typography>
                </Grid> 
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="eamcetcode"
                    name="eamcetcode"
                    label="Eamcet Code"
                    fullWidth
                    margin="dense"
                    {...register('eamcetcode')}
                    error={errors.eamcetcode ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.eamcetcode?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="collegename"
                    name="collegename"
                    label="Name of the College"
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
                        id="establishmentyear"
                        name="establishmentyear"
                        label="Year of Establishment"
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
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Institution Type</InputLabel>
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
                      <MenuItem value={'autonomous'}>Autonomous college</MenuItem>
                      <MenuItem value={'deemed'}>Deemed University</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.typeofinstitution?.message}
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
                      label="College Status"  
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
                    <InputLabel id="demo-simple-select-label">tier</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="tier"
                      name='tier'
                      label="tier"  
                      type='radio'    
                    {...register('tier')}

                      onChange={handleChange4}
                    >
                      <MenuItem>--select--</MenuItem>
                      <MenuItem value={'tier1'}>tier 1</MenuItem>
                      <MenuItem value={'tier2'}>tier 2</MenuItem>
                      <MenuItem value={'tier3'}>tier 3</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.tier ?.message}
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
                    {errors.fullname?.message}
                  </Typography>
                </Grid>
                </Grid>


                <Typography variant="h6" margin="dense"  fullWidth style={{backgroundColor: "blue",marginTop:"10px",marginBottom:"15px",  color:"white"}}>
                   AFFILIATIONS
                </Typography>
                <Grid container spacing={2} mb={3}>
                <Grid item xs={12} sm={12} lg={12}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">NBA</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="nba"
                      name='nba'
                      label="nba" 
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
                <Grid item xs={12} sm={12} lg={12}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">NACC</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="nacc"
                      name='nacc'
                      label="nacc"  
                      type='radio'  
                    {...register('nacc')}

                      onChange={handleChange6}
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
                <Grid item xs={12} sm={12} lg={12}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">NIRF</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="nirf"
                      name='nirf'
                      label="nirf"  
                      type='radio'   
                    {...register('nirf')}

                      onChange={handleChange7}
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
                <Grid item xs={12} sm={12} lg={12}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">ISO</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="iso"
                      name='iso'
                      label="iso"  
                      type='radio'
                    {...register('iso')}
                      onChange={handleChange8}
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
                </Grid>


                <Typography variant="h6" margin="dense" fullWidth style={{backgroundColor: "blue",marginTop:"10px", color:"white"}}>
                 ADDRESS FOR COMMUNICATION
                </Typography>
                {/* Rural/ Urban */}
                <Grid container spacing={1}>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    required
                    id="pincode"
                    name="pincode"
                    label="pincode"
                  
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
                </Grid>


                <Typography variant="h6" margin="dense" fullWidth style={{backgroundColor: "blue",marginTop:"10px", color:"white"}}>
                  LOGIN  DETAILS
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
    export default Engineeringcollege;
  