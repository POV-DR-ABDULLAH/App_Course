import { Accordion, Col, Container, Row } from "react-bootstrap"
import {faq} from "../data/index"

const FaqComponents = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold animate__animated animate-fadeInUp animate__delay-1s">Pertanyaan Yang Sering Ditanyakan</h2>
          </Col>
        </Row>

        <Row className="row-cols-lg-2 row-cols-1 g-3 pt-5">
          {faq.map((data) => {
            return (
              <Col key={data.id}>
                <Accordion className="shadow-sm">
                  <Accordion.Item eventKey={data.eventKey}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>{data.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            )
          })}
        </Row>
      </Container>
      
    </div>
  )
}

export default FaqComponents