import { State } from "../../domain/state"
import { iTable } from "./interfaces/iTable"


export class StateTable implements iTable<State> {
    name = `state`;
    columns = {
        id: `id`,
        name: `name`
    };
    primaryKeys = [`id`] as const;
};
