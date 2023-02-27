import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFromMusicApi } from "../redux/actions";
import HasError from "./HasError";
import Loading from "./Loading";
import ProtCard from "./ProtCard";

const HipHop = ({endPoint}) => {
  const dispatch = useDispatch();
  const hasError = useSelector((state) => state.redu.hasError);
  const isLoading = useSelector((state) => state.redu.isLoading);
  const cards = useSelector((state) => state.redu.arrSong.hiphopArr);
  useEffect(() => {
    dispatch(fetchFromMusicApi(endPoint));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(cards)
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <HasError />
      ) : (
        cards?.slice(6, 10).map((hipPopSong) => (
        <ProtCard key={hipPopSong.id} song={hipPopSong} />
      )))}
    </>
  );
};

export default HipHop;
