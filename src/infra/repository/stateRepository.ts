import { State } from "../../domain/state";
import { StateMap } from "../mappers/stateMap";
import { Repository } from "./abstract/repository";


export class StateRepository extends Repository<State, StateMap[`primaryKeys`]> {
    constructor() {
        const stateMap: StateMap = new StateMap();
        super(stateMap);
    };
};
