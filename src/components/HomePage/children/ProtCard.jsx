import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CARD_ID } from "../../../redux/actions";
import { SPECIFIC_CARD } from "../../../redux/actions/albumAction";

const ProtCard = ({ song }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Col xs={4} className="d-flex flex-column align-items-center px-5">
        <Link className="align-self-start"
          to={`/Album/?id=${song.album.id}`}
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
        <Link
          className="align-self-start"
          style={{ textDecoration: "none", color: "white" }}
          to={`/Album/?id=${song.album.id}`}
        >
          <div className="my-2 text-light" title={song.title}>
            {song.title}
          </div>
        </Link>
        <Link
          className="align-self-start"
          style={{ textDecoration: "none", color: "#6d6d6d" }}
          to={`/Artist/?id=${song.artist.id}`}
        >
          <div className="my-2 text-secondary artistHome">
            {song.artist?.name}
          </div>
        </Link>
      </Col>
    </>
  );
};

export default ProtCard;
