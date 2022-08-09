import { Box, Typography } from "@mui/material";
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
