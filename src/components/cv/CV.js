import React from 'react';
import Heading from "../layout/Heading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/style.css";

export default function CV() {
    return (
        <>
            <Row>
				<Col md={12}>
					<Heading title="CV" />
	            	<p><h4>WORK EXPERIENCE ( Current )</h4> 
	            	Graphic Web Designer | Snitt Reklamebyrå ( 2019 - now )<br></br>
					Graphic Designer | Kongress & Kultur ( 2020 - now )<br></br>
					Freelance Graphic Designer ( 2016 - now ) <br></br>
					<br></br>
					Leader in Marketing | Hordalan Dataforening ( 2018 - now )<br></br>
					Manager in Marketing | AOHM ( 2017 - now )<br></br>
					Brand Promoter | People Partner ( 2017 - now )
					</p>

	            	<p><h4>WORK EXPERIENCE ( Past )</h4> 
	            	In-House Graphic Designer | Sund Rock Club ( 2018 - 2019 )<br></br>
					Graphic Designer | Webhuset ( 2017 - 2018 )<br></br>
					Graphic Designer | Animal Insight ( 2017 - 2018 )<br></br>
					Graphic Designer | Frekvens ( 2011 - 2012 )<br></br>
					<br></br>
					Visual Merchandiser | Chanel ( 2019 )<br></br>
					Media Production | Hordalan Dataforening ( 2018 )<br></br>
					Journalist | Bergens Avisen (2011)
					</p>

					<p><h4>EDUCATION</h4> 
					Frontend Development | Noroff ( 2018 - 2020 )<br></br>
					Media Design, Bachelor of Arts | NTNU ( 2013 - 2016 )<br></br>
					Media & Communication | Akademiet ( 2009 - 2012 )
					</p>
				</Col>
			</Row>
        </>
    );
}
