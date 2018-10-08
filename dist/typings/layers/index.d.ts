import { Tile } from './tile';
import { Vector } from './vector';
import { Layers } from './layers';
import { Heatmap } from './heatmap';
import { Image } from './image';
import { VectorTile } from './vector-tile';
declare let layer: {
    Tile: typeof Tile;
    Vector: typeof Vector;
    Heatmap: typeof Heatmap;
    Image: typeof Image;
    VectorTile: typeof VectorTile;
};
export { Layers, layer, Heatmap, Image, VectorTile };
