import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function MutualAid() {
    
  return (
    <div>
      <Container fluid style={{maxWidth: 1200, justifyContent: 'center'}}>
        <Row className="align-items-center">
            <Col>
                <img className="img-fluid rounded"
                    alt="Mutual Aid"
                    style={{width: 500, height: 'auto'}}
                />
            </Col>
            <Col>
            <h1 className="font-weight-light">Mutual Aid</h1>
            <p>
              Non-profit statement in progress
            </p>
            </Col>
        </Row>

      </Container>
    </div>
  );
}

export default MutualAid;