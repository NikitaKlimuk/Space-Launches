import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchLaunch } from "../../redux/slices/launchSlice";
import formatDate from "../../utils/formatDate";

import "./styles.scss";
import leftIcon from "../../assets/icons/left.svg";
import SkeletonBig from "../../components/skeletonBig";

const DetailsPage = () => {
  const dispatch: ThunkDispatch<any, void, any> = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const launch = useSelector((state: RootState) => state.launches.launch);
  const { status, error } = useSelector((state: RootState) => state.launches);

  useEffect(() => {
    dispatch(fetchLaunch(id));
  }, [dispatch, id]);

  return (
    <section className="detailsPage">
      {status === "loading" && <SkeletonBig />}
      {error && <h2>An error occured: {error}</h2>}

      {launch.image ? (
        <>
          <button className="back__button" onClick={() => navigate(-1)}>
            <img src={leftIcon} alt="back to main page button" />
            Back
          </button>
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
        </>
      ) : null}
    </section>
  );
};

export default DetailsPage;
