import { FC, ReactNode } from "react";
import { styled } from "@mui/material/styles";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayoutRoot = styled("div")(({ theme }) => ({
  background: "#151515",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
}));

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <MainLayoutRoot className="relative">{children}</MainLayoutRoot>;
};
