import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListUsers from "./features/users/ListUsers";
import UserForm from "./features/users/UserForm";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListUsers />} />
        <Route path="/users" element={<ListUsers />} />
        <Route path="/users/create" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
