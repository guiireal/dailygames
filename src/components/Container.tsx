import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <div className="max-w-screen-xl mx-auto px-3">{children}</div>;
}
