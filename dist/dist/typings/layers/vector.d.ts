/// <reference types="react" />
/// <reference types="openlayers" />
import * as React from 'react';
import * as ol from 'openlayers';
export declare class Vector extends React.Component<any, any> {
    layer: ol.layer.Vector;
    options: any;
    events: any;
    constructor(props: any);
    render(): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
}
