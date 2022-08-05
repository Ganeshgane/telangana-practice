import React from 'react'
import "../css/header.css"
import ktr from '../images/KTR.jpg'
import kcr from '../images/KCR.jpg'

const Header = () => {
  return (
    <div>
        <div className="middle-header">
              <div className="container">
                  <div className="row">
                    <div className="col-sm-2">
                        <img src={kcr} alt='KCR pic' width="100%"/>
                    </div>
                  
                    <div className="col-sm-8" style={{textAlign: 'center', paddingTop: 20}}>
                        <p style={{fontWeight:'bold', fontSize:30}}>Telangana state skill Development Corporation</p>
                        <p>Help-Line No :  040 4855 5549</p>
                    </div>
                    <div className="col-xs-3 col-sm-4 col-md-1 col-lg-2">
                        <img src={ktr} width="100%" />
                    </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default Header