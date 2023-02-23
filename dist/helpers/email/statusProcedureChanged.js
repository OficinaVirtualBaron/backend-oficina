"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusProcedureChanged = void 0;
function statusProcedureChanged(procedure, transporter) {
    return __awaiter(this, void 0, void 0, function* () {
        yield transporter.sendMail({
            from: '"Email de actualización" <municipalidadsacanta.com>',
            to: procedure.user.email,
            subject: `Trámite ID #${procedure.id} actualizado`,
            html: `
        <body style="background-color: rgb(243, 243, 243); border-radius: 15px; padding: 10px 10px;">
        <h2 style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">¡Hola ${procedure.user.firstname} ${procedure.user.lastname}!<br>¡Tenemos noticias sobre su trámite!</h2>
        <h4 style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">(No contestar a este correo electrónico)</h4>
        <h3 style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
          ¡Hola vecino! Este es un correo para avisarle de que se ha actualizado el estado de su trámite.
          Usted presentó un trámite el cual tiene el ID <b>#${procedure.id}</b> y está a cargo de <b>${procedure.userMuni.firstname} ${procedure.userMuni.lastname}</b>.
        <h3>
        <h4 style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">Ingrese a la <a href="https://oficinavirtualbaron.github.io/oficina-vue/#/login" style="text-decoration: none"><b>oficina virtual</b></a> para poder ver los cambios y avances</h4>
        <p style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">- Municipalidad de Sacanta. Siempre a tu lado -</p>
        <img src="https://www.sacanta.gob.ar/sites/default/files/styles/ima-novedades/public/gestion_logo_obras_0.png?itok=7DEl15er"><br><br>
        <h5 style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">Si tiene dudas o problemas con su trámite, envíe un email a esta dirección: <b>info@sacanta.gob.ar</b> o contactarse a este número: <b>+54 3533 417923</b><br>
      </body>
        `
        });
    });
}
exports.statusProcedureChanged = statusProcedureChanged;
