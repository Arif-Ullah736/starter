import "./App.css";
import Cards from "./components/Cards";
import reviews from "./data.js";
function App() {
  return (
    <div className="App">
      <h1>Our Testimonials</h1>
      <div className="border-line"></div>

      <Cards reviews={reviews} />
    </div>
  );
}

export default App;
