import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const CommonHeader = () => {
    return (
        <Row>
            <Col xs={12} className="mainLinks d-none d-md-flex">
              <Link to="/">TRENDING</Link>
              <Link to="/">PODCAST</Link>
              <Link to="/">MOODS AND GENRES</Link>
              <Link to="/">NEW RELEASES</Link>
              <Link to="/">DISCOVER</Link>
            </Col>
          </Row>
    )

}
export default CommonHeader