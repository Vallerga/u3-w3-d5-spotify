import { Col } from "react-bootstrap";

const ProtCard = (song) => {
  return (
    <>
      <Col xs={4}>      
        <img
          style={{ height: "200px" }}          
          src={song.album.cover}
          alt={song.title}
        />
        <p>{song.title}</p>
        <p>{song.artist.name}</p>
      </Col>
    </>
  );
};

export default ProtCard;
