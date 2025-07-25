
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MRM from "./Pages/MRM";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/MRM" element={<MRM />} />
        {/* <Route path="/about" element={<About />} />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/sign-up"
          element={<SignUp />}
        /> */}
      </Routes>
    </Router>
  );
}

export default App;