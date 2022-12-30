import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";




function Tab_Overview(){
    return(


            <Row>
               <Col className={'col1 '} sm={9}>
                   <Card style={{ width: '18rem' }}>
                       <Card.Body>
                           <h6 size="sm">RESTAURANT SAFETY MEASURE</h6>
                           <h6 size="sm">Daily Temp. Checks</h6>

                       </Card.Body>
                   </Card>

                   <p></p>
                   <h6> Menu</h6>

                   <Row>
                       <Col className={'col1 '} sm={4}>
                           <Card style={{ width: '18rem' }}>
                               <Card.Img variant="top" src="holder.js/100px180" />
                               <Card.Body>
                                   <Card.Title>Card Title</Card.Title>
                                   <Card.Text>
                                       Some quick example text to build on the card title and make up the
                                       bulk of the card's content.
                                   </Card.Text>
                                   <Button variant="primary">Go somewhere</Button>
                               </Card.Body>
                           </Card>
                       </Col>

                       <Col className={'col1 '} sm={4}>
                           <Card style={{ width: '18rem' }}>
                               <Card.Img variant="top" src="holder.js/100px180" />
                               <Card.Body>
                                   <Card.Title>Card Title</Card.Title>
                                   <Card.Text>
                                       Some quick example text to build on the card title and make up the
                                       bulk of the card's content.
                                   </Card.Text>
                                   <Button variant="primary">Go somewhere</Button>
                               </Card.Body>
                           </Card>
                       </Col>
                   </Row>


               </Col>


                <Col className={'col1 ,'} sm={3}>
                    <Card style={{ width: '18rem' }}>

                        <Card.Body >
                            <Card.Title>Call</Card.Title>
                            <h6 className={"color"}>+917567569919
                            </h6>
                            <h6 className={"color"}>+917567569919
                            </h6>
                            <Card.Title>Direction</Card.Title>

                            <Card.Text>
                                Shop 9, Plot 264/A, Ground Floor, Leela Nivas, Laxmi Napoo Road, Matunga East, Mumbai
                            </Card.Text>
                            <Button variant="outline-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-clipboard" viewBox="0 0 16 16">
                                    <path
                                        d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                    <path
                                        d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                </svg> &nbsp; Copy</Button>{' '}

                            <Button variant="outline-success">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                     className="bi bi-arrow-90deg-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"/>
                            </svg>   &nbsp; Direction</Button>{' '}
                        </Card.Body>
                    </Card>

                </Col>
            </Row>

    );
}

export default Tab_Overview;