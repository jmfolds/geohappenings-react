require("leaflet-css");
require("./map.scss");
import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
const basemap = 'https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam1mb2xkcyIsImEiOiI3M01kdUhrIn0.VWx8nUU1D0nQPT3OhNzMQA';
const stamenTonerAttr = '© <a href="https://www.mapbox.com/about/maps">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>';
const mapCenter = [38.8428, -105.0438];
const zoomLevel = 12;
export default class MapView extends Component {
    render() {
        return (
            <div className="map-container">
                <Map className=""
                    ref={m => { 
                        this.leafletMap = m; 
                        this.map = this.leafletMap.leafletElement;
                    }}
                    center={mapCenter}
                    zoom={zoomLevel}
                >
                    <TileLayer
                        attribution={stamenTonerAttr}
                        url={basemap}
                    />
                </Map>
            </div>
        );
    }
}
