import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { X } from "src/icons/x";
import GradientButton from "../shared/GradientButton";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    position: "relative",
  },
}));

interface DialogProps {
  open: boolean;
  handleClose: () => void;
  variant: "party" | "girls";
}

const HalloWeenDialog: FC<DialogProps> = ({
  open,
  handleClose,
  variant = "girls",
}) => {
  return (
    <BootstrapDialog
      maxWidth="md"
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <Box className="w-[calc(100% - 100px)] max-w-[412px] md:w-[720px] md:max-w-none h-auto  rounded-3xl shadow-dialog bg-white flex flex-col">
        <Box className="w-[720px] h-[240px] relative bg-modal-bg bg-cover bg-no-repeat bg-center flex items-center justify-center">
          <Typography
            variant="inherit"
            className="text-[32px] text-secondary endor"
          >
            {variant === "girls" ? "Impossible Girls" : "Halloween Party"}
          </Typography>
          <Box
            component="button"
            onClick={handleClose}
            className="absolute top-[24px] right-[24px] w-8 h-8 bg-secondary rounded-lg flex items-center justify-center"
          >
            <X />
          </Box>
        </Box>
        <Box className="w-full bg-[#242424] pt-8 pb-1 px-6">
          {tickets.map((val) => (
            <Box
              key={val.id}
              className="w-full flex items-center justify-between bg-[#151515] p-6 mb-6 rounded-xl"
            >
              <Box className="flex flex-col flex-1">
                <Typography
                  variant="inherit"
                  className="text-[18px] leading-[27px] text-white font-medium !mb-[6px]"
                >
                  {val.title}
                </Typography>
                <Typography
                  variant="inherit"
                  className="text-[14px] leading-[21px] text-grey_text !mb-0"
                >
                  {val.description}
                </Typography>
              </Box>
              <Box className="flex items-center">
                <Typography
                  variant="inherit"
                  className="text-[24px] leading-[35px] text-secondary font-semibold !mb-0 !mr-12"
                >
                  {val.price}
                </Typography>
                <GradientButton title="Get Ticket" />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </BootstrapDialog>
  );
};

export default HalloWeenDialog;

const tickets = [
  {
    id: 1,
    title: "Standard",
    description: "The Exchange of Precise Application",
    price: "$250",
  },
  {
    id: 2,
    title: "Premium",
    description: "The Exchange of Precise Application",
    price: "$350",
  },
  {
    id: 3,
    title: "VIP",
    description: "The Exchange of Precise Application",
    price: "$500",
  },
  {
    id: 4,
    title: "Exclusive",
    description: "The Exchange of Precise Application",
    price: "$750",
  },
];
