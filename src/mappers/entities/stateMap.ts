import { State } from "../../domain/state"
import { TableMap } from "../tableMap"


export class StateMap implements TableMap<State> {
    name = `state`;
    columnsMap = {
        id: `id`,
        name: `name`
    };
};
