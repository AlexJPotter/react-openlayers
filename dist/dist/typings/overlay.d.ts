/// <reference types="react" />
/// <reference types="openlayers" />
import * as React from 'react';
import * as ol from 'openlayers';
export declare class Overlay extends React.Component<any, any> {
    overlay: ol.Overlay;
    el: HTMLElement;
    options: any;
    events: any;
    render(): JSX.Element;
    componentDidMount(): void;
}
