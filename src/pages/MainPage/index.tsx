import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllLaunches } from "../../redux/slices/launchSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

const MainPage = () => {
  const dispatch: ThunkDispatch<any, void, any> = useDispatch();
  const launches = useSelector((state: RootState) => state.launches.launches);

  useEffect(() => {
    dispatch(fetchAllLaunches());
  }, [dispatch]);

  console.log(launches);

  return <div>This is Main page</div>;
};

export default MainPage;
