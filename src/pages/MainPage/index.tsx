import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllLaunches } from "../../redux/slices/launchSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import LaunchCart from "../../components/launchCart";
import Skeleton from "../../components/skeleton";
import Pagination from "../../components/paginate";
import "./styles.scss";

const MainPage = () => {
  const dispatch: ThunkDispatch<any, void, any> = useDispatch();
  const launches = useSelector((state: RootState) => state.launches.launches);

  const data = launches.results;
  const { status, error } = useSelector((state: RootState) => state.launches);

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    dispatch(fetchAllLaunches(currentPage));
  }, [dispatch, currentPage]);

  return (
    <>
      {status === "loading" && (
        <section className="mainPage">
          {[...Array(10)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </section>
      )}
      {error && <h2>An error occured: {error}</h2>}

      {status === "resolved" && (
        <>
          <div className="pagination">
            <Pagination
              totalPage={launches.count}
              setCurentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
          <section className="mainPage">
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
          <div className="pagination">
            <Pagination
              totalPage={launches.count}
              setCurentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </>
      )}
    </>
  );
};

export default MainPage;
