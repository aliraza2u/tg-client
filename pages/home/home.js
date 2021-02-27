import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div>
      <Navbar /><br/>
      <Sidebar/>
    </div>
  );
};

export default Home;
