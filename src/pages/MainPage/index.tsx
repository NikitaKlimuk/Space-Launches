import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllLaunches } from "../../redux/slices/launchSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import LaunchCart from "../../components/launchCart";
import "./styles.scss";

const MainPage = () => {
  const dispatch: ThunkDispatch<any, void, any> = useDispatch();
  const launches = useSelector((state: RootState) => state.launches.launches);
  const data = launches.results;
  const { status, error } = useSelector((state: RootState) => state.launches);

  useEffect(() => {
    dispatch(fetchAllLaunches());
  }, [dispatch]);

  console.log(launches.results);

  return (
    <section className="mainPage">
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}

      {data?.map((item: any) => {
        return (
          <React.Fragment key={item.id}>
            <LaunchCart
              name={item.name}
              id={item.id}
              img={item.image}
              description={item.mission.description}
              net={item.window_start}
            />
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default MainPage;
