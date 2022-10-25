import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
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
      <Typography sx={{fontSize:"36px",color:"#fff", marginBottom:"20px"}}>
        Ladies In Free Until 11PM!
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
                <Link href={val.ticket_link} passHref>
                  <a target="_blank">
                    <GradientButton />
                  </a>
                </Link>
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
    ticket_link: "https://square.link/u/zVkmKMFv",
    title: "General Admission",
    price: 25,
    bids: [
      "Get into the Hottest Party",
      "Try the IMpossible Cocktail",
      "Party till 4am",
    ],
  },
  {
    id: 2,
    main_image: "/static/premium_img.png",
    ticket_link: "https://square.link/u/Jt35wzSf",
    title: "VIP for 4",
    price: 400,
    bids: ["Entry for 4", "VIP Table", "1 Premium Bottle"],
  },
  {
    id: 3,
    main_image: "/static/vip_img.png",
    title: "VIP Table RESV",
    ticket_link: "https://square.link/u/LSU53i8y",
    price: 125,
    bids: ["Entry for 1", "VIP Table", "1 Bottle Minimum"],
  },
  {
    id: 4,
    main_image: "/static/exclusive_img.png",
    ticket_link: "https://square.link/u/SmCzyMO0",
    title: "VIP Room",
    price: 1500,
    bids: ["Admission for 6", "4 Bottles", "Private Section in VIP Room"],
  },
];
