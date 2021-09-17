import { State } from "../../domain/state"
import { iTableMap } from "./interfaces/iTableMap"


export class StateMap implements iTableMap<State> {
    public name = `state`;
    public columnsMap = {
        id: `id`,
        name: `name`
    };
    public primaryKeys = [`id`] as const;
};
