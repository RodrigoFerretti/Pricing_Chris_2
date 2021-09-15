import { Segment } from "../../domain/segment";
import { SegmentMap } from "../mappers/segmentMap";
import { Repository } from "./abstract/repository";


export class SegmentRepository extends Repository<Segment, IStandardPK> {
    constructor() {
        const segmentMap: SegmentMap = new SegmentMap();
        super(segmentMap);
    };
};
