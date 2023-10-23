import openSocket from "socket.io-client";

function connectToSocket() {
  return openSocket(localStorage.getItem("REACT_APP_BACKEND_URL"));
}

export default connectToSocket;
