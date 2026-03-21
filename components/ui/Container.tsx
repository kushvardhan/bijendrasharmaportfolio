import * as React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  const cn = ["mx-auto w-full max-w-7xl", className].filter(Boolean).join(" ");
  return <div className={cn}>{children}</div>;
}
