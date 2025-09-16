let nodemailer = require("nodemailer");

export async function POST(req) {
  const data = await req.json();

  console.log(data);
  try {
    const transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      secure: true,
      port: 465,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    await transport.sendMail({
      from: process.env.MAIL_USER,
      to: ["zoho@saburpwm.com"],
      subject: "Sabur PWM Newsletter",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
          <h2 style="color: #333;">Newsletter Information</h2>
          <p><b>Full Name:</b> ${data.values.fname}</p>
          <p><b>Email:</b> ${data.values.email}</p>
          <p><b>Email:</b> ${data.values.referred}</p>
          <p><b>Asset:</b> ${data.values.asset}</p>
    
          
          <h2 style="color: #333;">Selected Services</h2>
          <ul style="list-style-type: disc; padding-left: 20px; color: #666;">
          ${data.selected.map((service) => `<li>${service.name}</li>`).join("")}
        </ul>
        </div>
      `,
    });

    return new Response("sent");
  } catch (err) {
    console.log(err);
    return new Response(err);
  }
}
