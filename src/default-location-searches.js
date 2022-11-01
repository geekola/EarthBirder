import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.


const defaultLocations = [
  {
    id: 'default-tucson',
    predictionPlace: {
      address: 'Tucson, Arizona, United States',
      bounds: new LatLngBounds(new LatLng(32.580464, -110.597399), new LatLng(31.561131, -111.651601)),
    },
  },
  {
    id: 'default-tornoto',
    predictionPlace: {
      address: 'Toronto, Ontario, Canada',
      bounds: new LatLngBounds(new LatLng(43.855465974, -79.11552021), new LatLng(43.581071012, -79.639302909)),
    },
  },
  {
    id: 'default-berlin',
    predictionPlace: {
      address: 'Berlin, Germany',
      bounds: new LatLngBounds(new LatLng(52.675502098, 13.761131097), new LatLng(52.338260903, 13.088359904)),
    },
  },
  {
    id: 'default-amsterdam',
    predictionPlace: {
      address: 'Amsterdam, North Holland, Netherlands',
      bounds: new LatLngBounds(new LatLng(52.430679, 5.068426), new LatLng(52.318248, 4.728759)),
    },
  },
  {
    id: 'default-sanJose',
    predictionPlace: {
      address: 'San José, Costa Rica',
      bounds: new LatLngBounds(new LatLng(10.187893096, -83.4297279), new LatLng(9.075026902, -84.59451409)),
    },
  },
];
export default defaultLocations;
