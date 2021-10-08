import { TPVRange } from "../../domain/tpvRange"
import { iTableMap } from "./interfaces/iTableMap"


export class TPVRangeMap implements iTableMap<TPVRange> {
    public name = `tpv_range`;
    public columnsMap = {
        id: `id`,
        level: `level`,
        minValue: `min_value`,
        maxValue: `max_value`
    };
    public primaryKeys = [`id`] as const;
};
