import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

const Home = lazy(() => import("./pages/home"));
const Events = lazy(() => import("./pages/events"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Events />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
