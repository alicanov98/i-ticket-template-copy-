//? Router
import { Link } from "react-router-dom";

//? Translation
import { useTranslation } from "react-i18next";

export const Card = ({ data }) => {
  //? Translation
  const { t } = useTranslation();

  return (
    <Link to={`/card-details/${data.id}`} className="card">
      <div className="cardImg">
        <div className="image">
          <img
            src={`${process.env.PUBLIC_URL}/${data?.cardImg}`}
            alt={data.eventTitle}
          />
          <span className="btn">
            <span className="price">{data.minimumPrice} ₼</span>-{t("from")}
          </span>
        </div>
        <div className="eventInfo">
          <div className="eventName">{data.eventTitle}</div>
          <div className="info">
            <p className="eventDate">{data.eventDates}</p>
            <span className="separator">•</span>
            <p className="venueName">{data.eventLocation}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
