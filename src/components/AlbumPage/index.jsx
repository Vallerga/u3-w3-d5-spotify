import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AlbumInfo from "./children/AlbumInfo";
import TrackList from "./children/TrackList";

const FAKE_ALBUM = {
  "id": 2104391257,
  "readable": true,
  "title": "Rock-A-Hula Baby",
  "title_short": "Rock-A-Hula Baby",
  "title_version": "",
  "link": "https://www.deezer.com/track/2104391257",
  "duration": 116,
  "rank": 100000,
  "explicit_lyrics": false,
  "explicit_content_lyrics": 0,
  "explicit_content_cover": 2,
  "preview": "https://cdns-preview-1.dzcdn.net/stream/c-1205c25c582a59c4af0cd4f001ebafd8-2.mp3",
  "md5_image": "998f17dd59ca825817b53b101f95f942",
  "artist": {
      "id": 1125,
      "name": "Elvis Presley",
      "link": "https://www.deezer.com/artist/1125",
      "picture": "https://api.deezer.com/artist/1125/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/935d35a45e061e7640a0becfa42cef6e/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/935d35a45e061e7640a0becfa42cef6e/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/935d35a45e061e7640a0becfa42cef6e/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/935d35a45e061e7640a0becfa42cef6e/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://striveschool-api.herokuapp.com/api/deezer/artist/1125/top?limit=50",
      "type": "artist"
  },
  "album": {
      "id": 395475577,
      "title": "Young Couple",
      "cover": "https://api.deezer.com/album/395475577/image",
      "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/998f17dd59ca825817b53b101f95f942/56x56-000000-80-0-0.jpg",
      "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/998f17dd59ca825817b53b101f95f942/250x250-000000-80-0-0.jpg",
      "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/998f17dd59ca825817b53b101f95f942/500x500-000000-80-0-0.jpg",
      "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/998f17dd59ca825817b53b101f95f942/1000x1000-000000-80-0-0.jpg",
      "md5_image": "998f17dd59ca825817b53b101f95f942",
      "tracklist": "https://api.deezer.com/album/395475577/tracks",
      "type": "album"
  },
  "type": "track"
};

const FAKE_TRACKS = [
  {
    id: 2104391147,
    readable: true,
    title: "No More",
    title_short: "No More",
    title_version: "",
    isrc: "DEPZ61317242",
    link: "https://www.deezer.com/track/2104391147",
    duration: 139,
    track_position: 1,
    disk_number: 1,
    rank: 100000,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      "https://cdns-preview-4.dzcdn.net/stream/c-4481d0e50010b3336680f313eab0616c-2.mp3",
    md5_image: "998f17dd59ca825817b53b101f95f942",
    artist: {
      id: 1125,
      name: "Elvis Presley",
      tracklist: "https://api.deezer.com/artist/1125/top?limit=50",
      type: "artist",
    },
    type: "track",
  },
  {
    id: 2104391157,
    readable: true,
    title: "Beach Boys Blue",
    title_short: "Beach Boys Blue",
    title_version: "",
    isrc: "DEPZ61417242",
    link: "https://www.deezer.com/track/2104391157",
    duration: 120,
    track_position: 2,
    disk_number: 1,
    rank: 43679,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      "https://cdns-preview-b.dzcdn.net/stream/c-b97b18bb0223496e2be8dfd50ca550db-3.mp3",
    md5_image: "998f17dd59ca825817b53b101f95f942",
    artist: {
      id: 1125,
      name: "Elvis Presley",
      tracklist: "https://api.deezer.com/artist/1125/top?limit=50",
      type: "artist",
    },
    type: "track",
  },
  {
    id: 2104391167,
    readable: true,
    title: "Can't Help Falling In Love",
    title_short: "Can't Help Falling In Love",
    title_version: "",
    isrc: "DEPZ61517242",
    link: "https://www.deezer.com/track/2104391167",
    duration: 178,
    track_position: 3,
    disk_number: 1,
    rank: 100000,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      "https://cdns-preview-1.dzcdn.net/stream/c-1c1b19b5b27c005fd300530c02d02bed-4.mp3",
    md5_image: "998f17dd59ca825817b53b101f95f942",
    artist: {
      id: 1125,
      name: "Elvis Presley",
      tracklist: "https://api.deezer.com/artist/1125/top?limit=50",
      type: "artist",
    },
    type: "track",
  },
  {
    id: 2104391177,
    readable: true,
    title: "Aloha 'Oe",
    title_short: "Aloha 'Oe",
    title_version: "",
    isrc: "DEPZ62217242",
    link: "https://www.deezer.com/track/2104391177",
    duration: 110,
    track_position: 4,
    disk_number: 1,
    rank: 64940,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      "https://cdns-preview-3.dzcdn.net/stream/c-306e06fe2923c42f1a55d4ce970e1670-2.mp3",
    md5_image: "998f17dd59ca825817b53b101f95f942",
    artist: {
      id: 1125,
      name: "Elvis Presley",
      tracklist: "https://api.deezer.com/artist/1125/top?limit=50",
      type: "artist",
    },
    type: "track",
  },
  {
    id: 2104391187,
    readable: true,
    title: "Slicin' Sand",
    title_short: "Slicin' Sand",
    title_version: "",
    isrc: "DEPZ61117241",
    link: "https://www.deezer.com/track/2104391187",
    duration: 92,
    track_position: 5,
    disk_number: 1,
    rank: 57772,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      "https://cdns-preview-3.dzcdn.net/stream/c-36c2e32ee7ca57a817a65eb98105dd26-3.mp3",
    md5_image: "998f17dd59ca825817b53b101f95f942",
    artist: {
      id: 1125,
      name: "Elvis Presley",
      tracklist: "https://api.deezer.com/artist/1125/top?limit=50",
      type: "artist",
    },
    type: "track",
  },
];

const HEADERS = {
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key":
  "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
}
const ALBUM_API_URL = "https://striveschool-api.herokuapp.com/api/deezer/album/";

const fetchAlbumApi = async (albumId) => {

}

const AlbumPage = () => {
  // TODO: IMPLEMENT FETCH
  const [album, setAlbum] = useState(FAKE_ALBUM);
  const [tracks, setTracks] = useState(FAKE_TRACKS);
  const [artist, setArtist] = useState(FAKE_TRACKS);

  
    

  return (
    <>
      <Container fluid className="headerAlbum">
        <Row>
          <Col xs={12} className="spacing mainLinks d-none d-md-flex">
            <Link to="/">TRENDING</Link>
            <Link to="/">PODCAST</Link>
            <Link to="/">MOODS AND GENRES</Link>
            <Link to="/">NEW RELEASES</Link>
            <Link to="/">DISCOVER</Link>
          </Col>
        </Row>
        <Row className="spacing">
          <Col xs={12}>
            <AlbumInfo album={album} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="spacing">
          <Col xs={12}>
            <TrackList tracks={tracks} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AlbumPage;
