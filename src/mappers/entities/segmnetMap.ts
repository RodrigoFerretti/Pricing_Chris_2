import { Segment } from "../../domain/segment"
import { DatabaseTableMap } from "../tableMap"


export class SegmentMap implements DatabaseTableMap<Segment> {
    tableName = `segment`;
    columnsMap = {
        id: `id`,
        name: `name`,
    };
};
