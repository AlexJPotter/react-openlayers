/// <reference types="react" />
/// <reference types="openlayers" />
import * as React from 'react';
import * as ol from 'openlayers';
export declare class MouseWheelZoom extends React.Component<any, any> {
    interaction: ol.interaction.MouseWheelZoom;
    options: any;
    events: any;
    constructor(props: any);
    render(): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
}
