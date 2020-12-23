const amqp = require("amqplib");

(async () => {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    const assertion = await channel.assertQueue("emailQueue");

    channel.once("error", (error) => {
      console.error(error);
    });

    channel.consume("emailQueue", (message) => {
      var email = message.content.toString();
      /*
        sending mail operation
      */
      console.log("Email sended: ", email);
      channel.ack(message);
    });
  } catch (error) {
    console.log("Error", error);
  }
})();
