import { State } from "../../../domain/state"
import { ITableMap } from "../iTableMap"


export class StateMap implements ITableMap<State> {
    name = `state`;
    columnsMap = {
        id: `id`,
        name: `name`
    };
};
