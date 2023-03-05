import Table from 'react-bootstrap/Table';
import { TbClockHour4 } from "react-icons/tb";
import TrackTableRow from './TrackTableRow';

function TrackList({tracks}) {
  return (
    <Table style={{border:"transparent", color: "white"}}>
      <thead>        
        <tr>
          <th>#</th>
          <th>Title</th>
          <th></th>
          <th><TbClockHour4 /></th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((track) => <TrackTableRow track={track} />)
        }
      </tbody>
    </Table>
  );
}

export default TrackList;