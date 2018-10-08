import { Popup } from './popup';
import { GoogleStreetViewPanorama } from './google-street-view-panorama';
import { ClusterStyle } from './style/cluster-style';
import { MarkerStyle } from './style/marker-style';
import { GeoCoderControl } from './control/geo-coder-control';
import { GeoCoderComponent } from './control/geo-coder-component';
declare let custom: {
    style: {
        MarkerStyle: typeof MarkerStyle;
        ClusterStyle: typeof ClusterStyle;
    };
    control: {
        GeoCoderControl: typeof GeoCoderControl;
        GeoCoderComponent: typeof GeoCoderComponent;
    };
    Popup: typeof Popup;
    GoogleStreetViewPanorama: typeof GoogleStreetViewPanorama;
};
export { custom };
