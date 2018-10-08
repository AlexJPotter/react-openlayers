/// <reference types="react" />
/// <reference types="openlayers" />
import * as React from 'react';
import * as ol from 'openlayers';
export declare class Zoom extends React.Component<any, any> {
    control: ol.control.Zoom;
    options: any;
    events: any;
    constructor(props: any);
    render(): any;
    componentDidMount(): void;
}
