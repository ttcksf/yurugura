import React from "react";
import Title from "../../../components/title/Title";
import "./MainVisual.css";

const MainVisual = () => {
  return (
    <>
      <section className="mainVisual">
        <div className="container">
          <div className="wrapper">
            <Title
              subTitle="ようこそ ゆるグラへ！"
              mainTitle="「楽しい！」を分かち合う
              プログラミングコミュニティ"
            />
            <p>
              プログラミングをゆるく学び、「おもしろ」を分かち合うオンラインの集いです。
            </p>
            <div className="button">
              <button className="btn">
                さあ、始めましょう！
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                活動内容を見る
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin1"></div>
    </>
  );
};

export default MainVisual;
