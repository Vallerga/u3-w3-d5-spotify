import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import CommonHeader from "../CommonHeader";
import AlbumInfo from "./children/AlbumInfo";
import TrackList from "./children/TrackList";

const HEADERS = {
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
};
const ALBUM_API_URL =
  "https://striveschool-api.herokuapp.com/api/deezer/album/";

const AlbumPage = () => {
  const [searchParams] = useSearchParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbumApi = async (albumId) => {
      const url = ALBUM_API_URL + String(albumId);
      // console.log("url:",url)
      let res = await fetch(url, { headers: HEADERS });
      // console.log("risposta res.ok", res.ok);
      // console.log("risposta status", res.status);
      let newAlbum = await res.json();
      // console.log(newAlbum);
      setAlbum(newAlbum);
    };

    fetchAlbumApi(searchParams.get("id"));
  }, [searchParams]);

  return (
    album && (
      <>
        <Container fluid className="headerAlbum">
          <CommonHeader />
          <Row className="spacing">
            <Col xs={12}>
              <AlbumInfo album={album} />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="spacing">
            <Col xs={12}>
              <TrackList tracks={album.tracks.data} />
            </Col>
          </Row>
        </Container>
      </>
    )
  );
};

export default AlbumPage;
