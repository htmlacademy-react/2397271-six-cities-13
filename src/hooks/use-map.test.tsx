import { render, renderHook } from '@testing-library/react';
import { useRef } from 'react';
import { makeFakeOffer } from '../utils/mocks/offer';
import useMap from './use-map';

describe('Hook: useMap', () => {
  const getMapRef = () => {
    const {result} = renderHook(() => useRef(null));
    return result.current;
  };
  const mapRef = getMapRef();
  const city = makeFakeOffer().city;
  const MapElement = () => <div ref={mapRef}></div>;

  render(<MapElement/>);

  it('should return map instance', () => {
    const { result } = renderHook(() => useMap(mapRef, city));

    expect(typeof result.current).toBe('object');
  });
});
