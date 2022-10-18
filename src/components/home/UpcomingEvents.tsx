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
    <Box className="px-[120px] mb-[96px] flex flex-col items-center">
      <Typography
        variant="inherit"
        className="text-[48px] text-secondary !mb-[90px] endor"
      >
        Upcoming Events
      </Typography>
      <Box className="flex flex-wrap items-center justify-center">
        {events.map((val, idx) => (
          <Box
            className={`w-[588px] p-6 rounded-xl bg-[#2a2a2a] ${
              idx !== 1 && "mr-6"
            } `}
            key={val.id}
          >
            <Box className="flex flex-col">
              <Box className="w-[540px] h-[452px] relative mb-4">
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
                className="text-[32px] leading-[48px] text-white font-medium !mb-[15px]"
              >
                {val.title}
              </Typography>
              <Box className="flex items-center justify-between mb-6">
                <Box className="flex items-center">
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
    main_image: "/static/event_img.png",
    title: "Halloween Party",
    time: "10:30 AM",
    location: "631 Hope Ct, Tallahassee, Florida, 83578",
    description:
      "It's a well-known fact that the assumption, that the potential role models is a base for developing aspects of the basics of planning",
  },
  {
    id: 2,
    main_image: "/static/event_img.png",
    title: "Impossible Girls",
    time: "10:30 AM",
    location: "631 Hope Ct, Tallahassee, Florida, 83578",
    description:
      "It's a well-known fact that the assumption, that the potential role models is a base for developing aspects of the basics of planning",
  },
];
