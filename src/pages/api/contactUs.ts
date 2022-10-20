import sendgrid from "@sendgrid/mail";

if (process.env.SENDGRID_API_KEY)
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// console.log("key",process.env.SENDGRID_API_KEY);

async function contactUs(req: any, res: any) {
  try {
    await sendgrid.send({
      to: "social@connectperfectly.com",
      from: process.env.EMAIL_FROM ?? "",
      subject: `${req?.body.from}'s question`,
      text: req?.body?.message,
    });
  } catch (error) {
    console.log("error", error);

    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
}

export default contactUs;
