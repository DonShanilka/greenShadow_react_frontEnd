import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/Store";

// Import Pages
import Dashboard from "./pages/DashboardPage";
import Crop from "./pages/CropsPage";
import Field from "./pages/FieldPage";
import Equipment from "./pages/EquipmentPage";
import Vehicle from "./pages/VehicalPage";
import Staff from "./pages/StaffPage";
import CreateLog from "./pages/CreateLogPage";
import AddLog from "./pages/AddLogPage";

// Import Layout
import RootLayout from "./components/RootLayout";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="crop" element={<Crop />} />
            <Route path="field" element={<Field />} />
            <Route path="equipment" element={<Equipment />} />
            <Route path="vehicle" element={<Vehicle />} />
            <Route path="staff" element={<Staff />} />
            <Route path="create-log" element={<CreateLog />} />
            <Route path="add-log" element={<AddLog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
