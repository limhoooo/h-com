"use client";
import { TabContext } from "./TabProvider";
import style from "./tab.module.css";
import { useContext } from "react";

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);

  const onClickActive = (state: "rec" | "fol") => {
    setTab(state);
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}>홈</div>
      <div className={style.homeTab}>
        <div onClick={() => onClickActive("rec")}>
          추천
          <div className={style.tabIndicator} hidden={tab === "fol"}></div>
        </div>
        <div onClick={() => onClickActive("fol")}>
          팔로우 중
          <div className={style.tabIndicator} hidden={tab === "rec"}></div>
        </div>
      </div>
    </div>
  );
}
