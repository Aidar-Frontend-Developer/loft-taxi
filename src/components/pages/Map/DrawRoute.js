export const drawRoute = (map, coordinates) => {
    if (coordinates.length > 0) {
        map.flyTo({
            center: coordinates[0],
            zoom: 15,
        });
        map.addLayer({
            id: 'route',
            type: 'line',
            source: {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates,
                    },
                },
            },
            layout: {
                'line-join': 'round',
                'line-cap': 'round',
            },
            paint: {
                'line-color': '#ffc617',
                'line-width': 8,
            },
        });
    } else if (map.getLayer('route') !== undefined) {
        this.map.removeLayer('route');
        this.map.removeSource('route');
    }
};
