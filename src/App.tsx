import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Layout from "@/pages/Layout";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 公共路由：登录页面不需要拦截 */}
        <Route path="/" element={<Login />} />

        {/* 受保护的路由组 */}
        <Route element={<ProtectedRoute />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Layout" element={<Layout />} />
        </Route>
      </Routes>
    </Router>
  );
}
