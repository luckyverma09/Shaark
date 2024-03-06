const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const contactNo = document.querySelector("#phone");
const message = document.querySelector("#message");

function sendEmail() {
  const bodyMessage = `Name: ${name.value} <br> Email: ${email.value} <br> Contact No: ${contactNo.value} <br><br> Message: ${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "idonthaveemail1af@gmail.com",
    Password: "84958EEADF3AF99E547D04E5D6FE77E96552",
    To: "idonthaveemail1af@gmail.com",
    From: "idonthaveemail1af@gmail.com",
    Subject: "Message from User",
    Body: bodyMessage,
  }).then((message) => {
    if (message === "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      form.reset();
    } else {
      console.error(message);
      alert("There is error at sending message. ");
    }
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  sendEmail();
});
