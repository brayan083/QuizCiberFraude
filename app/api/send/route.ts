import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { emailBody } = await request.json(); // Obtener el mensaje del cuerpo de la solicitud

    // console.log("Mensaje recibido:", emailBody);

    try {
        const data = await resend.emails.send({
            from: 'Test Ciber Fraude <onboarding@resend.dev>',
            to: ['brayan@sumate.eu'],
            subject: 'Welcome!',
            react: EmailTemplate({ firstName: emailBody.nombre, empresa: emailBody.empresa, email: emailBody.email, telefono: emailBody.telefono, puntuacion: emailBody.puntuacion }),
            text: "Soy el texto alternativo del correo",
        })

        console.log(data);

        return NextResponse.json({ message: 'Email sent!' }, { status: 200 });

    } catch (error) {
        console.error("Error en route: ", error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }

};
