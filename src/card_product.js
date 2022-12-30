import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css'
import Card from 'react-bootstrap/Card';
import pizza from './img/pizza.jpg'



function Card_product(){
    return(
        <Container>

            <Row>
                <Col className={'col1 '}  sm={8}>
                    <Card>
                        <Card.Img variant="top" src={pizza} height={300} />

                    </Card>

                </Col>
                <Col className={'col1'}>

                    <Row>
                        <Col className={'col1 half_col'}>
                            <Card>
                            <Card.Img variant="top" src={pizza} height={150}/>
                            </Card>

                        </Col>
                    </Row>
                    <Row>
                        <Col className={'col1 half_col'}>
                            <Card>
                                <Card.Img variant="top" src={pizza} height={150} />

                            </Card>
                        </Col>
                    </Row>

                </Col>
                <Col className={'col1 last_col'}>
                    <Card>
                        <Card.Img variant="top" src={pizza} height={300} />

                    </Card>

                </Col>
            </Row>
        </Container>
    );
}

export default Card_product;