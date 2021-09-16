import { Segment } from "../../domain/segment"
import { iTableMap } from "./interfaces/iTableMap"


export class SegmentMap implements iTableMap<Segment> {
    public name = `segment`;
    public columnsMap = {
        id: `id`,
        name: `name`,
    };
    static primaryKeys = [`id`] as const;
};
