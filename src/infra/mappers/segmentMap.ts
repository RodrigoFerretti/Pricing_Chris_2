import { Segment } from "../../domain/segment"
import { iTableMap } from "./interfaces/iTableMap"


export class SegmentMap implements iTableMap<Segment> {
    name = `segment`;
    columnsMap = {
        id: `id`,
        name: `name`,
    };
};
