import React from "react";
import Layout from "../admin/layout/Layout";
import "../assets/boxicons-2.0.7/css/boxicons.min.css";
import "../assets/css/grid.css";
import "../assets/css/index.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const AdminLayOut = () => {
  return (
    <div>
      <Layout></Layout>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AdminLayOut;
