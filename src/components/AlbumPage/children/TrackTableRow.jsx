import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  converter,
  LIKE_SONG,
  PLAY_ALBUM,
} from "../../../redux/actions/albumAction";

const TrackTableRow = ({ track, position }) => {
  let duration = converter(track.duration);
  const likedSong = useSelector((state) => state.album.likedSong);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: PLAY_ALBUM,
      payload: track,
    });
  };

  const likeSong = () => {
    dispatch({
      type: LIKE_SONG,
      payload: track.id,
    });
  };

  return (
    <tr onClick={handleClick}>
      <td>{position + 1}</td>
      <td>{track.title}</td>
      <td>
        {likedSong?.includes(track.id) ? (
          <span onClick={likeSong}>
            <AiOutlineHeart />
          </span>
        ) : (
          <span>
            <AiFillHeart />
          </span>
        )}
      </td>
      <td>{duration}</td>
    </tr>
  );
};

export default TrackTableRow;
