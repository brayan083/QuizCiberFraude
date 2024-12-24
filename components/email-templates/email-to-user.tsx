function generarMensaje(puntuacion: string): string {
    const puntuacionInt = extraerPuntuacion(puntuacion);

    if (puntuacionInt > 60 && puntuacionInt <= 100) {
        return "<p>Parece que en este momento no eres víctima de ciberfraude. Debes estar alerta por si más adelante detectas alguno de los casos comentados en el quiz.</p>";
    } else if (puntuacionInt > 30 && puntuacionInt <= 60) {
        return "<p>Puedes estar sufriendo un ataque de suplantación de marca, sería conveniente una revisión para descartar. En Súmate contamos con un servicio de ciberfraude y podemos analizar tu caso para que salgas de dudas.</p>";
    } else if (puntuacionInt >= 0 && puntuacionInt <= 30) {
        return "<p>Hay varios indicadores que nos hacen pensar que tu marca está siendo víctima de ciberfraude. Podemos ayudarte para detectar de dónde viene el problema y atajarlo.</p>";
    } else {
        return "<p>Puntuación inválida.</p>";
    }
}

function extraerPuntuacion(str: string): number {
    const match = str.match(/\((\d+)%\)/);
    if (match) {
        return parseInt(match[1], 10);
    }
    throw new Error("Formato de puntuación inválido");
}

export default function emailTemplateUser(
    firstName: string,
    puntuacion: string
): string {
    return `
        <html>

            <body
                style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; background-image: url('./public/images/Fondo 02derecha.jpg'); background-size: cover;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600"
                    style="border-collapse: collapse; background-color: rgba(255, 255, 255, 0.9); border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);">
                    <tr>
                        <td align="center" bgcolor="#193643" style="padding: 40px 0 30px 0;">
                            <h1 style="color: #fff; text-align: center; margin: 0;">¡Hola ${firstName}!</h1>
                            <p style="font-size: 16px; text-align: center; color: #fff; margin: 10px 0 0 0;">Gracias por completar el cuestionario. Tu puntuación ha sido de <strong>${puntuacion}</strong>.</p>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                            <div style="background-color: #008bad; padding: 20px; border-radius: 10px; margin: 20px 0; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); color: #fff; text-align: center;">
                                ${generarMensaje(puntuacion)}
                            </div>
                            <p style="font-size: 16px; text-align: center; margin: 20px 0;">Si tienes alguna pregunta o necesitas más información, no dudes en contactar con nosotros en el email <a href="mailto:hola@sumate.eu" style="color: #008bad;">hola@sumate.eu</a> o a través del teléfono 911 239 125.</p>
                            <p style="font-size: 16px; text-align: center; margin: 20px 0;">También puedes visitar nuestra página de contacto en <a href="https://www.sumate.eu/contacto/" style="color: #008bad;">https://www.sumate.eu/contacto/</a>.</p>
                            <p style="font-size: 16px; text-align: center; margin: 20px 0;">Saludos,<br /><strong>El equipo de Súmate</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#f98345" style="padding: 30px 30px 30px 30px;">
                            <p style="color: #ffffff; font-size: 14px; margin: 0; text-align: center;">&copy; 2024 Sumate. Todos los
                                derechos reservados.</p>
                        </td>
                    </tr>
                </table>
            </body>

        </html>
      `;
}
