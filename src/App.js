import "./app.scss";

import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";
import { ErrorPage } from "./pages/ErrorPage";
import { WindowInfo } from "./pages/WindowInfo";

function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/info/:id" element={<WindowInfo />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
