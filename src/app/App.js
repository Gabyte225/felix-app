import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserPage from "./pages/UserPage/UserPage";
import { Route, Routes } from "react-router-dom";
import SingleMovie from "./pages/SingleMovie/SingleMovie";

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/items" element={<UserPage />} />
        <Route
          path={`/items/d41315-Deadpool-453130`}
          element={<SingleMovie />}
        />
      </Routes>
    );
  }
}

export default App;
