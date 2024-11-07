export default function emailTemplateCompany(
  firstName: string,
  empresa: string,
  email: string,
  telefono: string,
  puntuacion: string,
  talktoAnalyst: boolean
): string {
  return `
      <html>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">
              <tr>
                  <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0;">
                  <h1 style="color: #ffffff; font-size: 24px; margin: 0;">Bienvenido</h1>
                  </td>
              </tr>
              <tr>
                  <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                  <p style="color: #333333; font-size: 16px; line-height: 24px; margin: 0;">Gracias por registrarte en nuestro servicio.</p>
                  <h1 style="color: #333333; font-size: 20px; margin-top: 20px;">¡Nuevo usuario!</h1>
                  <p style="color: #333333; font-size: 16px; line-height: 24px; margin: 0;">Nombre: ${firstName}</p>
                  <p style="color: #333333; font-size: 16px; line-height: 24px; margin: 0;">Empresa: ${empresa}</p>
                  <p style="color: #333333; font-size: 16px; line-height: 24px; margin: 0;">Email: ${email}</p>
                  <p style="color: #333333; font-size: 16px; line-height: 24px; margin: 0;">Teléfono: ${telefono}</p>
                  <p style="color: #333333; font-size: 16px; line-height: 24px; margin: 0;">Puntuación: ${puntuacion}</p>
                  <p style="color: #333333; font-size: 16px; line-height: 24px; margin: 0;">Necesita hablar con un analista: ${talktoAnalyst ? 'Si': 'No'}</p>
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
