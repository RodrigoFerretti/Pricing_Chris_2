import { Client } from "../../domain/client";


export class ClientLevel {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    };

    public getLevel() {
        let level: number;
        if (this.client.tpv <= 5000) {
            return level = 1;
        }
        else if (this.client.tpv <= 7000) {
            return level = 2;
        }
        else if (this.client.tpv <= 10000) {
            return level = 3;
        }
        throw Error(`client level not found`);
    };
};
