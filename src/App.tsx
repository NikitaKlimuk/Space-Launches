import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Navbar from "./components/navbar";
import "./styles/App.scss";

function App() {
  return (
    <section className="App">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/:id" element={<DetailsPage />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </section>
  );
}

export default App;
