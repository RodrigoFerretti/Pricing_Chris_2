import { State } from "../../domain/state"
import { iTableMap } from "./interfaces/iTableMap"


export class StateMap implements iTableMap<State> {
    name = `state`;
    columnsMap = {
        id: `id`,
        name: `name`
    };
};
