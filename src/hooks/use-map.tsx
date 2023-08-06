import {useEffect, useState, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import {CityType} from '../types/location';
import {LAYER_ATTRIBUTION, MAP_LAYER_URL} from '../const';

function useMap(
  mapRef: React.MutableRefObject<null>,
  city: CityType
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      });
      const layer = new TileLayer(
        MAP_LAYER_URL,
        {
          attribution: LAYER_ATTRIBUTION
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    } else if (map) {
      map.setView({
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      city.location.zoom);
    }
  }, [mapRef, city, map]);

  return map;
}

export default useMap;
