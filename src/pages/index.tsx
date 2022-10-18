import { Box } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "src/components/home/HeroSection";
import QueryForm from "src/components/home/QueryForm";
import TicketSection from "src/components/home/TicketsSection";
import UpcomingEvents from "src/components/home/UpcomingEvents";
import { MainLayout } from "src/components/widgets/MainLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Impossible Lounge - Home</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <HeroSection />
        <TicketSection />
        <UpcomingEvents />
        <QueryForm />
      </Box>
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
