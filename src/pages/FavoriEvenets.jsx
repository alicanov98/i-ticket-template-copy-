
import warnig from "../assets/images/warning.svg";
import { Card } from "../components/Card";
import { useSelector } from "react-redux";

export const FavoriEvenets = () => {
  let favoriteList = useSelector((state) => state.cartData.favori);


  return (
    <>
      <section className="favoriEvents">
        <div className="container">
          <h2 className="title">Seçilmişlər</h2>
          {favoriteList.length === 0 ? (
            <div className="warnig">
              <img src={warnig} alt="warnig" />
              <h3>Sorğunuza uyğun tədbir tapılmadı.</h3>
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
