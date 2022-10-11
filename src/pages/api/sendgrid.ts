import sendgrid from "@sendgrid/mail";

if (process.env.SENDGRID_API_KEY)
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

 // console.log("key",process.env.SENDGRID_API_KEY);
  

async function sendEmail(req: any, res: any) {

  const ticketLink = `<a href=https://impossiblehalloween.eventbrite.com/>Get My Tickets</a>`;

  try {
    await sendgrid.send({
      to: req.body.to,
      from: process.env.EMAIL_FROM ?? "",
      subject: "Super Sexy Halloween Party",
      text: `Hey ${req.body.name}, 
The Super Sexy Halloween party is Saturday OCT 29th
We hope to see you there in full costume. 
Get your tickets at the link below.
      ${ticketLink}
      
      YOUR FREE DRINKS AWAITS!. JUST SHOW YOUR ID AND EMAIL AND YOU'LL GET YOUR DRINK!`,
    });
  } catch (error) {
    console.log("error", error);

    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
}

export default sendEmail;
