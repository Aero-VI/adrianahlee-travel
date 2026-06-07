// Geocode database for Adrianah's travel locations
const GEOCODE = {
  busStations: {},
  airports: {},
  ports: {
    'New Orleans':[29.9511,-90.0715],
    'Port of New Orleans':[29.9386,-90.0593],
    'Nassau':[25.048,-77.3554],
    'Ponta Delgada':[37.7483,-25.6666],
    'Funchal':[32.6669,-16.9241],
    'Malaga':[36.7213,-4.4214],
    'Alicante':[38.3452,-0.4815],
    'Barcelona':[41.3784,2.1699],
    'Port of Barcelona':[41.3784,2.1699]
  },
  trains: {
    'Bologna Centrale':[44.5058,11.3426],
    'Bologna':[44.4949,11.3426],
    'Imola Station':[44.3535,11.7141],
    'Imola':[44.3535,11.7141],
    'Forli Station':[44.1914,12.0493],
    'Forli':[44.1914,12.0493]
  },
  events: {},
  cities: {
    'New Orleans':[29.9511,-90.0715],
    'Nassau':[25.048,-77.3554],
    'Ponta Delgada':[37.7483,-25.6666],
    'Funchal':[32.6669,-16.9241],
    'Malaga':[36.7213,-4.4214],
    'Alicante':[38.3452,-0.4815],
    'Barcelona':[41.3874,2.1686],
    'Bologna':[44.4949,11.3426],
    'Imola':[44.3535,11.7141],
    'Forli':[44.1914,12.0493]
  }
};

function geocode(type, name, city, code) {
  if (type === 'Flight' && code && GEOCODE.airports[code]) return GEOCODE.airports[code];
  if (type === 'Cruise') {
    if (GEOCODE.ports[name]) return GEOCODE.ports[name];
    if (GEOCODE.ports[city]) return GEOCODE.ports[city];
  }
  if (type === 'Bus') {
    if (GEOCODE.busStations[name]) return GEOCODE.busStations[name];
    if (GEOCODE.busStations[city]) return GEOCODE.busStations[city];
  }
  if (type === 'Train') {
    if (GEOCODE.trains[name]) return GEOCODE.trains[name];
    if (GEOCODE.trains[city]) return GEOCODE.trains[city];
  }
  if (GEOCODE.cities[name]) return GEOCODE.cities[name];
  if (GEOCODE.cities[city]) return GEOCODE.cities[city];
  if (GEOCODE.ports[name]) return GEOCODE.ports[name];
  if (GEOCODE.ports[city]) return GEOCODE.ports[city];
  if (GEOCODE.events[city]) return GEOCODE.events[city];
  if (GEOCODE.events[name]) return GEOCODE.events[name];
  return null;
}
