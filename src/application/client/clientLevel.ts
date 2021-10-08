import { Client } from "../../domain/client";


export class ClientLevel {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    };

    public getLevel() {
        let level: number;
        if (this.client.tpv <= 5000) {
            level = 1;
        }
        else if (this.client.tpv <= 7000) {
            level = 2;
        }
        else {
            level = 3;
        }
        return level;
    };
};
