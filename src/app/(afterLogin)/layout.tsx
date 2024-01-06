import React from "react";

export default function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      에프터로그인레이아웃 여기서 로그인 권한처리
      {children}
    </div>
  );
}
