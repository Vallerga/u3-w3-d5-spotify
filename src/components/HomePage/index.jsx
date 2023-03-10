import { Container, Row, Col } from "react-bootstrap";
import Pop from "./children/Pop";
import HipHop from "./children/HipHop";
import CommonHeader from "../CommonHeader";
import SearchResults from "../SearchResults";
import Rock from "./children/Rock";

const Home = () => {
  return (
    <>
      <Container
        fluid
        className="spacing mainPage"
      >
        <CommonHeader />
        <SearchResults />
        <Row>
          <Col xs={12}>
            <div id="rock">
              <h2>Rock Classics</h2>
              <div
                className="row row-cols-md-1 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
              >
                <Rock endPoint={"rock"} />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div id="pop">
              <h2>Pop Culture</h2>
              <div
                className="row row-cols-md-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="popSection"
              >
                {" "}
                <Pop endPoint={"pop"} />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div id="hiphop">
              <h2>HipHop</h2>
              <div
                className="row row-cols-md-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              >
                <HipHop endPoint={"hiphop"} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
