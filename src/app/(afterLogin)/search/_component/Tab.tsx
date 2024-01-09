"use client";

import style from "../search.module.css";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
export default function Tab() {
  const [current, setCurrent] = useState("hot");
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickTab = (tab: string) => {
    setCurrent(tab);
    if (tab === "hot") {
      router.replace(`/search?q=${searchParams.get("q")}`);
    } else if (tab === "new") {
      router.replace(`/search?${searchParams.toString()}&f=live`);
    }
  };
  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={() => onClickTab("hot")}>
          인기
          <div className={style.tabIndicator} hidden={current === "new"}></div>
        </div>
        <div onClick={() => onClickTab("new")}>
          최신
          <div className={style.tabIndicator} hidden={current === "hot"}></div>
        </div>
      </div>
    </div>
  );
}
