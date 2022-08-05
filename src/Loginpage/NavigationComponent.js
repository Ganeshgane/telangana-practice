import React from 'react'
import '../css/header.css'
import { Link } from 'react-router-dom'

const NavigationComponent = () => {
  return (
    <div>
             <div className="navbar">
              <div className="container">
              
                {/* <!--<a href="#"><img src="images/logo.png"></a>--> */}
              <a href="/"  style={{color:"white"}}>Home</a>
              <div className="subnav">
                <button className="subnavbtn" style={{color:"white"}}>About Us <i className="fa fa-caret-down"></i></button>
                <div className="subnav-content">
                    <ol>
                  <li><Link to='/Aboutus'>Vision & Mission</Link></li>
                  <li><Link to='/Boardofdirectors'>Board of Directors</Link></li>
                  <li><a href="#">Milestones & Achievements</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Leadership Messages</a></li>
                  <li><a href="#">How we work</a></li>
                  <li><a href="#">RTI</a></li>

                  </ol>
                </div>
              </div> 
              <div className="subnav">
                <button className="subnavbtn"  style={{color:"white"}}>Dashboard <i className="fa fa-caret-down"></i></button>
                <div className="subnav-content">
                    <ol>
                  <li><Link to='/dashboard'>Overview Dashboard</Link></li>
                  <li><a href="#">MIS Dashboard</a></li>
                  <li><a href="#">Job Skills</a></li>
                  <li><a href="#">Engineering</a></li>
                </ol>
                </div>
              </div>
              <div className="subnav">
                <button className="subnavbtn"  style={{color:"white"}}>Skill Stories<i className="fa fa-caret-down"></i></button>
                <div className="subnav-content">
                    <ol>
              <li><a href="#">Skill stories</a></li>
                <li><a href="#">Employer Stories</a></li>
            </ol>
                </div>
                </div>

                <div className="subnav">
                <button className="subnavbtn"  style={{color:"white"}}>Institute Finder <i className="fa fa-caret-down"></i></button>
                <div className="subnav-content">
                    <ol>
                  <li><a href="#">Find ESC Colleges</a></li>
                  <li><a href="#">Find Training Centers</a></li>
                  <li><a href="#">Find Training Partners</a></li>
                  <li><a href="#">Find SDCs</a></li>
                  <li><a href="#">Find CMSDCs</a></li>

                  </ol>
                </div>
              </div> 

              <div className="subnav">
                <button className="subnavbtn"  style={{color:"white"}}>Tenders<i className="fa fa-caret-down"></i></button>
                <div className="subnav-content">
                    <ol>
              <li><a href="#">RFP's/EOI</a></li>
                <li><a href="#">Evaluation Report</a></li>
            </ol>
                </div>
                </div>

                <div className="subnav">
                    <button className="subnavbtn"  style={{color:"white"}}>Skill Development<i className="fa fa-caret-down"></i></button>
                    <div className="subnav-content">
                        <ol>
                  <li><a href="#">Skill Courses</a></li>
                    <li><a href="#">Engineering Courses</a></li>
                </ol>
                    </div>
                    </div>

                <a href="#"  style={{color:"white"}}>Jobs</a>
                <a href="#"  style={{color:"white"}}>Careers</a>
                <Link to='/Contactus'  style={{color:"white"}}>Contact Us</Link>


              </div>
            </div>
    </div>
  )
}

export default NavigationComponent