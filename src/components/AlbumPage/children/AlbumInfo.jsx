const AlbumInfo = ({ album }) => {
  return (
    <div className="d-flex justify-content-start align-items-center ms-5 my-3">
      <div>
        <img src={album.album.cover_medium} alt="album cover w-100" />
      </div>
      <div className="ms-4">
        <h5 className="fs-6">Album</h5>
        <h1 className="mt-1 mb-3">{album.title}</h1>
        {/* TODO retrive artist name */}
        <h5 className="fs-6">
          <span>{album.artist.name}</span>
        </h5>
      </div>
    </div>
  );
};

export default AlbumInfo;
