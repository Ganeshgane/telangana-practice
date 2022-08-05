 import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
    Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import college from '../images/collegeimage.png'
import student from '../images/candidateimage.png'
import employer from '../images/employerimage.png'
import candidate from '../images/studentunemployed.png'
import engineeringstudent from '../images/studentpursuing.png'
import engineeringcollege from '../images/engineeringcollege.png'
import degreecollege from '../images/degreecollege.png'
import { Link } from 'react-router-dom'

export const RegisterDialogForm = () => {
    const [formValues1, setFormValues1] = useState({
        username: '',
        password: ''
    });
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [loginForm, setLoginForm] = useState(false);
    const [engineering, setEnginnering] = useState(false);
    const [degree, setDegree] = useState(false);
    const buttonStyle={padding:"4px 50px",height:'6vh',width:30,margin:"10px", color:"white", backgroundColor:"blue"}

    const onSubmit1 = (e) => {
        e.preventDefault();
        console.log(formValues1);
    };

    const handleInputChange2 = (e) => {
        const name = e.target.name;
        setFormValues1({ ...formValues1, [name]: e.target.value });
    };
    return (
        <> 
            <Button onClick={() => setShowRegisterForm(!showRegisterForm)}  style={buttonStyle}>
                Register
            </Button>
                  
            <Button onClick={() => setLoginForm(!loginForm)} style={buttonStyle}>
                Login
            </Button>
            
            <Dialog
                open={loginForm}
                fullWidth
                onClose={() => setLoginForm(false)}
            >
                <DialogTitle>Login</DialogTitle>
               
                <DialogContent style={{overflow:"hidden"}}>
                    <form onSubmit={onSubmit1}>
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                                <TextField
                                    label="User Name"
                                    type="email"
                                    required
                                    fullWidth
                                    name="username"
                                    value={formValues1.username}
                                    onChange={handleInputChange2}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Password"
                                    type="password"
                                    required
                                    name="password"
                                    fullWidth
                                    value={formValues1.password}
                                    onChange={handleInputChange2}
                                />
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Button size = "large" variant="contained" onClick={() => setLoginForm(false)} disableElevation  style={buttonStyle}>
                                    Close
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type='submit'
                                    height = '100%'
                                    disableElevation
                                    style={buttonStyle}
                                    >
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
            <Dialog
                open={showRegisterForm}
                fullWidth
                onClose={() => setShowRegisterForm(false)}
            >
                <DialogTitle>Register</DialogTitle>
                <DialogContent style={{overflow:"hidden"}}>
                <Typography gutterBottom> Please select the registration type</Typography>
                        <Grid container spacing={4}>
                        
                            <Grid item xs={3} md={3} lg={3}>
                                <img src={college} alt="college" style={{width:"100%", height:"100%"}} onClick={() => setDegree(!degree)}></img>
                                <Typography style={{color:'blue', fontSize:"2vh"}}>Colleges</Typography>
                            </Grid>
                            <Grid item xs={3} md={3} lg={3}>
                                <img src={student} alt="College student" style={{width:"100%", height:"100%"}} onClick={() => setEnginnering(!engineering)}></img>
                                <Typography style={{color:'blue', fontSize:"2vh"}}>College student</Typography>
                            </Grid>
                            <Grid item xs={3} md={3} lg={3}>
                                <Link to='/Employer'><img src={employer} alt="employer"  style={{width:"100%", height:"100%"}}></img></Link>
                                <Typography style={{color:'blue', fontSize:"2vh"}}>Employer</Typography>
                            </Grid>
                            <Grid item xs={3} md={3} lg={3}>
                                <Link to='/Unemployed'><img src={candidate} alt="unemployed/passout"  style={{width:"100%", height:"100%"}}></img></Link>
                                <Typography style={{color:'blue', fontSize:"2vh"}}>unemployed passout</Typography>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Button variant="contained" onClick={() => setShowRegisterForm(false)} disableElevation  style={buttonStyle}>
                                    Close
                                </Button>
                            </Grid>
                        </Grid>
                
                </DialogContent>
            </Dialog>
            <Dialog
                open={engineering}
                fullWidth style={{width:'100%', height:'100%' }}
                onClose={() => setLoginForm(false)}
            >
                <DialogTitle>Welcome to TSSDC registration</DialogTitle>
                
              <DialogContent style={{overflow:"hidden"}}>
            
              <Typography variant='h6'>Candidate type</Typography>
                  <Grid container spacing={4}>
                            <Grid item xs={6} md={3} lg={3}>
                            <Link to='/Engineeringstudent'><img src={engineeringstudent} alt="engineering student" 
                            style={{width:"100%" }} 
                            ></img>
                            </Link>
                            <Typography style={{color:'blue', textAlign:'center'}}>Engineering/ Polytechnic</Typography>

                            </Grid>
                            <Grid item xs={6} md={3} lg={3}>
                                <Link to='/Degreestudent'><img src={engineeringstudent} alt="degree student" 
                                style={{width:"100%" }}></img></Link> 
                                <Typography style={{color:'blue', textAlign:'center'}} >Degree</Typography>
                                
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} id="des">                                    
                                    <li><b>. Student pursuing in engineering/ polytechnic/ degree college can apply</b></li>
                                    <li><b>.You must have a valid Aadhaar Number for registration</b></li>
                            </Grid>
                   </Grid> 
                   
                   <Grid item xs={12} id="back">
                                <Button variant="contained" onClick={() => setEnginnering(false)} disableElevation  style={buttonStyle}>
                                    Back
                                </Button>
                            </Grid>   
              </DialogContent>
            </Dialog>
            <Dialog
                open={degree}
                fullWidth style={{width:'100%', height:'100%' }}
                onClose={() => setLoginForm(false)}
            >
                <DialogTitle>Welcome to TSSDC college registration</DialogTitle>
                
              <DialogContent style={{overflow:"auto"}}>
              <Typography gutterBottom  variant='h6'>Select College type</Typography>
                  <Grid container spacing={4}>
                            <Grid item xs={12} md={6} lg={6}>
                                <Typography variant='h6' style={{color:'blue'}}>Engineering college</Typography>

                                    <li><b>.</b>College should have proper affiliation</li>
                                    <li><b>.</b>College should have EAMCET Code</li>
                                <Link to='/Engineeringcollege'><img src={engineeringcollege} alt="engineering college" style={{margin:"0px auto", width:"20vh"}}></img></Link>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <Typography variant='h6' style={{color:'blue'}}>Degree College</Typography>

                                    <li><b>.</b>College should have proper registration number</li>
                                    <li><b>.</b>ESC, E-ESC college can register</li>
                                <Link to='/Degreecollege'><img src={degreecollege} alt="degree college" style={{margin:"0px auto", width:"20vh"}} ></img></Link>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" onClick={() => setDegree(false)} disableElevation  style={buttonStyle}>
                                    Back
                                </Button>
                            </Grid>
                   </Grid> 
              </DialogContent>
            </Dialog>
           
        </>
    );
};