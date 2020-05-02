import React from 'react';
import { connect } from 'react-redux';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

import Header from '../../Header';
import { drawRoute } from './DrawRoute';

import OrderTaxiForm from '../../OrderTaxiForm';

import { StyledMap } from './StyledMap';
import { clearRoute } from '../../../modules/Routes/actions';

class Map extends React.Component {
    map = null;

    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken =
            'pk.eyJ1IjoiYWlkYXItMTAiLCJhIjoiY2s4cmJuOGhhMDFndzNkcnMwMDF5eGdqZiJ9.kWHRgUfAG7k2T-ZI3eu5aw';
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [30.2656504, 59.8029126],
            zoom: 15,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.map.getLayer('route')) {
            this.map.removeLayer('route');
            this.map.removeSource('route');
        }
        drawRoute(this.map, this.props.coords);
    }

    componentWillUnmount() {
        this.map.remove();
        this.props.clearRoute();
    }

    render() {
        return (
            <>
                <Header />
                <div data-testid="map">
                    <StyledMap ref={this.mapContainer} />
                    <OrderTaxiForm />
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    cardInfo: state.card,
    coords: state.route.coords,
});

export default connect(mapStateToProps, { clearRoute })(Map);
