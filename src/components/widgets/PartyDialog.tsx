import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FC } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { X } from "src/icons/x";
import FormikTextfield from "./formik/FormikTextfield";
import { useMounted } from "src/hooks/use-mounted";
import axios from "axios";
import toast from "react-hot-toast";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    position: "relative",
  },
  "& .MuiPaper-root": {
    overflowX: "visible !important",
    overflowY: "visible !important",
  },

  [theme.breakpoints.down("md")]: {
    "& .MuiPaper-root": {
      overflowY: "auto !important",
      overflowX: "hidden !important",
    },
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
  [theme.breakpoints.down("md")]: {
    top: "0px",
    right: "0px",
    width: "30px",
    height: "30px",
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "400px",
  height: "calc(100% - 40px)",
  top: "20px",
  left: "-170px",
  borderRadius: "24px",

  [theme.breakpoints.down("md")]: {
    top: "0px",
    left: "0px",
    width: "100%",
    height: "auto",
    maxHeight: "300px",
    borderRadius: "0px",
  },
}));

const StyledIconImage = styled("img")(({ theme }) => ({
  width: "45px",
  height: "45px",
}));

const LockIconImage = styled("img")(({ theme }) => ({
  width: "35px",
  height: "35px",
  objectFit: "fill",
}));

interface DialogProps {
  open: boolean;
  handleClose: () => void;
  openSuccess: () => void;
}

const formSchema = Yup.object().shape({
  name: Yup.string().required("Please add your name!"),
  email: Yup.string()
    .required("Please add email!")
    .email("Please add a valid email!"),
});

const initialValues = {
  name: "",
  email: "",
};

const PartyDialog: FC<DialogProps> = ({ open, handleClose, openSuccess }) => {
  const isMounted = useMounted();
  const formik = useFormik({
    initialValues: {
      ...initialValues,
      submit: null,
    },
    validationSchema: formSchema,
    onSubmit: async (values, helpers): Promise<void> => {
      if (isMounted()) {
        const body = {
          to: values.email,
          name: values.name,
        };

        axios
          .post("/api/sendgrid", body)
          .then((res) => {
            openSuccess();
            handleClose();
          })
          .catch((err) => {
            toast.error(err.response?.data?.error);
          });
      }
    },
  });
  return (
    <BootstrapDialog
      maxWidth="lg"
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <CloseBtn onClick={handleClose}>
        <X fontSize="small" color="action" />
      </CloseBtn>
      <Box
        sx={{
          backgroundColor: "#fff",
          minHeight: "500px",
          width: { md: "700px", xs: "auto" },
          position: "relative",
          pt: { md: "20px", xs: "320px" },
          pb: "50px",
          pl: { md: "240px", xs: "20px" },
          pr: "20px",
          borderRadius: "20px",
        }}
      >
        <StyledImage src="/static/flyerwithlatina.png" alt="img" />
        <form noValidate onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            mb={2}
          >
            <StyledIconImage src="static/apple-music.png" alt="music" />
            <Typography variant="h6" color="GrayText" mx={2}>
              Impossible Lounge
            </Typography>
          </Box>
          <Typography variant="h5" color="#1f2022" mb={3}>
            Don't miss the hottest underground events in san Diego
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }} mb={2}>
            <Box
              border="1px solid grayText"
              width="12px"
              height="12px"
              borderRadius="100%"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                width={5}
                height={5}
                borderRadius="100%"
                bgcolor="GrayText"
              />
            </Box>
            <Typography variant="subtitle2" color="GrayText" mx={2}>
              FREE Tickets to exclusive events.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }} mb={2}>
            <Box
              border="1px solid grayText"
              width="12px"
              height="12px"
              borderRadius="100%"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                width={5}
                height={5}
                borderRadius="100%"
                bgcolor="GrayText"
              />
            </Box>
            <Typography variant="subtitle2" color="GrayText" mx={2}>
              FREE Drinks or cocktail at Labor Day Weekend Events.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }} mb={4}>
            <Box
              border="1px solid grayText"
              width="12px"
              height="12px"
              borderRadius="100%"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                width={5}
                height={5}
                borderRadius="100%"
                bgcolor="GrayText"
              />
            </Box>
            <Typography variant="subtitle2" color="GrayText" mx={2}>
              Early access to future event tickets.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }} mb={2}>
            <Typography variant="h6" color="#1f2022" mr={2}>
              JOIN the 100's that have experienced the IMPOSSIBLE.
            </Typography>
            <LockIconImage src="static/secureIcon.jpeg" alt="lock" />
          </Box>
          <Grid container spacing={3} mb={3}>
            <Grid item md={6} xs={12}>
              <FormikTextfield
                label="Name"
                name="name"
                placeholder="Enter your Name"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.name}
                error={formik.errors.name}
                isTouched={!!formik.touched.name}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormikTextfield
                label="Email Address"
                name="email"
                placeholder="Enter your email"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email}
                isTouched={!!formik.touched.email}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "100%",
              background: "#1f2022",
              color: "#fff",
              mb: { xs: "30px", md: "0px" },
            }}
          >
            GIVE ME MY DRINK
          </Button>
        </form>
      </Box>
    </BootstrapDialog>
  );
};

export default PartyDialog;
