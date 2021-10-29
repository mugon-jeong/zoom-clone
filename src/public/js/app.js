// front에서 back으로 소켓 연결
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", ()=>{
    console.log("Connect to Server");
});

socket.addEventListener("message", (message)=>{
    console.log("Just got this: ",message.data," from the server");
});

socket.addEventListener("close", (message)=>{
    console.log("Disconnected from Server");
});

setTimeout(()=>{
    socket.send("hello from the browser!");
},5000);