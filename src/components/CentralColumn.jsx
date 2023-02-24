import { Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CentralColumn = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SELECT_SONG",
      payload: query,
    });
  };
  const song = useSelector((state) => state.central.fetchSongs);
  console.log(song);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Select a song"
            />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col style={{fontSize: "100px", background: "red", color: "white" }}>
          <p> {song}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CentralColumn;
