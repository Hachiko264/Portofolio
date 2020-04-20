import React from 'react';
import { useForm } from "react-hook-form"
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Heading from "../layout/Heading";
import Form from "react-bootstrap/Form";
import ErrorMessage from "./ErrorMessage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../../css/style.css";

const schema = yup.object().shape({
	firstName: yup.string().required("First name is required"),
	lastName: yup.string().required("Last name is required"),
	email: yup
		.string()
		.label('Email')
		.email("Please enter a valid email")
		.required("Email is required"),
	message: yup
		.string()
		.label('Message')
		.required("A message is required")
});

function Contact() {
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

	function onSubmit(data) {
		console.log("data", data);
	}
	return (
		<Row>
			<Col md={12}>
		        <Form onSubmit={handleSubmit(onSubmit)}>
			        <Heading title="Contact" />
			        <p>
			        	<a href="https://www.facebook.com/martha264/">
				        	<Image 
				        	src={require('./images/002-facebook.svg')} 
				        	alt="Facebook" 
				        	fluid 
				        	className="d-inline-block"/>
			        	</a>
			        	<a href="https://www.instagram.com/hachiko264/">
				        	<Image 
				        	src={require('./images/003-instagram.svg')} 
				        	alt="Instagram" 
				        	fluid 
				        	className="d-inline-block"/>
			        	</a>
			        	<a href="https://www.linkedin.com/in/marthahr/">
				        	<Image 
				        	src={require('./images/001-linkedin.svg')} 
				        	alt="LinkedIn" 
				        	fluid 
				        	className="d-inline-block"/>
			        	</a>
			        	<a href="https://fascinationandperfection.tumblr.com/">
				        	<Image 
				        	src={require('./images/004-tumblr.svg')} 
				        	alt="Tumblr" 
				        	fluid 
				        	className="d-inline-block"/>
			        	</a>
			        </p>
			        <p>
			            <Form.Group>
			                <Form.Label>First Name</Form.Label>
			                <Form.Control name="firstName" placeholder="Enter your first name" ref={register({required: true, min: 4, maxLength: 80})} />
			                {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
			            </Form.Group>

			            <Form.Group>
			                <Form.Label>Last Name</Form.Label>
			                <Form.Control name="lastName" placeholder="Enter your last name" ref={register({required: true, min: 4, maxLength: 80})} />
			                {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
			            </Form.Group>

			            <Form.Group>
			                <Form.Label>Email</Form.Label>
			                <Form.Control name="email" placeholder="Enter your email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
			                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
			            </Form.Group>

			            <Form.Group>
			                <Form.Label>Message</Form.Label>
			                <Form.Control name="message" placeholder="Write you message here" ref={register({required: true, min: 10, maxLength: 500})} />
			                {errors.message && <ErrorMessage>{errors.message.Message}</ErrorMessage>}
			            </Form.Group>
			            <Button type="submit" variant="light">Submit</Button>
			        </p>
		        </Form>
		    </Col>
		</Row>

	);
	
}

export default Contact;