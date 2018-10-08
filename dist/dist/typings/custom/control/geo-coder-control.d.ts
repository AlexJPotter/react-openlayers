/// <reference types="openlayers" />
import * as ol from 'openlayers';
import { GeoCoder } from 'geo-coder';
import './geo-coder.css';
export declare class GeoCoderControl extends ol.control.Control {
    geoCoder: GeoCoder;
    eventListeners: any;
    expanded: boolean;
    buttonEl: HTMLButtonElement;
    autocompleteEl: HTMLDivElement;
    constructor(options?: {});
    on(eventName: string, listener: Function, option?: Object): any;
    locate: (options: any) => void;
    toggleExpand: () => void;
    getButtonHTML(): HTMLButtonElement;
    getAutocompleteHTML(): HTMLDivElement;
}
