import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getLocal } from "@/utils/local"; // 获取 token 的函数

const ProtectedRoute = () => {
  const token = getLocal(); // 从本地存储中获取 token

  if (!token) {
    // 如果没有 token，重定向到登录页面
    return <Navigate to="/" replace />;
  }

  // 如果有 token，渲染子路由（使用 `Outlet` 来渲染嵌套路由）
  return <Outlet />;
};

export default ProtectedRoute;
