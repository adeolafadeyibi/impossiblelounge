import type { FC } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { Toaster } from "react-hot-toast";
import nProgress from "nprogress";
import type { EmotionCache } from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { createTheme } from "../theme";
import "../styles/global.css";
import "../i18n";
import {
  SettingsConsumer,
  SettingsProvider,
} from "src/contexts/settings-context";
import { createEmotionCache } from "src/utils/create-emotion-cache";
import { CacheProvider } from "@emotion/react";

type EnhancedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const clientSideEmotionCache = createEmotionCache();

const App: FC<EnhancedAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Impossible Party</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SettingsProvider>
          <SettingsConsumer>
            {({ settings }) => (
              <ThemeProvider
                theme={createTheme({
                  direction: settings.direction,
                  responsiveFontSizes: settings.responsiveFontSizes,
                  mode: settings.theme,
                })}
              >
                <CssBaseline />
                <Toaster position="top-center" />

                {getLayout(<Component {...pageProps} />)}
              </ThemeProvider>
            )}
          </SettingsConsumer>
        </SettingsProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;
