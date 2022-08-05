import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import bannerimg1 from '../images/banner-img1.jpg'
import bannerimg2 from '../images/banner-img2.jpg'
import bannerimg3 from '../images/banner-img3.jpg'

const Corousell = () => {
  return (
    <div style={{ display: 'block',height:"100%", width: "100%"}}>
	<Carousel>
		<Carousel.Item interval={1500}>
		<img className="d-block w-100" src={bannerimg1} alt="Image One"/>
		</Carousel.Item>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src={bannerimg2}
			alt="Image Two"
		/>
		</Carousel.Item>
		<Carousel.Item interval={1500}>
		<img className="d-block w-100" src={bannerimg3} alt="Image One"/>
		</Carousel.Item>
	</Carousel>
	</div>	
  )
}

export default Corousell