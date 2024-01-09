"use client";

import { ReactNode } from "react";

import style from "./post.module.css";
import { useRouter } from "next/navigation";
type Props = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};
export default function PostArticle({ children, post }: Props) {
  const router = useRouter();
  const onClickMove = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <article onClickCapture={onClickMove} className={style.post}>
      {children}
    </article>
  );
}
