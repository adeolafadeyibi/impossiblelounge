import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface TimeLeftType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeftType => {
  let year = new Date().getFullYear();
  let difference = +new Date(`${year}-10-29T22:00:00`) - +new Date();

  let timeLeft = {} as TimeLeftType;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const HeroSection: FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeftType>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Box className="bg-hero-section bg-center w-full lg:h-[900px] bg-no-repeat bg-cover px-4 md:px-[50px] pt-[96px] md:pt-[173px] pb-[20px] md:pb-[116px] flex flex-col items-center">
      <Box className="mb-[48px] flex flex-col items-center">
        <Typography
          variant="inherit"
          className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white !mb-[40px] md:!mb-[46px] merienda text-center"
        >
          Impossible Lounge
        </Typography>
        <Typography
          variant="inherit"
          className="text-[24px] sm:text-[40px] md:text-[64px] text-secondary !mb-[69px] endor text-center"
        >
          Super sexy Halloween party
        </Typography>

        <Typography
          variant="inherit"
          className="text-base sm:text-xl md:text-2xl leading-[25px] sm:leading-[30px] md:leading-[35px]  text-grey_text !mb-0 text-center"
        >
         The Ultimate Halloween Party in San Diego
        </Typography>
      </Box>
      <Box className="max-w-[1032px] mx-auto flex flex-wrap items-center justify-center">
        <Box className="w-[182px] h-[212px] md:w-[240px] md:h-[280px] flex flex-col items-center justify-center pt-10 mr-6 relative">
          <Typography
            variant="inherit"
            className="text-[64px]  leading-[72px] md:text-[96px] md:leading-[104px] endor text-primary !mb-3 z-10"
          >
            {timeLeft?.days}
          </Typography>
          <Typography
            variant="inherit"
            className="text-base md:text-[24px] leading-[36px] text-primary !mb-3 font-bold z-10"
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
        <Box className="w-[182px] h-[212px] md:w-[240px] md:h-[280px] flex flex-col items-center justify-center pt-10 mr-6 relative">
          <Typography
            variant="inherit"
            className="text-[64px]  leading-[72px] md:text-[96px] md:leading-[104px] endor text-primary !mb-3 z-10"
          >
            {timeLeft?.hours}
          </Typography>
          <Typography
            variant="inherit"
            className="text-base md:text-[24px] leading-[36px] text-primary !mb-3 font-bold z-10"
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
        <Box className="w-[182px] h-[212px] md:w-[240px] md:h-[280px] flex flex-col items-center justify-center pt-10 mr-6 relative">
          <Typography
            variant="inherit"
            className="text-[64px]  leading-[72px] md:text-[96px] md:leading-[104px] endor text-primary !mb-3 z-10"
          >
            {timeLeft.minutes}
          </Typography>
          <Typography
            variant="inherit"
            className="text-base md:text-[24px] leading-[36px] text-primary !mb-3 font-bold z-10"
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
        <Box className="w-[182px] h-[212px] md:w-[240px] md:h-[280px] flex flex-col items-center justify-center pt-10 relative">
          <Typography
            variant="inherit"
            className="text-[64px]  leading-[72px] md:text-[96px] md:leading-[104px] endor text-primary !mb-3 z-10"
          >
            {timeLeft?.seconds}
          </Typography>
          <Typography
            variant="inherit"
            className="text-base md:text-[24px] leading-[36px] text-primary !mb-3 font-bold z-10"
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
