import { useEffect } from "react";

//? Translation
import { useTranslation } from "react-i18next";

//? Icon
import warnig from "../assets/images/warning.svg";

//? Component
import { Card } from "../components/Card";

//? Redux
import { useSelector } from "react-redux";


const FavoriEvents = () => {
  //? Redux
  let favoriteList = useSelector((state) => state.cartData.favori);

  //? Translation
  const { t } = useTranslation();

  //? Scroll page to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

export default FavoriEvents;
