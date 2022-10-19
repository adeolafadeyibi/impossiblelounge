import { Box, Button, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "src/components/widgets/MainLayout";

const Success: NextPage = () => {
  return (
    <>
      <Head>
        <title>Impossible Lounge - Success</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
        className="flex flex-col flex-1 w-full items-center justify-center px-4 pb-6"
      >
        <Box className="w-full max-w-[992px] flex flex-col mb-[64px]">
          <Box className="flex flex-col md:flex-row items-center">
            <Box className="relative w-[200px] h-[200px] sm:w-[480px] sm:h-[480px]">
              <Image
                width="480px"
                height="480px"
                layout="fill"
                src="/static/ghost-success.png"
                alt="ghost"
              />
            </Box>
            <Box className="flex flex-col items-center md:items-start flex-1">
              <Typography
                variant="inherit"
                className="text-[32px] sm:text-[48px] text-secondary !mb-[60px] sm:!mb-[66px] endor"
              >
                Thank you
              </Typography>

              <Typography
                variant="inherit"
                className="text-[18px] leading-[27px] text-white !mb-[34px] text-center md:text-start"
              >
                Eventually, the layout of the essence immediately illustrates
                the utter importance of The Convention of Unique Software
              </Typography>
              <Typography
                variant="inherit"
                className="text-[18px] leading-[27px] text-white !mb-[34px] text-center md:text-start"
              >
                Follow us on Instagram{" "}
                <Typography
                  variant="inherit"
                  className="text-secondary"
                  component="span"
                >
                  @ImpossibleLounge
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Link passHref href="/">
          <Button
            LinkComponent="a"
            variant="text"
            className="rounded-lg !bg-[#2A2A2A] hover:!bg-[#222020] py-3 px-6"
          >
            <Typography variant="inherit" className="text-base text-white">
              Go Back to{" "}
              <span className="text-secondary">Impossible Lounge</span>
            </Typography>
          </Button>
        </Link>
      </Box>
    </>
  );
};

Success.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Success;
