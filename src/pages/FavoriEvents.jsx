
import { useTranslation } from "react-i18next";
import warnig from "../assets/images/warning.svg";
import { Card } from "../components/Card";
import { useSelector } from "react-redux";

export const FavoriEvents = () => {
  let favoriteList = useSelector((state) => state.cartData.favori);
  const {t}=useTranslation()

  return (
    <>
      <section className="favoriEvents">
        <div className="container">
          <h2 className="title">{t("favorites")}</h2>
          {favoriteList.length === 0 ? (
            <div className="warnig">
              <img src={warnig} alt="warnig" />
              <h3>{t("No_events_found")}</h3>
            </div>
          ) : (
            <div className="cardBox">
              {favoriteList.map((item) => (
                  <Card key={item.id} data={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
