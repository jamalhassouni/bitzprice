import React from "react";
import Layout from "../components/Layout";

const Home = () => (
  <div>
    <Layout title="Home">
      <div className="hero">
        <h1 className="title">Welcome to Bitzprice!</h1>
        <p className="description">Application to view Bitcoin prices</p>
      </div>
    </Layout>

    <style jsx>{``}</style>
  </div>
);

export default Home;
