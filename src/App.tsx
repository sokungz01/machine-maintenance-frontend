import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage } from "@/pages";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
