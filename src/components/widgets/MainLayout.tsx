import type { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  background:
    "url(https://sorrypapi.com/wp-content/uploads/2022/06/fallback-img.jpg) 50% 50%",
  backgroundSize: "cover",
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
}));

const MainVideo = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
}));

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <MainLayoutRoot>
      <MainVideo>
        <iframe
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
          title="Sorry Papi! All Girl Reggaeton Party!"
          width="100vw"
          height="100vh"
          src="https://www.youtube.com/embed/436_UXKIYPQ?playlist=436_UXKIYPQ&loop=1&mute=1&autoplay=1&showinfo=0&enablejsapi=1&controls=0&rel=0"
          style={{ height: "100vh", width: "100vw" }}
          data-gtm-yt-inspected-4="true"
        />
      </MainVideo>
      {children}
    </MainLayoutRoot>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
