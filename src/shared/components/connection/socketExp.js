import openSocket from "socket.io-client"
const  socketio = openSocket('http://localhost:8080');


const newVisitor = () => {
    
    const visitorId = socketio.emit('new-visitor').id
    console.log('emit')
    console.log(visitorId)
}



export default newVisitor;