import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Splash from "./pages/Splash";
import Main from "./pages/Main";
import Notice from "./pages/Notice";
import NoticeList from "./pages/NoticeList";
import TimeTable from "./pages/TimeTable";
import Map from "./pages/Map";
import Review from "./pages/Review";
import DSEvent from "./pages/DSEvent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/notice" element={<Notice />} /> 
        <Route exact path="/noticeList" element={<NoticeList />} />
        <Route exact path="/timetable" element={<TimeTable />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/review" element={<Review />} />
        <Route exact path="/event" element={<DSEvent />} />
      </Routes>
    </div>
  );
}

export default App;
