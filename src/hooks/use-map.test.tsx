import { render, renderHook } from "@testing-library/react";
import { useRef } from "react";
import { makeFakeOffer } from "../utils/mocks/offer";
import useMap from "./use-map";

describe('Hook: useMap', () => {
  const {result} = renderHook(() => useRef(null));
  const mapRef = result.current;
  const city = makeFakeOffer().city;
  const MapEl = () => <div ref={result.current}></div>;

  render(<MapEl/>);

  it('should return map instance', () => {
    const { result } = renderHook(() => useMap(mapRef, city));
    console.log(result.current);

    expect(typeof result.current).toBe('object');
  });
});
