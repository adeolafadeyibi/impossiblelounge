import { Box, CircularProgress, Typography } from "@mui/material";
import * as Yup from "yup";
import { FC, useState } from "react";
import { useFormik } from "formik";
import { useMounted } from "src/hooks/use-mounted";
import FormikTextfield from "../widgets/formik/FormikTextfield";
import axios from "axios";
import toast from "react-hot-toast";
import GradientButton from "../shared/GradientButton";
import Image from "next/image";
import { useRouter } from "next/router";

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter your email!")
    .email("Please enter a valid email!")
    .default(""),
});

const QueryForm: FC = () => {
  const isMounted = useMounted();
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: formSchema.unknown().cast({}),
    validationSchema: formSchema,
    onSubmit: async (values, helpers): Promise<void> => {
      if (isMounted()) {
        setLoading(true);
        axios
          .post("/api/sendgrid", values)
          .then((res) => {
            router.push("/success");
            formik.resetForm();
          })
          .catch((err) => {
            toast.error(err?.response?.data?.message);
          })
          .finally(() => setLoading(false));
      }
    },
  });
  return (
    <Box className="px-4 md:px-[50px] flex flex-col items-center relative">
      <Typography
        variant="inherit"
        className="text-[32px] sm:text-[40px] md:text-[48px] text-secondary !mb-[60px] md:!mb-[90px] endor"
      >
        Do you have a question?
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={formik.handleSubmit}
        className="w-full sm:w-[480px] mx-auto flex flex-col mb-[60px] md:mb-[96px] z-10"
      >
        <Box className="mb-6">
          <FormikTextfield
            label="Email Address"
            name="email"
            placeholder="Enter your email address"
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
            isTouched={!!formik.touched.email}
          />
        </Box>
        <Box className="mb-6">
          <FormikTextfield
            label="Your Message"
            name="message"
            placeholder="Enter your message"
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            value={formik.values.message}
            error={formik.errors.message}
            isTouched={!!formik.touched.message}
          />
        </Box>
        <GradientButton
          disabled={isLoading}
          title="Send Message"
          type="submit"
          size="large"
          startIcon={isLoading ? <CircularProgress size={20} /> : <></>}
        />
      </Box>
      <Box className="flex flex-col items-center justify-center mb-[60px] md:mb-[99px] z-10">
        <Typography
          variant="inherit"
          className="text-[32px] text-white !mb-[38px] merienda font-bold"
        >
          Impossible Lounge
        </Typography>
        <Typography
          variant="inherit"
          className="text-[16px] leading-[25px] text-grey_text "
        >
          All rights Reserved © 2022{" "}
          <Typography
            component="span"
            variant="inherit"
            className="text-secondary"
          >
            Impossible Lounge
          </Typography>
        </Typography>
      </Box>
      <Box className="hidden lg:block absolute z-0 bottom-[20px] left-[120px] w-[304px] h-[200px]">
        <Image
          width="304px"
          height="200px"
          layout="fill"
          src="/static/pumpkin-left.png"
          alt="pumpkin"
        />
      </Box>
      <Box className="hidden lg:block absolute z-0 top-[25%] right-[0px] w-[304px] h-[200px]">
        <Image
          width="304px"
          height="200px"
          layout="fill"
          src="/static/pumpkin-right.png"
          alt="pumpkin"
        />
      </Box>
      <Box className="hidden lg:block absolute z-0 top-[25%] left-[120px] w-[240px] h-[240px]">
        <Image
          width="240px"
          height="240px"
          layout="fill"
          src="/static/ghost-contact-form.png"
          alt="pumpkin"
        />
      </Box>
    </Box>
  );
};

export default QueryForm;
