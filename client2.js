var mqtt = require("mqtt");

/* connect to the server */

var client = mqtt.connect('mqtt://localhost:1883');

/** subscribe to a topic */

//you can set the { QoS : 0/1/2 } to explicitly subscribe for QoS messages
client.subscribe('topic/client');

/* listen for a message */


client.on('message', function(topic, message) {
  console.log(message.toString()); // message is Buffer
  //console.log(message);
});