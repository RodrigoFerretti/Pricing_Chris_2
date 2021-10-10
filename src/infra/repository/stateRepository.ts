import { State } from "../../domain/state";
import { StateTable } from "../tables/stateTable";
import { Repository } from "./abstract/repository";


export class StateRepository extends Repository<State> {
    constructor() {
        const stateMap: StateTable = new StateTable();
        super(stateMap);
    };

    async getById(primaryKeys: Pick<State, StateTable['primaryKeys'][number]>) {
        return await super.getById<StateTable['primaryKeys']>(primaryKeys);
    };
};
