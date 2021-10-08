export class TPVRange {
    id: number;
    level: number;
    minValue: number;
    maxValue: number;

    constructor({id, level, minValue, maxValue}: TPVRange) {
        this.id = id;
        this.level = level;
        this.minValue = minValue;
        this.maxValue = maxValue;
    };
};