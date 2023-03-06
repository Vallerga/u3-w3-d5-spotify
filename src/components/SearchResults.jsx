import { Col, Row } from "react-bootstrap"

const SearchResults = () => {
    return (
      <Row>
      <Col xs={12}>
        <div id="searchResults" style={{ display: "none" }}>
          <h2>Search Results</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3 limitWidth"></div>
        </div>
      </Col>
    </Row>
    )

}
export default SearchResults