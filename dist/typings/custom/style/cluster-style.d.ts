/// <reference types="openlayers" />
import * as ol from 'openlayers';
export declare class ClusterStyle {
    maxFeatureCount: number;
    currentResolution: any;
    source: ol.source.Vector;
    constructor(vectorSource: ol.source.Vector);
    vectorStyleFunction: (feature: any, resolution: any) => any;
    selectStyleFunction: (feature: any) => ol.style.Style[];
    private calculateClusterInfo(resolution);
    private createClusterStyle(feature);
}
