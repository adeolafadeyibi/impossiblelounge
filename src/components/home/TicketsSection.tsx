import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import GradientButton from "../shared/GradientButton";

const TicketSection: FC = () => {
  return (
    <Box className="px-[120px] pt-[88px] mb-[88px] flex flex-col items-center">
      <Typography
        variant="inherit"
        className="text-[48px] text-secondary !mb-[90px] endor"
      >
        Get Tickets
      </Typography>
      <Box className="flex flex-wrap items-center justify-center">
        {tickets.map((val, idx) => (
          <Box
            className={`w-[282px] h-[468px] bg-cover bg-no-repeat p-8 rounded-xl ${
              idx !== 3 && "mr-6"
            } ${
              val.id === 1
                ? "bg-standard-bg"
                : val.id === 2
                ? "bg-premium-bg"
                : val.id === 3
                ? "bg-vip-bg"
                : "bg-exclusive-bg"
            }`}
            key={val.id}
          >
            <Box className="flex flex-col items-center justify-center">
              <Box className="w-[96px] h-[96px] relative mb-8">
                <Image
                  width="96px"
                  height="96px"
                  layout="fill"
                  src={val.main_image}
                  alt={val.title}
                />
              </Box>
              <Typography
                variant="inherit"
                className="text-[21px] leading-[31px] text-white font-medium !mb-[15px]"
              >
                {val.title}
              </Typography>
              <Typography
                variant="inherit"
                className="text-[32px] leading-[48px] text-secondary font-semibold !mb-[19px]"
              >
                {`$${val.price}`}
              </Typography>
              <Box className="mb-[6px]">
                {val.bids.map((bid, idx) => (
                  <Typography
                    key={bid + idx}
                    variant="inherit"
                    className="text-[16px] leading-[25px] text-grey_text !mb-[13px]"
                  >
                    {bid}
                  </Typography>
                ))}
              </Box>
              <GradientButton />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TicketSection;

const tickets = [
  {
    id: 1,
    main_image: "/static/standard_img.png",
    title: "Standard",
    price: 250,
    bids: ["Bing Adds", "Bing Adds", "Bing Adds"],
  },
  {
    id: 2,
    main_image: "/static/premium_img.png",
    title: "Premium",
    price: 350,
    bids: ["Bing Adds", "Bing Adds", "Bing Adds"],
  },
  {
    id: 3,
    main_image: "/static/vip_img.png",
    title: "VIP",
    price: 500,
    bids: ["Bing Adds", "Bing Adds", "Bing Adds"],
  },
  {
    id: 4,
    main_image: "/static/exclusive_img.png",
    title: "Exclusive",
    price: 750,
    bids: ["Bing Adds", "Bing Adds", "Bing Adds"],
  },
];
