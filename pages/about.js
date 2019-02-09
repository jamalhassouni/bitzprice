import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const About = () => (
  <div>
    <Layout title="About">
      <div className="hero">
        <h1 className="title">Welcome to About page!</h1>
        <p className="description">
          <Link href="/">
            <a>go to home</a>
          </Link>
        </p>
      </div>
    </Layout>
  </div>
);

export default About;
