import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListUsers from "./features/users/ListUsers";
// import CreateUser from "./features/users/CreateUser";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListUsers />} />
        <Route path="/users" element={<ListUsers />} />
        {/* <Route path="/users/create" element={<CreateUser />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
