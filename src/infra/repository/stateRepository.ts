import { State } from "../../domain/state";
import { StateMap } from "../mappers/stateMap";
import { Repository } from "./abstract/repository";


export class StateRepository extends Repository<State> {
    constructor() {
        const stateMap: StateMap = new StateMap();
        super(stateMap);
    };

    public async getById(primaryKeys: Pick<State, StateMap['primaryKeys'][number]>) {
        return await super.getById<StateMap['primaryKeys']>(primaryKeys);
    };
};
