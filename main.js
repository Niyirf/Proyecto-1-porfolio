window.onload = () => {
   //capturamos el formulario
   let form = document.getElementById("email-form");
   let noti = document.getElementById("noti");

   //código que se ejecuta a los tres segundos de haber sido leido
   setTimeout(() => {
       console.log("hola coders");
   }, 3000);

   //escuchamos el evento submit o onsubmit (pulsar el boton de enviar)
   form.addEventListener("submit", (e) => {
       //evitamos el comportamiento por defecto
       e.preventDefault();

       //capturamos los inputs de texto
       let name = document.getElementById("inputName").value;
       let email = document.getElementById("inputEmail").value;
       let text = document.getElementById("inputField").value;

       //función para descargar el archivo
       function download(filename, text) {
           var element = document.createElement("a");
           element.setAttribute(
               "href",
               "data:text/plain;charset=utf-8," + encodeURIComponent(text)
           );
           element.setAttribute("download", filename);

           element.style.display = "block";
           document.body.appendChild(element);

           element.click();

           document.body.removeChild(element);
       }

       //constrimos la variable de texto
       let tempText = `
         Emisor: ${name}, \n
         Email: ${email},\n
         Mensaje: ${text}`;

       //invocamos la funcion para descargar el archivo
       download("email.txt", tempText);

       //ahora hay que mostrar un mensaje en la pantalla
       document.getElementById("noti").style.display = "block";

       //para ocultar la notificacion a los 5 segundos
       setTimeout(function() {
           document.getElementById("noti").style.display = "none";
       }, 5000);
   });


   // Codigo para que cambie el Navbar usando Js

   window.onscroll = function() {
       myFunction();
   }
   console.log("window");

   var header = document.getElementById("navbar__header");
   var navTop = header.offsetTop;


   function myFunction() {
       if (window.scrollY >= 100) {
           header.classList.add("sticky");
       } else {
           header.classList.remove("sticky");
       }
   }
   
}