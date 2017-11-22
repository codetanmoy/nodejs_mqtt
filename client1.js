var mqtt = require("mqtt");


/*** connect to the server *****/

var client = mqtt.connect('mqtt://localhost:1883');

/*** client on connect ***/
client.on("connect", function() {
  console.log("client is connected");
})

/*** client on reconnect ***/
client.on("reconnect", function() {
  console.log("client is reconnected");
})

/*** client on error ***/
client.on("error", function(err) {
  console.log("error from client --> ", err);
})

/*** client on close ***/
client.on("close", function() {
    console.log("client is closed");
  })
  /*** client on offline ***/
client.on("offline", function(err) {
  console.log("client is offline");
});

/** subscribe to a topic */
/*
  subscribe method takes two arguments {topic,options}.
 */
client.subscribe('topic/client', { qos: 1 }, function(err, granted) {
  if (err)
    console.log(err);
  else
    console.log("client connected : ", granted);
});


/*** publish a message ***/
//set qos = 1 to guarantee delivery service implement. 
//broker will always store the last retain message per topic if retain is true for messages.
client.publish('topic/client', JSON.stringify({ Eventby: "Sillycon", Name: "GetSetF5" }), { retain: true, qos: 1 });



client.on('message', function(topic, message) {
  console.log(message.toString()); // message is Buffer
  //console.log(message);
});


