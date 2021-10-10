import { Client } from "../../domain/client";
import { ClientTable } from "../tables/clientTable";
import { Repository } from "./abstract/repository";


export class ClientRepository extends Repository<Client> {
    constructor() {
        const clientMap: ClientTable = new ClientTable();
        super(clientMap);
    };

    async getById(primaryKeys: Pick<Client, ClientTable['primaryKeys'][number]>) {
        return await super.getById<ClientTable['primaryKeys']>(primaryKeys);
    };
};
