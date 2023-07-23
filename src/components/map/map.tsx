import React, {ReactNode, useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import {CityProps} from '../../types/location';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import {OfferPreviewProps, OfferProps} from '../../types/offer-props';

interface MapProps {
  city: CityProps;
  offerList: (OfferPreviewProps | OfferProps)[];
  activeOffer: OfferPreviewProps | OfferProps | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({city, offerList, activeOffer}:MapProps):ReactNode {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offerList.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        if (activeOffer) {
          marker
            .setIcon(
              offer.id === activeOffer.id
                ? currentCustomIcon
                : defaultCustomIcon
            )
            .addTo(markerLayer);
        } else {
          marker
            .setIcon(defaultCustomIcon)
            .addTo(markerLayer);
        }
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offerList, activeOffer]);

  return <div style={{height: '100%'}} ref={mapRef} ></div>;
}

export default Map;
