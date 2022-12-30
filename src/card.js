import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import pizza from  './img/pizza.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Star} from "react-bootstrap-icons";
import Card_product from "./card_product";





function Card_layout() {
    return (
        <Card className={"mt-3"}>
            <Card.Img variant="top" src={pizza} />
            <Card.Body>
                <Row>
                    <Col sm={9}>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Col>
                    <Col sm={3}>
                        <Button variant="success" size="sm">4.0
                            <Star color="white" size={10} className={"ms-2 mb-1"} />

                        </Button>{' '}
                    </Col>
                </Row>

                <Button variant="primary" onclick="Card_product" >Buy Now</Button>
            </Card.Body>
        </Card>




    );
}
export default Card_layout;



