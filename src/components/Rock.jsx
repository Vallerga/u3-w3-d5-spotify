import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFromMusicApi } from "../redux/actions";
import HasError from "./HasError";
import Loading from "./Loading";
import ProtCard from "./ProtCard";

const Rock = ({endPoint}) => {
  const dispatch = useDispatch();
  const hasError = useSelector((state) => state.home.hasError);
  const isLoading = useSelector((state) => state.home.isLoading);
  const cards = useSelector((state) => state.home.arrSong.rockArr);
  useEffect(() => {
    dispatch(fetchFromMusicApi(endPoint));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <HasError />
      ) : (
        cards
          .slice(6, 10)
          .map((rockSong) => <ProtCard key={rockSong.id} song={rockSong} />)
      )}
    </>
  );
};

export default Rock;
