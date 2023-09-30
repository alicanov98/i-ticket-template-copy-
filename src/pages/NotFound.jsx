import { Link } from "react-router-dom";
import notPage from "../assets/images/notfound.svg";

//? I18next
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="notFound">
    <div className="container">
      <div className="row">
        <div className="notFoundError">
      <img src={notPage} alt="notFoundOf" />
       <span className="errorLable">40<span className="errorLableGray">4</span></span>
        </div>
      <h3 className="titleNotFound">{t("page_not_found")}</h3>
      <p>{t("we_are_sorry")}</p>
      <Link to="/" className="btnBackHomePage">{t("Home Page")}</Link>
      </div>
    </div>
    </div>
  );
};

export default NotFound;
