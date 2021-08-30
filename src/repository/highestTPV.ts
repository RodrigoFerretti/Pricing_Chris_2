import { ClientModel } from "../setup/DBModels/Client";


export class HighestTPV {
    public async fromClients() {
        const clientQueryResult: ClientModel[`columns`] = await new ClientModel().query().orderBy(`tpv`, `DESC`).first();
        const highestTPV: number = clientQueryResult.tpv
        return highestTPV;
    };
};
