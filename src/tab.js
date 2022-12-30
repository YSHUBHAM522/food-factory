import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Tab_Overview from "./img/TAB_OVERVIEW";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';




function Tabbar() {
    return (
        <Container className={"mt-4"}>
            <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="Overview" title="Overview">
              <h4>About This Place</h4>
                <Container>
                    <Row>
                        <Col>
                          <Tab_Overview></Tab_Overview>
                        </Col>
                    </Row>


                </Container>
            </Tab>
            <Tab eventKey="Order Online" title="Order Online">

            </Tab>
            <Tab eventKey="Reviews" title="Reviews">

            </Tab>
            <Tab eventKey="Photos" title="Photos" >

            </Tab>
            <Tab eventKey="Menu" title="Menu" >

            </Tab>
        </Tabs>
        </Container>
    );
}

export default Tabbar;