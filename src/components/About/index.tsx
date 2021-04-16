import React, { FC } from "react";
import Header from "../Header";
import Body from "../Body";
import photoURL from "../../assets/page-photos/about-photo.png";

const About: FC = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "100px 0",
        }}
      >
        <Body title="About us" photoURL={photoURL} />
      </div>
    </div>
  );
};

export default About;
