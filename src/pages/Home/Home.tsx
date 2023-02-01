import "./HomeElement.ts";

import { Blog, Possibility, WhatGPT3 } from "../../containers";
import { Brand, CTA } from "../../components";
import { Footer, Header, Navbar } from "../../layouts";

import { Features } from "../../features";
import { NavHeader } from "./HomeElement";

export const Home = () => {
  return (
    <div>
      <NavHeader>
        <Navbar />
        <Header />
      </NavHeader>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};
