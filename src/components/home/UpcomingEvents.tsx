import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { FC, useState } from "react";
import { LocationPinIcon } from "src/icons/locationPin";
import { TimerIcon } from "src/icons/timer";
import GradientButton from "../shared/GradientButton";
import HalloWeenDialog from "./HalloweenDialog";

type ModalType = {
  open: boolean;
  type: "party" | "girls";
};

const UpcomingEvents: FC = () => {
  const [modal, setModal] = useState<ModalType>({
    open: false,
    type: "girls",
  });
  return (
    <Box className="px-4 md:px-[50px] mb-[60px] md:mb-[96px] flex flex-col items-center">
      <Typography
        variant="inherit"
        className="text-[48px] sm:text-[40px] md:text-[48px] text-secondary !mb-[60px] md:!mb-[90px] endor"
      >
        You are in for a treat
      </Typography>
      <Box className="flex flex-wrap items-center justify-center">
        {events.map((val) => (
          <Box key={val.id} className="p-3">
            <Box className="w-full md:w-[588px] p-4 md:p-6 rounded-xl bg-[#2a2a2a]">
              <Box className="flex flex-col">
                <Box className="w-full h-[350px] md:w-[540px] sm:h-[452px] relative mb-4">
                  <Image
                    width="540px"
                    height="452px"
                    layout="fill"
                    src={val.main_image}
                    alt={val.title}
                  />
                </Box>
                <Typography
                  variant="inherit"
                  className="text-[24px] leading-[35px] sm:text-[28px] sm:leading-[42px] md:text-[32px] md:leading-[48px] text-white font-medium !mb-[15px]"
                >
                  {val.title}
                </Typography>
                <Box className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
                  <Box className="flex items-center mb-4 md:mb-0">
                    <Box component="span" className="mr-4">
                      <TimerIcon />
                    </Box>
                    <Typography
                      variant="inherit"
                      className="text-[16px] leading-[25px] text-white"
                    >
                      {val.time}
                    </Typography>
                  </Box>
                  <Box className="flex items-center">
                    <Box component="span" className="mr-4">
                      <LocationPinIcon />
                    </Box>
                    <Typography
                      variant="inherit"
                      className="text-[16px] leading-[25px] text-white"
                    >
                      {val.location}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="inherit"
                  className="text-[16px] leading-[25px] text-grey_text !mb-6"
                >
                  {val.description}
                </Typography>
                <GradientButton
                  onClick={() => {
                    if (val.id === 1) {
                      setModal({
                        open: true,
                        type: "party",
                      });
                    } else {
                      setModal({
                        open: true,
                        type: "girls",
                      });
                    }
                  }}
                  title="Get Ticket Now"
                  size="large"
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <HalloWeenDialog
        variant={modal.type}
        open={modal.open}
        handleClose={() => {
          setModal({
            open: false,
            type: "girls",
          });
        }}
      />
    </Box>
  );
};

export default UpcomingEvents;

const events = [
  {
    id: 1,
    main_image: "/static/wgwhiteparty.png",
    title: "Sexy Scary Halloween Party",
    time: "10:00 PM",
    location: "3660 Ruffin Road, San Diego CA",
    description:
      "Come have an IMpossible experience!. 2 DJs spinning the best in R&B, Hiphop, Latin, Afrobeats & Reggaeton",
  },
  {
    id: 2,
    main_image: "/static/sydmimi.png",
    title: "The Return of Impossible Girls",
    time: "They party all night",
    location: "See you at the Party",
    description:
      "An IMpossible Girl is the life of the party!. It gets wild! You just have to experience it yourself!",
  },
];
