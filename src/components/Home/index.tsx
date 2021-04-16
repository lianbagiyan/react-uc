import React, { FC } from "react";
import Header from "../Header/index";
import Body from "../Body/index";
import photoURL from "../../assets/page-photos/home-photo.png";

const Home: FC = () => (
  <div>
    <Header />
    <div
      style={{ display: "flex", justifyContent: "center", padding: "100px 0" }}
    >
      <Body title="ZARA Shop" photoURL={photoURL} />
    </div>
  </div>
);

export default Home;
