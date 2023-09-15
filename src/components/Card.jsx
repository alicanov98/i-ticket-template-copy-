//? Router
import { Link } from "react-router-dom";

//? i18n 
import { useTranslation } from "react-i18next";

export const Card = ({ data }) => {
 const {t}=useTranslation()
  return (
    <Link to={`/card-details/${data.id}`} className="card">
    <div className="cardImg">
      <div className="image">
        <img
          src={`http://localhost:7000/${data?.cardImg}`}
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
