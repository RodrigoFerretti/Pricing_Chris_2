import { Segment } from "../../domain/segment"
import { iTable } from "./interfaces/iTable"


export class SegmentTable implements iTable<Segment> {
    name = `segment`;
    columns = {
        id: `id`,
        name: `name`,
    };
    primaryKeys = [`id`] as const;
};
