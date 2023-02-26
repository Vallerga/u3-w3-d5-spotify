import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFromMusicApi } from "../redux/actions";
import HasError from "./HasError";
import Loading from "./Loading";
import ProtCard from "./ProtCard";

const Pop = (endPoint) => {
  const dispatch = useDispatch();
  const hasError = useSelector((state) => state.redu.hasError);
  const isLoading = useSelector((state) => state.redu.isLoading);
  const cards = useSelector((state) => state.redu.arrSong.popArr);
  useEffect(() => {
    dispatch(fetchFromMusicApi(endPoint));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <HasError />
      ) : (
        cards.map((PopSong) => (
        <ProtCard key={PopSong.id} song={PopSong} />
      )))}
    </>
  );
};

export default Pop;
