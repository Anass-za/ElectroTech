import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.Authorization: Bearer);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "zahir123anass@gmail.com", // Your email where you'll receive emails
      from: "zahi.electro.tech@gmail.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>You've got a mail</div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
