import Swal from "sweetalert2";
export const sendAlert = (r: string) => {
  switch (r) {
    case "good":
      Swal.fire({
        title: "Message Sent",
        text: `Your message was sent succesfully!`,
        icon: "success",
        confirmButtonText: "Ok",
      });
      break;
    case "bad":
      Swal.fire({
        title: "Error",
        text: `There was an error sending your message`,
        icon: "error",
        confirmButtonText: "Try again",
      });
      break;
    case "fix":
      Swal.fire({
        title: "Fix and fill",
        text: `You need to complete and fix all the fields`,
        icon: "info",
        confirmButtonText: "Let´s fix",
      });
      break;
    case "bien":
      Swal.fire({
        title: "Mensaje enviado",
        text: `Tu mensaje se envio correctamente!`,
        icon: "success",
        confirmButtonText: "Ok",
      }).then((isConfirmed) => {
        if (isConfirmed) location.reload();
      });
      break;
    case "mal":
      Swal.fire({
        title: "Error",
        text: `Hubo un error al enviar tu mensaje`,
        icon: "error",
        confirmButtonText: "Intentar de nuevo",
      });
      break;
    case "corrige":
      Swal.fire({
        title: "Corrige y rellena",
        text: `Hay un error en los campos, revisalos`,
        icon: "info",
        confirmButtonText: "A arreglar!",
      });
      break;
    default:
      break;
  }
};
