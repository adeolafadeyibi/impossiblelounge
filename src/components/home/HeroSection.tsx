import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <Box className="bg-hero-section bg-center w-full lg:h-[900px] bg-no-repeat bg-cover px-[120px] pt-[173px] pb-[116px] flex flex-col items-center">
      <Box className="mb-[48px] flex flex-col items-center">
        <Typography
          variant="inherit"
          className="text-[32px] font-bold text-white !mb-[46px] merienda"
        >
          Impossible Lounge
        </Typography>
        <Typography
          variant="inherit"
          className="text-[64px] text-secondary !mb-[69px] endor"
        >
          Super sexy Halloween party
        </Typography>

        <Typography
          variant="inherit"
          className="text-2xl leading-[35px]  text-grey_text !mb-0 text-center"
        >
          Conversely, a description of the the profit <br /> becomes even more
          complex when compared
        </Typography>
      </Box>
      <Box className="max-w-[1032px] mx-auto flex items-center justify-center">
        <Box className="w-[240px] h-[280px] flex flex-col items-center justify-center pt-10 mr-6 relative">
          <Typography
            variant="inherit"
            className="text-[96px] leading-[104px] endor text-primary !mb-3 z-10"
          >
            8
          </Typography>
          <Typography
            variant="inherit"
            className="text-[24px] leading-[36px] text-primary !mb-3 font-bold z-10"
          >
            Days
          </Typography>
          <Image
            width="240px"
            height="280px"
            layout="fill"
            src="/static/hero-pumpkin.png"
            alt="hero"
          />
        </Box>
        <Box className="w-[240px] h-[280px] flex flex-col items-center justify-center pt-10 mr-6 relative">
          <Typography
            variant="inherit"
            className="text-[96px] leading-[104px] endor text-primary !mb-3 z-10"
          >
            7
          </Typography>
          <Typography
            variant="inherit"
            className="text-[24px] leading-[36px] text-primary !mb-3 font-bold z-10"
          >
            Hours
          </Typography>
          <Image
            width="240px"
            height="280px"
            layout="fill"
            src="/static/hero-pumpkin.png"
            alt="hero"
          />
        </Box>
        <Box className="w-[240px] h-[280px] flex flex-col items-center justify-center pt-10 mr-6 relative">
          <Typography
            variant="inherit"
            className="text-[96px] leading-[104px] endor text-primary !mb-3 z-10"
          >
            49
          </Typography>
          <Typography
            variant="inherit"
            className="text-[24px] leading-[36px] text-primary !mb-3 font-bold z-10"
          >
            Minutes
          </Typography>
          <Image
            width="240px"
            height="280px"
            layout="fill"
            src="/static/hero-pumpkin.png"
            alt="hero"
          />
        </Box>
        <Box className="w-[240px] h-[280px] flex flex-col items-center justify-center pt-10 relative">
          <Typography
            variant="inherit"
            className="text-[96px] leading-[104px] endor text-primary !mb-3 z-10"
          >
            32
          </Typography>
          <Typography
            variant="inherit"
            className="text-[24px] leading-[36px] text-primary !mb-3 font-bold z-10"
          >
            Seconds
          </Typography>
          <Image
            width="240px"
            height="280px"
            layout="fill"
            src="/static/hero-pumpkin.png"
            alt="hero"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
