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
import Photo from "./pages/Photo";
import Admin from "./pages/Admin";
import Modal from "./pages/Modal";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/notice/:id" element={<Notice />} /> 
        <Route exact path="/noticeList" element={<NoticeList />} />
        <Route exact path="/timetable" element={<TimeTable />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/review" element={<Review />} />
        <Route exact path="/photo" element={<Photo />} />
        <Route exact path="/Modal" element={<Modal />} />

        {/* 어드민 페이지 */}
        <Route exact path="/pado/admin/post" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
