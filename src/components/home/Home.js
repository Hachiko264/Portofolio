import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Home() {
return (
		<>
			<Row>
				<Col md={6} className="detail-image">
	            	<p><Image src={require('./images/ccc.jpg')} alt="webpage for CCC" fluid /></p>
				</Col>

				<Col md={6} className="detail_text">
					<p><Image src={require('./images/happytails.jpg')} alt="Animal App" fluid /></p>	
				</Col>			
			</Row>
			<Row>
				<Col md={8} className="detail-image">
					<p><Image src={require('./images/kaffeserie.jpg')} alt="Bags of coffee" fluid /></p>				
				</Col>

				<Col md={4} className="detail_text">
					<p><Image src={require('./images/poster.jpg')} alt="Graphic poster" fluid /></p>				
				</Col>
			</Row>
			<Row>
				<Col md={6} className="detail-image">
					<p><Image src={require('./images/spacex.jpg')} alt="Webpage about SpaceX" fluid /></p>				
				</Col>

				<Col md={6} className="detail_text">
					<p><Image src={require('./images/bt.png')} alt="Newspaper" fluid /></p>				
				</Col>
			</Row>
			<Row>
				<Col md={4} className="detail-image">
					<p><Image src={require('./images/solid.png')} alt="Social app" fluid /></p>				
				</Col>

				<Col md={8} className="detail_text">
					<p><Image src={require('./images/murakami.png')} alt="Murakami books" fluid /></p>				
				</Col>
			</Row>
			<Row>
				<Col md={6} className="detail-image">
	            	<p><Image src={require('./images/alge.png')} alt="Typescirpt design" fluid /></p>
				</Col>

				<Col md={6} className="detail_text">
					<p><Image src={require('./images/dfirh.jpg')} alt="Webpage design" fluid /></p>	
				</Col>			
			</Row>
			<Row>
				<Col md={8} className="detail-image">
					<p><Image src={require('./images/hig.png')} alt="Map app" fluid /></p>				
				</Col>

				<Col md={4} className="detail_text">
					<p><Image src={require('./images/pechakucha.jpg')} alt="Peacha Kucha poster" fluid /></p>				
				</Col>
			</Row>
			<Row>
				<Col md={6} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>

				<Col md={6} className="detail_text">
					<p><Image src={require('./images/letha.jpg')} alt="Shoes website" fluid /></p>	
				</Col>			
			</Row>
        </>
	);
}
