import { useEffect, useState } from "react";

//? Axios
import axios from "axios";

//? Router
import { useNavigate } from "react-router-dom";

//? Component
import { EventsFilter } from "../components/EventsFilter";
import { Card } from "../components/Card";
import Loading from "../components/Loading";

const AllEvnets = () => {
  //? Router
  const navigate = useNavigate();

  //? Local states
  const [eventCards, setEventCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [originalEventCards, setOriginalEventCards] = useState([]);

  //? Get data from api
  useEffect(() => {
    setLoading(true);
    const getSlide = async () => {
      await axios
        .get(process.env.REACT_APP_ALL_EVENTS)
        .then((res) => {
          const eventData = res.data;
          setEventCards(eventData);
          setOriginalEventCards(eventData);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          navigate("/error");
        });
    };
    setTimeout(() => {
      getSlide();
    }, 3000);
  }, [navigate]);

  //? Location Filter
  const handleFilter = (selectedValue) => {
    const filteredCards = originalEventCards.filter(
      (item) => item.eventLocation === selectedValue
    );
    setEventCards(filteredCards);
  };

  //? Price Filter
  const handleFilterPrice = (num) => {
    const filteredPrice = originalEventCards.filter(
      (item) => item.minimumPrice === num.toString()
    );
    setEventCards(filteredPrice);
  };

  return (
    <div className="container">
      <EventsFilter
        onSelectFilter={(selectedValue) => handleFilter(selectedValue)}
        selectedPrice={(item) => handleFilterPrice(item)}
      />
      {loading && <Loading />}
      <div className="cardBox">
        {eventCards.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default AllEvnets;
