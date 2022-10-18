import sendgrid from "@sendgrid/mail";

if (process.env.SENDGRID_API_KEY)
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req: any, res: any) {
  try {
    await sendgrid.send({
      to: req.body.email,
      from: process.env.EMAIL_FROM ?? "",
      subject: `${req?.body?.name}'s Question`,
      text: `Name: ${req?.body?.name} 
             Phone: ${req?.body?.phone}
            ${req?.body?.question} 
             `,
    });
  } catch (error) {
    console.log("error", error);

    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;

