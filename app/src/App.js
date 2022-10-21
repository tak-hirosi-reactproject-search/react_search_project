import React, { Component } from "react";
import {BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Search from "./Search";
import UploadModal from "./UploadModal";

function App() {
  return (
    <BrowserRouter>
        <div>
          <Link to="/search">
            <Search />
          </Link>
          <Link to="/upload">
            <UploadModal />
          </Link>
        </div>
        <div>
          <Routes>
            <Route path="/search" exact={true} component={Search} />
            <Route path="/upload" exact={true} component={UploadModal} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;