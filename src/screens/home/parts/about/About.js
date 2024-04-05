import React from "react";
import "./About.css";
import Title from "../../../components/title/Title";
import { homeAbout } from "../../../../localData";

const About = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container">
          <div className="wrapper">
            <Title subTitle="What's Yurugura?" mainTitle="ゆるグラの特徴" />
            <div className="items">
              {homeAbout.map((val) => (
                <div className="item flexSB">
                  <div className="img">
                    <img src={val.cover} alt={val.title} />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
