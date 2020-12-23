const amqp = require("amqplib");
const data = require("./data");

(async () => {
  try {
    const connection = await amqp.connect("amqp://localhost:5672", {});
    const channel = await connection.createChannel();
    const assertion = await channel.assertQueue("emailQueue");

    const emails = data.map((person) => person.email);
    emails.forEach((email) => {
      channel.sendToQueue("emailQueue", Buffer.from(email));
      console.log("Email moved to queue: ", email);
    });
  } catch (error) {
    console.log("Error", error);
  }
})();
