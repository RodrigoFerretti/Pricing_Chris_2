import { Segment } from "../../domain/segment";
import { SegmentMap } from "../mappers/segmentMap";
import { Repository } from "./abstract/repository";


export class SegmentRepository extends Repository<Segment> {
    constructor() {
        const segmentMap: SegmentMap = new SegmentMap();
        super(segmentMap);
    };

    public async getById(primaryKeys: Pick<Segment, SegmentMap['primaryKeys'][number]>) {
        return await super.getById<SegmentMap['primaryKeys']>(primaryKeys);
    };
};
