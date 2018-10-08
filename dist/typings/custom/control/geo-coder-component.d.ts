/// <reference types="react" />
import * as React from 'react';
import { GeoCoderControl } from './geo-coder-control';
export declare class GeoCoderComponent extends React.Component<any, any> {
    control: GeoCoderControl;
    geoCoder: any;
    options: any;
    events: any;
    constructor(props: any);
    render(): JSX.Element;
    componentDidMount(): void;
}
