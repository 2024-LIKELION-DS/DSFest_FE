import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Splash from "./pages/Splash";
import Main from "./pages/Main";
import Notice from "./pages/Notice";
import TimeTable from "./pages/TimeTable";
import Map from "./pages/Map";
import Review from "./pages/Review";
import Photo from "./pages/Photo";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/notice" element={<Notice />} />
        <Route exact path="/timetable" element={<TimeTable />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/review" element={<Review />} />
        <Route exact path="/photo" element={<Photo />} />

        {/* 어드민 페이지 */}
        <Route exact path="/pado/admin/post" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
