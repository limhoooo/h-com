import React from "react";
import style from "./home.module.css";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import Post from "../_component/Post";
import PostForm from "./_component/PostForm";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

async function getPostRecommend() {
  const res = await fetch("http://localhost:9090/api/postRecommends", {
    next: {
      tags: ["posts", "recommends"],
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "recomends"],
    queryFn: getPostRecommend,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
