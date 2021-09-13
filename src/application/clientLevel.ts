import { Client } from "../domain/client";
import { ClientRepository } from "../infra/repository/clientRepository";


export class ClientLevel {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    };

    async getLevel() {
        const clientHighestTPV: Client = await new ClientRepository().getFirst({
            orderBy: {key: `tpv`, sorting: `desc`}
        });
        const highestClientTPV: number = clientHighestTPV.tpv;
        const level: number = (this.client.tpv <= highestClientTPV / 3) 
        ? 1 : 
        (this.client.tpv <= highestClientTPV * 2 / 3) 
        ? 2 : 
        (this.client.tpv <= highestClientTPV) 
        ? 3 
        : 1;
        return level;
    };
};
