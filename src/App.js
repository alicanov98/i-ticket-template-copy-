//? Router
import { Routes, Route } from "react-router-dom";

//? Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//? Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AllEvnets from "./pages/AllEvnets";
import CardDetails from "./pages/CardDetails";
import Basket from "./pages/Basket";
import FavoriEvents from "./pages/FavoriEvents";

//? Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-events" element={<AllEvnets />} />
        <Route path="/card-details/:id" element={<CardDetails />} />
        <Route path="/favorites" element={<FavoriEvents />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Provider>
  );
};

export default App;
