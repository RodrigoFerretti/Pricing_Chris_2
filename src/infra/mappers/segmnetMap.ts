import { Segment } from "../../domain/segment"
import { TableMap } from "./interfaces/TableMap"


export class SegmentMap implements TableMap<Segment> {
    name = `segment`;
    columnsMap = {
        id: `id`,
        name: `name`,
    };
};
