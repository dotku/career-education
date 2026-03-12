import https from "https";

function brevoRequest(data, apiKey) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "api.brevo.com",
        path: "/v3/smtp/email",
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => resolve({ status: res.statusCode, body }));
      }
    );
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

export default async function handler(name, email, phone, message) {
  const payload = JSON.stringify({
    sender: { name: "杰圆职场教育", email: "helen.lan@jytech.us" },
    to: [
      { email: "carrie.lan998@gmail.com", name: "Carrie" },
      { email: "weijingjaylin+careereducation@gmail.com", name: "Jay" },
    ],
    replyTo: { email, name },
    subject: `新咨询预约: ${name}`,
    htmlContent: `
      <h2>新的咨询预约</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">姓名</td><td style="padding:8px;border-bottom:1px solid #eee">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">邮箱</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">电话</td><td style="padding:8px;border-bottom:1px solid #eee">${phone}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">咨询内容</td><td style="padding:8px">${message}</td></tr>
      </table>
      <p style="color:#999;font-size:12px;margin-top:20px">此邮件由 edu.jytech.us 网站自动发送</p>
    `,
  });

  const res = await brevoRequest(payload, process.env.REVO_API_KEY || "");

  if (res.status >= 400) {
    console.error("Brevo API error:", res.status, res.body);
    return { status: 500, body: { error: "Failed to send email", detail: res.body } };
  }

  return { status: 200, body: { success: true } };
}
