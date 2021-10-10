import { Segment } from "../../domain/segment";
import { SegmentTable } from "../tables/segmentTable";
import { Repository } from "./abstract/repository";


export class SegmentRepository extends Repository<Segment> {
    constructor() {
        const segmentMap: SegmentTable = new SegmentTable();
        super(segmentMap);
    };

    async getById(primaryKeys: Pick<Segment, SegmentTable['primaryKeys'][number]>) {
        return await super.getById<SegmentTable['primaryKeys']>(primaryKeys);
    };
};
