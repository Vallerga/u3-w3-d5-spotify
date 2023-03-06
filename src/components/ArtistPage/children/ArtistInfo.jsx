import { BsDot } from "react-icons/bs";

const ArtistInfo = ({ artist }) => {
  return (
    <div className="d-flex justify-content-start align-items-center ms-5 my-4">
      <div>
        <img src={artist.picture_medium} alt="artist Cover" />
      </div>
      <div className="ms-4">
        <h5 className="fs-6"><span>{artist.type}</span>
</h5>
        <h1 className="mt-1 mb-3">{artist.name}</h1>
        <h5 className="fs-6">
          <span>{artist.nb_album} albums</span>
          <BsDot />
          <span>{artist.nb_fan} followers</span>
        </h5>
      </div>
    </div>
  );
};

export default ArtistInfo;
