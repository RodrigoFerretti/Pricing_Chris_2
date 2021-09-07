import { Segment } from "../../../domain/segment"
import { ITableMap } from "../iTableMap"


export class SegmentMap implements ITableMap<Segment> {
    name = `segment`;
    columnsMap = {
        id: `id`,
        name: `name`,
    };
};
