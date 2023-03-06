import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import shuffle from "../assets/Shuffle.png";
import Play from "../assets/Play.png";
import Previus from "../assets/Previous.png";
import Repeat from "../assets/Repeat.png";
import Next from "../assets/Next.png";
// import { playSong } from "../redux/actions/albumAction";

const MyPlayer = () => {
  const track = useSelector((state) => state.home.playAlbum);
  // playSong(track)
  return (
    <>
      <Container fluid className="fixed-bottom bg-container pt-1 ">
        <Row>
          <Col sm={8} className="offset-lg-2">
            <Row>
              <Col
                xs={6}
                md={4}
                lg={2}
                className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
              >
                <Row>
                  <Col>
                    <Link>
                      <img src={shuffle} alt="shuffle" />
                    </Link>
                  </Col>
                  <Col>
                    <Link>
                      <img src={Previus} alt="previous" />
                    </Link>
                  </Col>
                  <Col>
                    <Link 
                    // onClick = {playSong}
                    >
                      <img src={Play} alt="play" />
                    </Link>
                  </Col>
                  <Col>
                    <Link>
                      <img src={Next} alt="next" />
                    </Link>
                  </Col>
                  <Col>
                    <Link>
                      <img src={Repeat} alt="repeat" />
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center playBar py-3">
              <Col xs={8} md={6}>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyPlayer;
