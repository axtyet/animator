// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import * as flatbuffers from 'flatbuffers';
import { ComparisonTrend } from '../wk2/comparison-trend.js';
import { Metadata } from '../wk2/metadata.js';
import { Pollutant } from '../wk2/pollutant.js';
import { PollutantType } from '../wk2/pollutant-type.js';
export class AirQuality {
    bb = null;
    bb_pos = 0;
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsAirQuality(bb, obj) {
        return (obj || new AirQuality()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsAirQuality(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new AirQuality()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    metadata(obj) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new Metadata()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    categoryIndex() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0;
    }
    index() {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readInt16(this.bb_pos + offset) : 0;
    }
    isSignificant() {
        const offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    pollutants(index, obj) {
        const offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? (obj || new Pollutant()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
    }
    pollutantsLength() {
        const offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    previousDayComparison() {
        const offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : ComparisonTrend.UNKNOWN;
    }
    primaryPollutant() {
        const offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : PollutantType.NOT_AVAILABLE;
    }
    scale(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    static startAirQuality(builder) {
        builder.startObject(8);
    }
    static addMetadata(builder, metadataOffset) {
        builder.addFieldOffset(0, metadataOffset, 0);
    }
    static addCategoryIndex(builder, categoryIndex) {
        builder.addFieldInt8(1, categoryIndex, 0);
    }
    static addIndex(builder, index) {
        builder.addFieldInt16(2, index, 0);
    }
    static addIsSignificant(builder, isSignificant) {
        builder.addFieldInt8(3, +isSignificant, +false);
    }
    static addPollutants(builder, pollutantsOffset) {
        builder.addFieldOffset(4, pollutantsOffset, 0);
    }
    static createPollutantsVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }
    static startPollutantsVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
    }
    static addPreviousDayComparison(builder, previousDayComparison) {
        builder.addFieldInt8(5, previousDayComparison, ComparisonTrend.UNKNOWN);
    }
    static addPrimaryPollutant(builder, primaryPollutant) {
        builder.addFieldInt8(6, primaryPollutant, PollutantType.NOT_AVAILABLE);
    }
    static addScale(builder, scaleOffset) {
        builder.addFieldOffset(7, scaleOffset, 0);
    }
    static endAirQuality(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createAirQuality(builder, metadataOffset, categoryIndex, index, isSignificant, pollutantsOffset, previousDayComparison, primaryPollutant, scaleOffset) {
        AirQuality.startAirQuality(builder);
        AirQuality.addMetadata(builder, metadataOffset);
        AirQuality.addCategoryIndex(builder, categoryIndex);
        AirQuality.addIndex(builder, index);
        AirQuality.addIsSignificant(builder, isSignificant);
        AirQuality.addPollutants(builder, pollutantsOffset);
        AirQuality.addPreviousDayComparison(builder, previousDayComparison);
        AirQuality.addPrimaryPollutant(builder, primaryPollutant);
        AirQuality.addScale(builder, scaleOffset);
        return AirQuality.endAirQuality(builder);
    }
}