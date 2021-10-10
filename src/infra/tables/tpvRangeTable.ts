import { TPVRange } from "../../domain/tpvRange"
import { iTable } from "./interfaces/iTable"


export class TPVRangeTable implements iTable<TPVRange> {
    name = `tpv_range`;
    columns = {
        id: `id`,
        level: `level`,
        minValue: `min_value`,
        maxValue: `max_value`
    };
    primaryKeys = [`id`] as const;
};
