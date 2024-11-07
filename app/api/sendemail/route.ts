import { EmailTemplate } from '@/components/email-template';
import emailTemplateCompany from '@/components/email-templates/email-to-company';
import emailTemplateUser from '@/components/email-templates/email-to-user';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

export const POST = async (req: NextRequest) => {

    const { emailBody } = await req.json();

    try {
        // const transporter = nodemailer.createTransport({
        //     service: "zoho",
        //     host: "smtpro.zoho.in",
        //     port: 465,
        //     secure: true,
        //     auth: {
        //       user,
        //       pass,
        //     },
        //   });
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user,
                pass,
            },
        });

        // Este es el email que se le envía al equipo de sumate
        const mailOptionsCompany = {
            from: user,
            to: 'brayan@sumate.eu',
            subject: 'New user in the Quiz!',
            html: emailTemplateCompany(
                emailBody.nombre,
                emailBody.empresa,
                emailBody.email,
                emailBody.telefono,
                emailBody.puntuacion,
                emailBody.talkToAnalyst
            ),
        }
        await transporter.sendMail(mailOptionsCompany);

        // Este es el email que se le envía al usuario si quiere recibirlo
        if (emailBody.sendResults) {
            const mailOptionsUser = {
                from: user,
                to: emailBody.email,
                subject: 'Resultados de tu cuestionario',
                html: emailTemplateUser(emailBody.nombre, emailBody.puntuacion),
            };
            console.log("Enviando email al usuario: ", emailBody.email);
            await transporter.sendMail(mailOptionsUser);
        }

        return NextResponse.json({ message: 'Email sent!' }, { status: 200 });


    } catch (error) {
        console.error("Error en route: ", error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}


