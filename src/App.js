import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import ProductsList from "./component/ProductsList";
import { Routes, Route } from "react-router-dom";
import About from "./component/About";
import ProductDetails from "./component/ProductDetails";
function App() {
  return (
    <div className="App">
      <div class='container'>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Slider />
            <ProductsList />
          </>}
          />
          <Route path="about" element={<><About /></>} />
          <Route path="product/:productId" element={<><ProductDetails /></>} />

        </Routes>

      </div>
    </div>
  );
}

export default App;
