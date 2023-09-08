import React from 'react'
import warnig from "../assets/images/warning.svg"
export const FavoriEvenets = () => {
  return (
    <>
    <section className='favoriEvents'>
      <div className="container">
    <h2 className="title">
    Seçilmişlər
    </h2>
    <div className="warnig">
      <img src={warnig} alt="warnig" />
      <h3>Sorğunuza uyğun tədbir tapılmadı.</h3>
    </div>
      </div>
    </section>
    </>
  )
}
