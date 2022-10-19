import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import GradientButton from "../shared/GradientButton";

const TicketSection: FC = () => {
  return (
    <Box className="px-4 md:px-[50px] pt-[56px] md:pt-[88px] mb-[60px] md:mb-[88px] flex flex-col items-center">
      <Typography
        variant="inherit"
        className="text-[32px] sm:text-[40px] md:text-[48px] text-secondary !mb-[60px] md:!mb-[90px] endor"
      >
        Get Tickets
      </Typography>
      <Box className="flex flex-wrap items-center justify-center">
        {tickets.map((val) => (
          <Box key={val.id} className="w-full sm:w-auto mb-4 sm:mb-0 sm:p-3">
            <Box
              className={`w-full h-auto sm:w-[282px] sm:h-[468px] sm:bg-cover sm:bg-no-repeat p-4 sm:p-8 rounded-xl  ${
                val.id === 1
                  ? "bg-[#2A2A2A] sm:bg-standard-bg"
                  : val.id === 2
                  ? "bg-[#2A2A2A] sm:bg-premium-bg"
                  : val.id === 3
                  ? "bg-[#2A2A2A] sm:bg-vip-bg"
                  : "bg-[#2A2A2A] sm:bg-exclusive-bg"
              }`}
            >
              <Box className="flex flex-col items-center justify-center">
                <Box className="flex flex-1 w-full flex-row sm:flex-col items-center justify-between">
                  <Box className="flex flex-row sm:flex-col items-center">
                    <Box className="w-[48px] h-[48px] sm:w-[96px] sm:h-[96px] relative mr-6 sm:mr-0 sm:mb-8">
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
                      className="text-[18px] leading-[27px] sm:text-[21px] sm:leading-[31px] text-white font-medium !mb-[15px]"
                    >
                      {val.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="inherit"
                    className="text-[24px] left-[35px] sm:text-[32px] sm:leading-[48px] text-secondary font-semibold !mb-[19px]"
                  >
                    {`$${val.price}`}
                  </Typography>
                </Box>
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
