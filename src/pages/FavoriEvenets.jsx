import React from 'react'
import warnig from "../assets/images/warning.svg"
import { Card } from '../components/Card';
import { useSelector } from 'react-redux';



export const FavoriEvenets = () => {

  
 
  
  const favoriCartlar = useSelector(state => state.cartData.favori);

  return (
    <>
      <section className="favoriEvents">
        <div className="container">
          <h2 className="title">Seçilmişlər</h2>
          {favoriCartlar.length === 0 ? (
            <div className="warnig">
              <img src={warnig} alt="warnig" />
              <h3>Sorğunuza uyğun tədbir tapılmadı.</h3>
            </div>
          ) : (
            <div className="cardBox">
              {favoriCartlar.map(item => (
                <Card key={item.id} data={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
  
}
