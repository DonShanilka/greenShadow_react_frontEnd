import React from 'react';
import { BrowserRouter as Router, Routes, Route,RouterProvider, createBrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/DashboardPage';
import Crop from './pages/CropsPage';
import Field from './pages/FieldPage';
import Equipment from './pages/EquipmentPage';
import Vehicle from './pages/VehicalPage';
import Staff from './pages/StaffPage';
import CreateLog from './pages/CreateLogPage';
import AddLog from './pages/AddLogPage';
import {Store} from './store/Store'

const App = () => {

  const routs = createBrowserRouter([
    {
      path:'',
      children: [
        {path:"", element: <Dashboard />} ,
        {path:"/crop" ,element:<Crop />} ,
        {path:"/field" ,element:<Field />} ,
        {path:"/equipment", element:<Equipment />} ,
        {path:"/vehicle", element:<Vehicle />},
        {path:"/staff" ,element:<Staff />} ,
        {path:"/create-log", element:<CreateLog />} ,
        {path:"/add-log", element:<AddLog />}
      ]
    }
  ]);

  return (
    // <Router>
    //   <div className="flex">
    //     {/* Sidebar */}
    //     <Sidebar />

    //     {/* Main Content */}
    //     <div className="flex-1 p-6">
    //       <Routes>
    //         <Route path="/" element={<Dashboard />} />
    //         <Route path="/dashboard" element={<Dashboard />} />
    //         <Route path="/crop" element={<Crop />} />
    //         <Route path="/field" element={<Field />} />
    //         <Route path="/equipment" element={<Equipment />} />
    //         <Route path="/vehicle" element={<Vehicle />} />
    //         <Route path="/staff" element={<Staff />} />
    //         <Route path="/create-log" element={<CreateLog />} />
    //         <Route path="/add-log" element={<AddLog />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
    <Provider store={Store}>
      <RouterProvider />
    </Provider>
  );
};

export default App;
