import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFromMusicApi } from "../../../redux/actions";
import HasError from "../../HasError";
import Loading from "../../Loading";
import ProtCard from "./ProtCard";

const Pop = ({endPoint}) => {
  const dispatch = useDispatch();
  const hasError = useSelector((state) => state.home.hasError);
  const isLoading = useSelector((state) => state.home.isLoading);
  const cards = useSelector((state) => state.home.arrSong.popArr);
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
        cards.slice(6, 10).map((PopSong) => (
        <ProtCard key={PopSong.id} song={PopSong} />
      )))}
    </>
  );
};

export default Pop;
