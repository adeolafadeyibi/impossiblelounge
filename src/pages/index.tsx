import { Box, Typography, Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { MainLayout } from "src/components/widgets/MainLayout";
import PartyDialog from "src/components/widgets/PartyDialog";
import SuccessDialog from "src/components/widgets/SuccessDialog";

const ImpossibleParty: NextPage = () => {
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
        <title>impossible-party</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h1" color="white" className="impact">
            IMPOSSIBLE LOUNGE
          </Typography>
          <Typography variant="h5" color="white" className="impact">
            SAN DIEGO, CA
          </Typography>
          <Typography variant="subtitle1" color="white" className="impact">
            FOLLOW US ON IG @IMPOSSIBLELOUNGE
          </Typography>
          
            <Button variant="contained"
              href="https://www.eventbrite.com/e/super-sexy-halloween-party-tickets-441441883557" 
            >
              GIVE ME MY HALLOWEEN TICKETS!
            </Button>
        </Box>
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

ImpossibleParty.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ImpossibleParty;
