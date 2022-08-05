
import React from 'react'
import NavComponent from './NavComponent'


const Aboutus = () => {
  const styles={
    width:'100%',
    height:'10%',
    backgroundColor: 'blue',
    color:"white",
    textAlign: 'center',

  }
  return (

    <>
      <div class="d-none d-md-block">
    <NavComponent /><div style={{ margin: "0px 10%" }}>
      </div>
      <div style={styles}>
        <h1>About us</h1>
      </div>
      <div>
        <p> ABOUT US</p>
        <h1>About Organization</h1>
        <p>The Govt. of Telangana has different Missions to achieve double digit growth for the state
          and to make Telangana among the most developed state in the country. Among these, the Knowledge and Skills
          Mission has been formed to provide trained and skilled manpower to all other Missions.</p>
        <h2 style={{ margin: "10px 0px" }}>Context</h2>
        <p>To target 20 million people in Telangana in next 10 years towards skilling and entrepreneurship to meet skilled
          human power demands of all Missions and shape Telangana as the skilled-workforce and knowledge hub for the world</p>

        <h2 style={{ margin: "10px 0px" }}>Vision</h2>
        <p>To eliminate the poverty and create decent work for all by investing in the social capital through employment-oriented
          and industry aligned skill development and livelihood generation</p>

        <h2 style={{ margin: "10px 0px" }}>Mission</h2>
        <p>Identify the gaps in the existing skills ecosystem and upgrade skills to international standards through
          significantindustry involvement, develop necessary frameworks for quality assurance and establish state-of-art skill
          colleges across all MP Constituencies to redefine employability skills in the State of Telangana. Ensure the
          effectiveness of the different skill development programs conducted by state government departments, corporations,
          societies and agencies by convergence and standardization</p>

        <h2 style={{ margin: "10px 0px" }}>Telangana - Scenario</h2>
        <p>The state has 33 districts, Telangana is strategically located with a 900 km coastline, The state has 142 existing urban centers,
          6 mega cities and 2 smart cities planned. Telangana has a huge potential for the job market as the various
          industrial belts are been planned.</p>
      </div>
    </div></>
  )
}

export default Aboutus