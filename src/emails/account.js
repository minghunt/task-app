import nodemailer from 'nodemailer'

const sendWelcomeEmail = (email, name) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "minhhung15052k2@gmail.com",
            pass: "uzbzpoyxiczvihrx",
        },
    });

    const mailOptions = {
        from: 'minhhung15052k2@gmail.com',
        to: email,
        subject: "Thanks for joining in!",
        html: `<p>Welcome to the app, ${name}. Let me know you how you get along with the app.</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}

const sendCancelationEmail = (email, name) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "minhhung15052k2@gmail.com",
            pass: "uzbzpoyxiczvihrx",
        },
    });

    const mailOptions = {
        from: 'minhhung15052k2@gmail.com',
        to: email,
        subject: "Sorry to see you go!",
        html: `<p>Goodbye, ${name}. I hope to see you back sometime soon.</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}
export { sendWelcomeEmail, sendCancelationEmail }