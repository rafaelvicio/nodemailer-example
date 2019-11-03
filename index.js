const mailer = require("./mail");

async function main() {
  try {
    mailer.sendMail(
      {
        to: "rafaelvicio@icloud.com",
        from: "contato@stattrak.com.br",
        template: "example",
        context: { token: "123" }
      },
      err => {
        if (err) {
          console.log("Deu erro no envio", err);
        }

        console.log("Deu certo");
      }
    );
  } catch (error) {
    console.log("Deu erro", error);
  }
}

main();
