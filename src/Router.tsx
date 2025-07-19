import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "./Pages/Home";
import { BillPage } from "./Pages/Bills";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bills" element={<BillPage />} />

        {/* Error Handling */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
