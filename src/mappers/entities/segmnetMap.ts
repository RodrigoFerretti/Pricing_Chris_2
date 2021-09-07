import { Segment } from "../../domain/segment"
import { TableMap } from "../tableMap"


export class SegmentMap implements TableMap<Segment> {
    name = `segment`;
    columnsMap = {
        id: `id`,
        name: `name`,
    };
};
