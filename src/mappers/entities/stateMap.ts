import { State } from "../../domain/state"
import { DatabaseTableMap } from "../tableMap"


export class StateMap implements DatabaseTableMap<State> {
    tableName = `state`;
    columnsMap = {
        id: `id`,
        name: `name`
    };
};
