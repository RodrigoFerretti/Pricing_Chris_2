import { Client } from "../../domain/client";
import { ClientMap } from "../mappers/clientMap";
import { Repository } from "./abstract/repository";
import { ExcludeMethods } from "../types/excludeMethods";


export class ClientRepository extends Repository<ExcludeMethods<Client>, [`id`]> {
    constructor() {
        const clientMap: ClientMap = new ClientMap();
        super(clientMap);
    };
};
