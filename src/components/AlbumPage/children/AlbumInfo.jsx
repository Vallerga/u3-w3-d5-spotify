import { BsDot } from "react-icons/bs";
import { converter2 } from "../../../redux/actions/albumAction";

const AlbumInfo = ({ album }) => {
  let duration = converter2(album.duration);
  return (
    <div className="d-flex justify-content-start align-items-center ms-5 my-4">
      <div>
        <img src={album.cover_medium} alt="Album Cover" />
      </div>
      <div className="ms-4">
        <h5 className="fs-6">Album</h5>
        <h1 className="mt-1 mb-3">{album.title}</h1>
        <h5 className="fs-6">
          <span>{album.artist.name}</span>
          <BsDot />
          <span>{album.release_date.slice(0, 4)}</span>
          <BsDot />
          <span>{album.tracks.data.length} songs , </span>
          <span>{duration}</span>
        </h5>
      </div>
    </div>
  );
};

export default AlbumInfo;
