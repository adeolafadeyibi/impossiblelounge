import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

interface PropTypes extends ButtonProps {
  title?: string;
}

const GradientButton: FC<PropTypes> = ({
  title = "Get Ticket",
  size = "small",
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="contained"
      color="primary"
      className={`${
        size === "small" ? "w-[128px]" : "w-[152px]"
      } h-[48px] text-[16px] leading-[25px] text-black font-medium poppins bg-gradient-to-b from-[#FFECB3] to-[#FFAE21]`}
    >
      {title}
    </Button>
  );
};

export default GradientButton;
