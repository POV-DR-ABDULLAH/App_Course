import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const FooterComponents = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg='5'>
            <h3 className="fw-bold" style={{ fontFamily: 'italic' }} >App<span className='text-danger'>Course🗿</span></h3>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste iusto vitae eaque laborum soluta deleniti officia. Commodi, voluptate aliquam?</p>
            
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 1934-4132-4556</p>
              </Link>
            </div>

            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">abdullahpondokit@gmail.com</p>
              </Link>
            </div>
          </Col>

          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="" className="text-decoration-none">Home</Link>
            <Link to="kelas" className="text-decoration-none">Kelas</Link>
            <Link to="testimonial" className="text-decoration-none">Testimonial</Link>
            <Link to="faq" className="text-decoration-none">FAQ</Link>
            <Link to="syarat" className="text-decoration-none">Syarat & Ketentuan</Link>
          </Col>

          <Col lg='4' className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3"><span>Subscribe</span> untuk info menarik</h5>
            <div className="subscribe">
              <input type="text" placeholder="Subscribe..." />
              <a href="https://www.youtube.com/@AbdullahPondokit-t8g" target="_blank">
                <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
              </a>
            </div>
            <div className="social mt-3">
              <a href="https://www.instagram.com/abdullahpondokit/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@AbdullahPondokit-t8g" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://github.com/POV-DR-ABDULLAH" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="text-center px-md-0 px-3"> &copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Abdullah</span> , All Right Reserved </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponents