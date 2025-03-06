import { Col, Container, Row } from "react-bootstrap"
import { testimonial } from "../data/index"

import FaqComponents from "../Components/FaqComponents.jsx"

const TestimonialPages = () => {
  return (
      <div className="testimonial-page">
        <div className="testimonial">
          <Container>
            <Row>
              <Col>
                <h1 className="text-center fw-bold animate__animated animate-fadeInUp animate__delay-1s">Semua Testimonial</h1>
                <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quo temporibus similique suscipit voluptates officiis.</p>
              </Col>
            </Row>

            <Row className="row-cols-lg-3 row-cols-1">
              {testimonial.map((data) => {
                  return (
                    <Col key={data.id} className='mb-5'>
                      <p className='desc shadow-sm'>{data.desc}</p>
                      <div className='people'>
                        <img src={data.image} alt="" />
                        <div >
                          <h5 className='mb-1'>{data.name}</h5>
                          <p className='m-0 fw-bold'>{data.skill}</p>
                        </div>
                      </div>
                    </Col>
                  )
                })}
            </Row>
          </Container>
        </div>

        <FaqComponents />
      </div>
  )
}
export default TestimonialPages