import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { X } from "src/icons/x";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    position: "relative",
  },
  "& .MuiPaper-root": {
    overflowX: "visible !important",
    overflowY: "visible !important",
  },
}));

const CloseBtn = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
  backgroundColor: "#fff",
  top: "-15px",
  right: "-15px",
  boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  zIndex: 10000000000,
  cursor: "pointer",
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "200px",
  height: "200px",
}));

interface DialogProps {
  open: boolean;
  handleClose: () => void;
}

const SuccessDialog: FC<DialogProps> = ({ open, handleClose }) => {
  return (
    <BootstrapDialog
      maxWidth="md"
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <CloseBtn onClick={handleClose}>
        <X fontSize="small" color="action" />
      </CloseBtn>
      <Box
        sx={{
          backgroundColor: "#fff",
          width: { md: "400px", xs: "auto" },
          position: "relative",
          px: "20px",
          py: "20px",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: "20px",
          }}
        >
          <StyledImage src="static/drink.jpeg" alt="drink" />
        </Box>
        <Typography
          variant="h5"
          color="#1f2022"
          sx={{ textAlign: "center", mb: "25px" }}
        >
          <Typography
            component="span"
            variant="h5"
            color="cyan"
            sx={{ mr: "6px" }}
          >
            Congrats!
          </Typography>
          You have <br /> 1 Free drink ticket
        </Typography>
        <Typography
          variant="subtitle2"
          color="GrayText"
          sx={{ textAlign: "center", mb: "30px" }}
        >
          Present your ID at the door with the email you just entered & Get your
          free drink ticket!
        </Typography>
        <Button
          variant="contained"
          href="https://www.eventbrite.com/e/sexy-hip-hop-afrobeats-reggeton-halloween-party-tickets-430908277257"
          target="_blank"
          sx={{
            width: "100%",
            background: "#1f2022",
            color: "#fff",
            mb: "20px",
          }}
        >
          GET MY HALLOWEEN TICKETS!
        </Button>
        <Typography
          variant="subtitle2"
          color="GrayText"
          sx={{ textAlign: "center", mb: "30px" }}
        >
          Follow us on IG{" "}
          <Typography
            component="span"
            variant="subtitle1"
            color="cyan"
            sx={{ ml: "6px", textDecoration:"none" }}
          >
            <a href="https://www.instagram.com/impossiblelounge">
            @impossiblelounge  </a>
          </Typography>
        
        </Typography>
      </Box>
    </BootstrapDialog>
  );
};

export default SuccessDialog;
