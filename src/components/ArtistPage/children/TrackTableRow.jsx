import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { converter, PLAY_ALBUM } from "../../../redux/actions/albumAction";

const TrackTableRow = ({ track, position }) => {
  let duration = converter(track.duration);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: PLAY_ALBUM,
      payload: track,
    });
  };

  return (
    <tr onClick={handleClick}>
      <td>{position + 1}</td>
      <td>{track.title}</td>
      <td>
        <AiOutlineHeart />
      </td>
      <td>{duration}</td>
    </tr>
  );
};

export default TrackTableRow;
