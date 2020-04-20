import React from 'react';
import Heading from "../layout/Heading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function About() {
    return (
        <>
            <Row>
				<Col md={12}>
					<Heading title="About" />
				</Col>
			</Row>
			<Row>
				<Col md={4}>
	            	<p><Image src={require('./images/profile_me.jpg')} alt="Picture of Martha" fluid /></p>
	            	<p>Martha H. Rosenlund ( 26 )<br></br>
	            	Graphic Designer ( BA )<br></br>
	            	Bergen, Norway
	            	</p>
				</Col>

				<Col md={8} >
	            	<p>Hi,<br></br>
					my name is Martha, a 26-year-old graphic designer from Bergen, Norway. 
					I like the taste of good quality coffee, especially after years of working 
					as a Barista and a Coffee Consultant. Coffee alongside my interest in East 
					Asian culture, has both been important fuels for my main passion, graphic design.
					<br></br><br></br>

					It all started off with making magazines and webpages as a hobby at the age of 13. 
					I was already into photography, painting, and writing. Making my own books, blogs, 
					and magazines was the dream. Later on, studied Media and Communication and knew 
					graphic design was the perfect path for me. After a year of Asian studies, 
					I took my bachelor in Media Design, following by years of trying to find my way 
					in the design world. Would it be books, newspapers, and magazines? No. 
					The jobs were with branding, logos, marketing and the main request - webpages.
					<br></br><br></br>

					I got a job as graphic designer in a web company, learning the use of Wordpress, 
					as I only had basic CMS and HTML/CSS background from before. I went on to study 
					Frontend Development to learn more about coding and programming, to be able to 
					make better pages. I started to work with Wordpress at an advertising agency and 
					doing more freelance jobs for companies. I got took on jobs within marketing, 
					but also took it back to my roots with poster-design, for a complete branding 
					package, both digital and physical.
					<br></br><br></br>
					
					So what do I do?<br></br>
					I do design planning. I take the pictures. I make the logos. I write the text. 
					I make the graphic elements. I make social media accounts and run them. 
					I make the flyers. I make the posters. I make the presentations. 
					I make the complete webpage. I do the marketing during and afterward. 
					Everything, while drinking lots of good quality coffee.</p>
				</Col>
			</Row>
        </>
    );
}


		