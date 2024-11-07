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
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; background-image: url('./public/images/Fondo 02derecha.jpg'); background-size: cover;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; background-color: rgba(255, 255, 255, 0.8);">
                    <tr>
                        <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0;">
                            <h1 style="color: #fff; text-align: center;">¡Hola ${firstName}!</h1>
                            <p style="font-size: 16px; text-align: center;">Gracias por completar el cuestionario. Tu puntuación ha sido de <strong>${puntuacion}%</strong>.</p>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                            <div style="background-color: #70bbab; padding: 20px; border-radius: 10px; margin: 20px 0; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                                ${generarMensaje(puntuacion)}
                            </div>
                            <p style="font-size: 16px; text-align: center;">Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</p>
                            <p style="font-size: 16px; text-align: center;">Saludos,<br/><strong>El equipo de Súmate</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#70bbd9" style="padding: 30px 30px 30px 30px;">
                        <p style="color: #ffffff; font-size: 14px; margin: 0;">&copy; 2024 Sumate. Todos los derechos reservados.</p>
                        </td>
                    </tr>
                </table>
            </body>
        </html>
      `;
}
