import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import CommonHeader from "../CommonHeader";
import ArtistInfo from "./children/ArtistInfo";
import TrackList from "./children/TrackList";

const HEADERS = {
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
};
const ARTIST_API_URL =
  "https://striveschool-api.herokuapp.com/api/deezer/artist/";

const ArtistPage = () => {
  const [searchParams] = useSearchParams();
  const [artist, setArtist] = useState(null);
  console.log("cazzo è artist",artist)

  useEffect(() => {
    const fetchAlbumApi = async (albumId) => {
      const url = ARTIST_API_URL + String(albumId);
      // console.log("url:",url)
      let res = await fetch(url, { headers: HEADERS });
      // console.log("risposta res.ok", res.ok);
      // console.log("risposta status", res.status);
      let newArtist = await res.json();
      // console.log(newArtist);
      setArtist(newArtist);
    };

    fetchAlbumApi(searchParams.get("id"));
  }, [searchParams]);

  return (
    artist && (
      <>
        <Container fluid className="headerAlbum">
          <CommonHeader />
          <Row className="spacing">
            <Col xs={12}>
              <ArtistInfo artist={artist} />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="spacing">
            <Col xs={12}>
              <TrackList tracklist={artist.tracklist} artistId={artist.id} />
            </Col>
          </Row>
        </Container>
      </>
    )
  );
};

export default ArtistPage;
