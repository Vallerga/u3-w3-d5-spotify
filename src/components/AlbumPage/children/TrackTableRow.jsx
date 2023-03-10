import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  converter,
  PLAY_ALBUM,
} from "../../../redux/actions/albumAction";
import { addFriend } from "../../../redux/actions/albumAction";

const TrackTableRow = ({ track, position }) => {
  let duration = converter(track.duration);
  const likedSong = useSelector((state) => state.album.likedSong);
  console.log("likedSong", likedSong);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: PLAY_ALBUM,
      payload: track,
    });
  };

  const likeSong = () => {
    console.log("sono clickato")
    console.log("track.id", track.id);
    console.log("likedSong", likedSong);
    dispatch(addFriend(track.id));
  };

  return (
    <tr onClick={handleClick}>
      <td>{position + 1}</td>
      <td>{track.title}</td>
      <td onClick={likeSong}>
        {likedSong && likedSong?.includes(track.id) ? (
          <span >
            <AiFillHeart />
          </span>
        ) : (
          <span>
            <AiOutlineHeart />
          </span>
        )}
      </td>
      <td>{duration}</td>
    </tr>
  );
};

export default TrackTableRow;
