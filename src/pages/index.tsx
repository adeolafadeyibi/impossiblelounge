import { Box } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import HeroSection from "src/components/home/HeroSection";
import QueryForm from "src/components/home/QueryForm";
import TicketSection from "src/components/home/TicketsSection";
import UpcomingEvents from "src/components/home/UpcomingEvents";
import { MainLayout } from "src/components/widgets/MainLayout";
import PartyDialog from "src/components/widgets/PartyDialog";
import SuccessDialog from "src/components/widgets/SuccessDialog";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => setOpen(true), 2 * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
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
        <PartyDialog
          open={open}
          handleClose={() => setOpen(false)}
          openSuccess={() => setOpenSuccess(true)}
        />
        <SuccessDialog
          open={openSuccess}
          handleClose={() => setOpenSuccess(false)}
        />
      </Box>
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
