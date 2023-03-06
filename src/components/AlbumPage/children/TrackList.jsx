import Table from 'react-bootstrap/Table';
import { TbClockHour4 } from "react-icons/tb";
import { useDispatch } from 'react-redux';
import { PLAY_ALBUM } from '../../../redux/actions/albumAction';
import TrackTableRow from './TrackTableRow';



function TrackList({tracks}) {
  const tracklist = tracks
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch({
      type: PLAY_ALBUM,
      payload: tracklist,
    });
  };
  return (
    <Table style={{border:"transparent", color: "white"}}>
      <thead onClick={handleClick}>        
        <tr>
          <th>#</th>
          <th>Title</th>
          <th></th>
          <th><TbClockHour4 /></th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((track, i) => <TrackTableRow key={i} track={track} position={i} />)
        }
      </tbody>
    </Table>
  );
}

export default TrackList;