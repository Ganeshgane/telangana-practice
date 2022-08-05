import React from 'react'
import '../css/bootstrap.css'
import '../css/header.css'
import '../css/style.css'
import ktr from '../images/KTR.jpg'
import green from '../images/Trial-green-pic.png'
import orange from '../images/Trial-orange-pic.png'
import pink from '../images/Trial-Pink-pic.png'
import Corousell from './Corousell'
import NavComponent from '../Loginpage/NavComponent'

const Frontpage = () => {
  return (
    <div>
      <header>
            <NavComponent />
            <Corousell />
          {/* <!--section 1 
==============================================  --> */}
        <div id="section-one" className="b-section">
            <h3 style={{textAlign:"center", paddingTop:20}}>Registration Links</h3>
          <div className="">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-2">
                  <div className="slider-service-item">
                    <div className="slider-thum-content">
                      
                      <a href="#">UnEmployed/Passed out</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="slider-service-item">
                    <div className="slider-thum-content">
                        <a href="#">Pursuing Student(Engineering/
                            Polytechnic)</a>
                      
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="slider-service-item bor-none">
                    <div className="slider-service-item">
                    <div className="slider-thum-content">
                      
                        <a href="#">Pursuing Student(Non-Engineering) </a>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                    <div className="slider-service-item bor-none">
                        <div className="slider-service-item">
                      <div className="slider-thum-content">
                        
                          <a href="#">Employer </a>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="slider-service-item bor-none">
                        <div className="slider-service-item">
                      <div className="slider-thum-content">
                        
                          <a href="#">Engineering College Administrator </a>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="slider-service-item bor-none">
                    
                      <div className="slider-thum-content">
                        
                          <a href="#">Degree College Administrator </a>
                      </div>
                    </div>
                  </div>
                 </div>
                </div>
              </div>
              </div>
            </header>
            {/* <!--===========end section1============--> */}
            {/* <!--==================Section 2 ====================--> */}

            <div id="section-2" className="c-section" >
                <div className="c-sec-inn">
                    <div className="section-header-wrap text-center">
                        <h2 className="title-info"> TS Programs</h2>
                        <div className="section-heading-line"></div>
                      </div>
                  <div className="content">
                    
                    <a className="card" href="#">
                      <div className="front" style={{backgroundImage:  `url(${orange}`}}>
                        <p>SIEMENS</p>
                      </div>
                      <div className="back">
                        <div>
                          <p>GFDXCVBNM<br />JHGFDCVGBHN<br />JKHYGTFCVBH</p>
                          <button className="button"> Click Here </button>
                        </div>
                      </div>
                    </a>
                    <a className="card" href="#">
                      <div className="front" style={{backgroundImage: `url(${green}`}}>
                        <p>SECTORS</p>
                      </div>
                      <div className="back">
                        <div>
                          <p>FDXFCGVHBJ<br />NKUHYGTFRD<br />FSXFCGVHJ</p>
                          <button className="button">Click Here</button>
                        </div>
                      </div>
                    </a><a className="card" href="#">
                      <div className="front" style={{backgroundImage: `url(${pink})`}}>
                        <p>JOBS</p>
                      </div>
                      <div className="back">
                        <div>
                          <p>XCFGVHJKL<br />JUYTRDFGVHB<br />JNKLIUYGT<br />FGVHBJ</p>
                          <button className="button" style={{background:"#ff00cc"}}>Click Here</button>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>


            {/* <!--=====================End section 2 ==============--> */}
            
                      <footer>
              <div className="footer">
              <div className="container">
                  <div className="row">
                      <div className="col-sm-2">
                          <img src={ktr} style={{width:"100%"}}/>
                      </div>
                      <div className="col-sm-2">
                          <ul>
                              <h6>Quick links</h6>
                              <li>Vision and Mission</li>
                              <li>Careers</li>
                              <li>FAQ's</li>
                              <li>Tenders</li>
                          </ul>
                      </div>
                      <div className="col-sm-2">
                          <ul>
                              <h6>Media</h6>
                              <li>Gallery</li>
                              <li>Videos</li>
                              
                          </ul>
                      </div>
                      <div className="col-sm-2">
                          <ul>
                              <h6>Resources</h6>
                              <li>User Manual</li>
                              <li>Careers</li>
                              <li>RTI</li>
                              
                          </ul>
                      </div>
                      <div className="col-sm-2">
                          <ul>
                              <h6>Partners</h6>
                              <li>Find a Training Center</li>
                              <li>Find a Training Partner</li>
                              <li>Find a ESC college</li>
                              
                          </ul>
                      </div>
                      <div className="col-sm-2">
                          <ul>
                              <h6>Contact Us</h6>
                              <li>Vision and Mission</li>
                              <li>Careers</li>
                              <li>FAQ's</li>
                              <li>Tenders</li>
                          </ul>
                      </div>
                  </div>
              </div>

              </div>
              <div className="footer-copyright">
                  <p className="cp-text">
                      © Copyright 2022 YSK Infotech Pvt Ltd. All rights reserved.
                  </p>
              </div>

                      </footer>                    
     </div>
  
  )
}

export default Frontpage