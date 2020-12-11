import React, { Component } from 'react';
import { getCandidates } from '../services/candidates';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Layout extends Component {
	state = {
		cabinet: getCandidates(),
	};

	render() {
		return (
			<Container fluid>
				<h2>Biden Cabinet</h2>
				<Row>
					{this.state.cabinet.map((pick) => (
<Col sm={2}>					<Card>
							<Card.Img variant="top" src={pick.imgPath} />
							<Card.Body>
								<Card.Title>{pick.title}</Card.Title>
								<Card.Text>{pick.description}</Card.Text>
                                
								<Button variant="info">More Info</Button>
							</Card.Body>
						</Card> </Col>	
					))}
				</Row>
			</Container>
		);
	}
}

export default Layout;
