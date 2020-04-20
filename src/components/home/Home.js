import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Home() {
return (
		<>
			<Row>
				<Col md={6} className="detail-image">
	            	<p><Image src={require('./images/ccc.jpg')} alt="Picture of Martha" fluid /></p>
				</Col>

				<Col md={6} className="detail_text">
					<p><Image src={require('./images/happytails.jpg')} alt="Picture of Martha" fluid /></p>	
				</Col>			
			</Row>
			<Row>
				<Col md={8} className="detail-image">
					<p><Image src={require('./images/kaffeserie.jpg')} alt="Picture of Martha" fluid /></p>				
				</Col>

				<Col md={4} className="detail_text">
					<p><Image src={require('./images/poster.jpg')} alt="Picture of Martha" fluid /></p>				
				</Col>
			</Row>
			<Row>
				<Col md={6} className="detail-image">
					<p><Image src={require('./images/spacex.jpg')} alt="Picture of Martha" fluid /></p>				
				</Col>

				<Col md={6} className="detail_text">
					<p><Image src={require('./images/bt.png')} alt="Picture of Martha" fluid /></p>				
				</Col>
			</Row>
			<Row>
				<Col md={4} className="detail-image">
					<p><Image src={require('./images/solid.png')} alt="Picture of Martha" fluid /></p>				
				</Col>

				<Col md={8} className="detail_text">
					<p><Image src={require('./images/murakami.png')} alt="Picture of Martha" fluid /></p>				
				</Col>
			</Row>
			<Row>
				<Col md={6} className="detail-image">
	            	<p><Image src={require('./images/alge.png')} alt="Picture of Martha" fluid /></p>
				</Col>

				<Col md={6} className="detail_text">
					<p><Image src={require('./images/dfirh.jpg')} alt="Picture of Martha" fluid /></p>	
				</Col>			
			</Row>
			<Row>
				<Col md={8} className="detail-image">
					<p><Image src={require('./images/hig.png')} alt="Picture of Martha" fluid /></p>				
				</Col>

				<Col md={4} className="detail_text">
					<p><Image src={require('./images/pechakucha.jpg')} alt="Picture of Martha" fluid /></p>				
				</Col>
			</Row>
			<Row>
				<Col md={6} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Picture of Martha" fluid /></p>
				</Col>

				<Col md={6} className="detail_text">
					<p><Image src={require('./images/letha.jpg')} alt="Picture of Martha" fluid /></p>	
				</Col>			
			</Row>
        </>
	);
}
