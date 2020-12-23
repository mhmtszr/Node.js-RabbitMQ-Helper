# Node.js-RabbitMQ-Helper

Example send email usage of RabbitMQ on Node.js.

### Install RabbitMQ from Docker

Needed [Docker](https://www.docker.com/products/docker-desktop).

Pull rabbitmq Image.

```
docker pull rabbitmq
```

Run RabbitMQ and bind to localport 5672 and 15672.

```
docker run -d --name myrabbit -p 5672:5672 -p 15672:15672 rabbitmq
```

### Run the Node.js Code

Get packages.

```
npm install
```

Run consumer script to send email.

```
npm run consumer
```

Run producer script to add emails to RabbitMQ queue.

```
npm run producer
```
