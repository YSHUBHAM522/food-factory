import Card_layout from "./card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {
  return (

      <Container>
        <Row>
          <Col sm>
            <Card_layout/>
          </Col>
          <Col sm>
              <Card_layout/>
          </Col>
          <Col sm>
            <Card_layout/>
          </Col>
        </Row>
      </Container>



  );
}

export default App;
