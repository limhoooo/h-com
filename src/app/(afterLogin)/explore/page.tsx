import React from "react";
import SearchForm from "../_component/SearchForm";
import style from "./explore.module.css";
import Trend from "../_component/Trend";
export default function page() {
  return (
    <main className={style.main}>
      <div className={style.formZone}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <h3>나를 위한 트랜드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </main>
  );
}
