// main.ts
import { io, Socket } from "socket.io-client";

class SocketManager {
  private socket: Socket;

  constructor() {
    this.socket = io("wss://scbpm.com/", {
      reconnectionDelayMax: 10000,
      auth: {
        token: "123",
      },
    });

    this.socket.on("connect", () => {
      console.log(`Connected with id ${this.socket.id}`);
    });
    
    this.socket.on("disconnect", (reason: string) => {
      console.log(`Disconnected: ${reason}`);
    });

    this.socket.on("connect_error", (error: Error) => {
      console.log(`Connection Error: ${error.message}`);
    });

    this.socket.on("song", (song: Song) => {
      console.log(song);
    });
  }

  public getSocket = () => {
    return this.socket;
  };
}

export const socketManager = new SocketManager();
