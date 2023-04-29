import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { GameDto } from "../generated";
import { ApiClient } from "./ApiClient";

type GameUpdatedCallback = (gameState: GameDto) => void;

export class HubService {
  private readonly hub: HubConnection;  

  constructor() {
    const hubUrl = ApiClient.GetBaseUrl() + "/api/hub";
    this.hub = new HubConnectionBuilder()
      .withAutomaticReconnect()
      .withUrl(hubUrl, { withCredentials: false })
      .build();      
  }

  async connect(gameId: string, playerId: string): Promise<void> {
    console.log("Connecting to hub");
    await this.hub.start();
    await this.hub.invoke("Join", gameId, playerId);
    console.log("Connected to hub successfully", gameId);
  }

  onGameUpdated(callback: GameUpdatedCallback) {
    this.hub.on("updateGame", gameState => {
      if (callback) {
        console.log("onGameUpdated", gameState);
        callback(gameState);
      }
    });
  }
}
