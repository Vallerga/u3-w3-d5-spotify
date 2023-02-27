import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CARD_ID, SPECIFIC_CARD } from "../redux/actions";

const ProtCard = ({song}) => {
  const dispatch = useDispatch();
  return (
    <>
      <Col xs={4}>
        <Link
          to={`/Album`}
          onClick={() => {
            dispatch({
              type: CARD_ID,
              payload: song.id,
            });
            dispatch({
              type: SPECIFIC_CARD,
              payload: song,
            });
          }}
        >
          <img
            style={{ height: "200px" }}
            src={song.album?.cover_xl}
            alt={song.title}
          />
        </Link>
        <p>{song.title}</p>
        <p>{song.artist?.name}</p>
      </Col>
    </>
  );
};

export default ProtCard;
