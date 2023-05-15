import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILaunchCart } from "../../interfaces/launchCart";
import getRemainingTime from "../../utils/getRemainingTime";
import "./styles.scss";

const LaunchCart: React.FC<ILaunchCart> = ({
  img,
  name,
  description,
  id,
  net,
}) => {
  const navigate = useNavigate();
  const remainingDays = getRemainingTime(net);
  const [timer, setTimer] = useState(remainingDays as typeof remainingDays);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        const newSeconds = prevTimer.seconds - 1;

        if (newSeconds < 0) {
          const newMinutes = prevTimer.minutes - 1;
          return {
            days: prevTimer.days,
            hours: prevTimer.hours,
            minutes: newMinutes < 0 ? 0 : newMinutes,
            seconds: 59,
          };
        }

        return {
          days: prevTimer.days,
          hours: prevTimer.hours,
          minutes: prevTimer.minutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleOnClick = () => {
    navigate(`/${id}`);
  };

  return (
    <div className="launchCart" onClick={handleOnClick}>
      <li>
        <img src={img} alt={name} className="launchCart__img" />
        <h3 className="launchCart__name">{name}</h3>
        {description ? (
          <h4 className="launchCart__descr">{description}</h4>
        ) : null}
        {timer.minutes ? (
          <div className="launchCart__time">
            Time To Launch: {timer.days} days, {timer.hours} hours,{" "}
            {timer.minutes} minutes, {timer.seconds} seconds
          </div>
        ) : null}
      </li>
    </div>
  );
};

export default LaunchCart;
