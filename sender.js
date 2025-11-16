function sender(x) {
  const besked = {
    from: afsenderID,
    val: x,
  };
  client.publish(topic, JSON.stringify(besked));
  console.log("SENT:", besked);
}
