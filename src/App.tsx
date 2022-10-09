import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import Main from "./pages/usersManagement";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>KUY fias</title>
      </Helmet>
      <div style={{ backgroundColor: "lightblue" }}>fias kuy dracarys</div>
      <BrowserRouter>
        <Routes>
          <Route path="/Test" element={<Test />} />
          <Route path="/Darcarys" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
