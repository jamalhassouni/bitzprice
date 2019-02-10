import React from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Prices from "../components/Prices";

const Home = props => (
  <div>
    <Layout title="Home">
      <div className="hero">
        <h1 className="title">Welcome to Bitzprice!</h1>
        <p className="description">Check current Bitcoin rates</p>
        <Prices bpi={props.bpi} />
      </div>
    </Layout>
  </div>
);

Home.getInitialProps = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();
  return {
    bpi: data.bpi
  };
};

export default Home;
