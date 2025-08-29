import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendorsList from "./pages/VendorsList";
import VendorForm from "./pages/VendorForm";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendorsList />} />
        <Route path="/add" element={<VendorForm />} />
        <Route path="/edit/:id" element={<VendorForm />} />
      </Routes>
    </BrowserRouter>
  );
}
