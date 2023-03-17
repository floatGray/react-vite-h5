import React from "react";
import Header from "@/components/Header";

import s from "./style.module.less";

const About = () => {
  return (
    <>
      <Header title="关于我们" />
      <div className={s.about}>
        <h2>项目简介</h2>
        <article>一个简易记账本</article>
      </div>
    </>
  );
};

export default About;
