import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Feedbacks from "./components/Feedbacks5.js";
import IsiFeedbacks from "./components/IsiFeedbacks.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<><Navbar /><Feedbacks /></>} />
          <Route path="/isiFeedbacks" element={<><Navbar /><IsiFeedbacks /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
