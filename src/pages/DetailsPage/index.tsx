import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchLaunch } from "../../redux/slices/launchSlice";
import "./styles.scss";
import formatDate from "../../utils/formatDate";

const DetailsPage = () => {
  const dispatch: ThunkDispatch<any, void, any> = useDispatch();
  const { id } = useParams();

  const launch = useSelector((state: RootState) => state.launches.launch);
  const { status, error } = useSelector((state: RootState) => state.launches);

  useEffect(() => {
    dispatch(fetchLaunch(id));
  }, [dispatch, id]);

  console.log(launch);

  return (
    <section className="detailsPage">
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}

      {launch ? (
        <div className="detailsPage__wrapper">
          <img src={launch.image} alt={launch.name}></img>
          <div className="detailsPage__wrapper-title">{launch.name}</div>
          <div className="detailsPage__wrapper-descr">
            {launch.mission?.description}
          </div>
          <div className="detailsPage__wrapper-time">
            Rocket launch date: {formatDate(launch.net)}
          </div>
          <div className="detailsPage__wrapper-company">
            Company name: {launch.launch_service_provider?.name}
          </div>
          <div className="detailsPage__wrapper-total">
            Total launches: {launch?.orbital_launch_attempt_count}
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default DetailsPage;
