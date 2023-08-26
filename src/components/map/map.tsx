import {ReactNode, useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import {CityType} from '../../types/location';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import {OfferPreviewType, OfferType} from '../../types/offer';

interface MapProps {
  city: CityType;
  offerList: (OfferPreviewType | OfferType)[];
  activeOffer: OfferPreviewType | OfferType | null;
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

function Map({city, offerList, activeOffer}:MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    let isMounted = true;

    if (map && isMounted) {
      const markerLayer = layerGroup().addTo(map);
      offerList.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeOffer && offer.id === activeOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };

      return () => {
        isMounted = false;
      };
    }
  }, [map, offerList, activeOffer]);

  return <div style={{height: '100%'}} ref={mapRef} ></div>;
}

export default Map;
