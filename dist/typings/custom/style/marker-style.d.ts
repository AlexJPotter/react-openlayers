/// <reference types="openlayers" />
import * as ol from 'openlayers';
export declare class MarkerStyle {
    src: string;
    constructor(src?: string);
    style: ol.style.Style;
    selectStyleFunction: (feature: any) => ol.style.Style;
}
