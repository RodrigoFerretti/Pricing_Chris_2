import { Client } from "../../domain/client";
import { ClientMap } from "../mappers/clientMap";
import { Repository } from "./abstract/repository";


export class ClientRepository extends Repository<Client> {
    constructor() {
        const clientMap: ClientMap = new ClientMap();
        super(clientMap);
    };

    public async getById(primaryKeys: Pick<Client, ClientMap['primaryKeys'][number]>) {
        return await super.getById<ClientMap['primaryKeys']>(primaryKeys);
    };
};
