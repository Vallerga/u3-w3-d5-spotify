import {AiOutlineHeart} from "react-icons/ai"

const TrackTableRow = ({track}) => {
  return (
    <tr>
      <td>{track.track_position}</td>
      <td>{track.title}</td>
      <td><AiOutlineHeart /></td>
      <td>{track.duration}</td>
    </tr>
  );
};

export default TrackTableRow;
