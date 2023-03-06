import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { TbClockHour4 } from "react-icons/tb";
import TrackTableRow from "./TrackTableRow";


function TrackList({ tracklist, artistId }) {
  const [artist, setArtist] = useState(null);
  
  const HEADERS = {
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
  };
  
  useEffect(() => {
    const fetchAlbumApi = async (id) => {
      const ARTIST_API_URL = `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}/top?limit=50`
      console.log("l'url e:",ARTIST_API_URL)      
      let res = await fetch(ARTIST_API_URL, { headers: HEADERS });
      let newArtist = await res.json();
      setArtist(newArtist);
    };

    fetchAlbumApi(artistId);
  }, []);

  return (
    <Table style={{ border: "transparent", color: "white" }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th></th>
          <th>
            <TbClockHour4 />
          </th>
        </tr>
      </thead>
      <tbody>
        {artist && artist.data.map((track, i) => (
          <TrackTableRow key={i} track={track} position={i} />
        ))}
      </tbody>
    </Table>
  );
}

export default TrackList;
