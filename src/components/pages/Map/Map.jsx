import React from 'react';
import mapboxgl from 'mapbox-gl';

import { StyledMap } from './StyledMap';

mapboxgl.accessToken =
    'pk.eyJ1IjoiYWlkYXItMTAiLCJhIjoiY2s4cmJuOGhhMDFndzNkcnMwMDF5eGdqZiJ9.kWHRgUfAG7k2T-ZI3eu5aw';

class Map extends React.Component {
    mapContainer = React.createRef();

    componentDidMount() {
        new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [49.121, 55.787],
            zoom: 13,
        });
    }

    render() {
        return (
            <div data-testid="map">
                <div />
                <StyledMap ref={this.mapContainer} />
            </div>
        );
    }
}

export default Map;
