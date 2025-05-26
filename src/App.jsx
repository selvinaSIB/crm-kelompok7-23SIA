import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import MainLayout from "./components/MainLayout";
// import SalesManagement from "./pages/SalesManagement";
// import CustomerManagement from "./pages/CustomerManagement";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="penjualan" element={<SalesManagement />} />
        <Route path="pelanggan" element={<CustomerManagement />} /> */}
      </Route>
    </Routes>
  );
}

export default App
