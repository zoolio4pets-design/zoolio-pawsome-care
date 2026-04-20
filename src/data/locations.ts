// Curated South African suburbs/cities for autosuggest.
// Keep concise — covers major metros + popular suburbs.

export interface SaLocation {
  suburb: string;
  city: string;
  province: string;
  // Approx lat/lng for the map.
  lat: number;
  lng: number;
}

export const SA_LOCATIONS: SaLocation[] = [
  // Cape Town
  { suburb: "Cape Town CBD", city: "Cape Town", province: "Western Cape", lat: -33.9249, lng: 18.4241 },
  { suburb: "Sea Point", city: "Cape Town", province: "Western Cape", lat: -33.9213, lng: 18.3839 },
  { suburb: "Camps Bay", city: "Cape Town", province: "Western Cape", lat: -33.9505, lng: 18.3776 },
  { suburb: "Constantia", city: "Cape Town", province: "Western Cape", lat: -34.0264, lng: 18.4310 },
  { suburb: "Newlands", city: "Cape Town", province: "Western Cape", lat: -33.9783, lng: 18.4513 },
  { suburb: "Claremont", city: "Cape Town", province: "Western Cape", lat: -33.9858, lng: 18.4659 },
  { suburb: "Rondebosch", city: "Cape Town", province: "Western Cape", lat: -33.9628, lng: 18.4750 },
  { suburb: "Observatory", city: "Cape Town", province: "Western Cape", lat: -33.9389, lng: 18.4732 },
  { suburb: "Green Point", city: "Cape Town", province: "Western Cape", lat: -33.9059, lng: 18.4042 },
  { suburb: "Hout Bay", city: "Cape Town", province: "Western Cape", lat: -34.0479, lng: 18.3565 },
  { suburb: "Stellenbosch", city: "Stellenbosch", province: "Western Cape", lat: -33.9321, lng: 18.8602 },
  { suburb: "Somerset West", city: "Cape Town", province: "Western Cape", lat: -34.0833, lng: 18.85 },
  { suburb: "Paarl", city: "Paarl", province: "Western Cape", lat: -33.7274, lng: 18.9560 },

  // Johannesburg
  { suburb: "Sandton", city: "Johannesburg", province: "Gauteng", lat: -26.1076, lng: 28.0567 },
  { suburb: "Rosebank", city: "Johannesburg", province: "Gauteng", lat: -26.1467, lng: 28.0436 },
  { suburb: "Melville", city: "Johannesburg", province: "Gauteng", lat: -26.1773, lng: 28.0080 },
  { suburb: "Parkhurst", city: "Johannesburg", province: "Gauteng", lat: -26.1395, lng: 28.0156 },
  { suburb: "Bryanston", city: "Johannesburg", province: "Gauteng", lat: -26.0521, lng: 28.0205 },
  { suburb: "Fourways", city: "Johannesburg", province: "Gauteng", lat: -26.0166, lng: 28.0137 },
  { suburb: "Randburg", city: "Johannesburg", province: "Gauteng", lat: -26.0936, lng: 27.9756 },
  { suburb: "Greenside", city: "Johannesburg", province: "Gauteng", lat: -26.1488, lng: 28.0042 },
  { suburb: "Linden", city: "Johannesburg", province: "Gauteng", lat: -26.1410, lng: 27.9996 },
  { suburb: "Edenvale", city: "Johannesburg", province: "Gauteng", lat: -26.1416, lng: 28.1565 },

  // Pretoria
  { suburb: "Pretoria East", city: "Pretoria", province: "Gauteng", lat: -25.7891, lng: 28.2945 },
  { suburb: "Brooklyn", city: "Pretoria", province: "Gauteng", lat: -25.7691, lng: 28.2390 },
  { suburb: "Menlyn", city: "Pretoria", province: "Gauteng", lat: -25.7826, lng: 28.2761 },
  { suburb: "Centurion", city: "Pretoria", province: "Gauteng", lat: -25.8603, lng: 28.1894 },
  { suburb: "Hatfield", city: "Pretoria", province: "Gauteng", lat: -25.7479, lng: 28.2370 },

  // Durban / KZN
  { suburb: "Durban North", city: "Durban", province: "KwaZulu-Natal", lat: -29.7833, lng: 31.0500 },
  { suburb: "Umhlanga", city: "Durban", province: "KwaZulu-Natal", lat: -29.7256, lng: 31.0856 },
  { suburb: "Berea", city: "Durban", province: "KwaZulu-Natal", lat: -29.8388, lng: 31.0094 },
  { suburb: "Ballito", city: "Ballito", province: "KwaZulu-Natal", lat: -29.5394, lng: 31.2117 },
  { suburb: "Hillcrest", city: "Durban", province: "KwaZulu-Natal", lat: -29.7775, lng: 30.7594 },
  { suburb: "Pietermaritzburg", city: "Pietermaritzburg", province: "KwaZulu-Natal", lat: -29.6006, lng: 30.3794 },

  // Eastern Cape
  { suburb: "Port Elizabeth Central", city: "Gqeberha", province: "Eastern Cape", lat: -33.9608, lng: 25.6022 },
  { suburb: "East London", city: "East London", province: "Eastern Cape", lat: -33.0153, lng: 27.9116 },

  // Other
  { suburb: "Bloemfontein Central", city: "Bloemfontein", province: "Free State", lat: -29.0852, lng: 26.1596 },
  { suburb: "George", city: "George", province: "Western Cape", lat: -33.9628, lng: 22.4617 },
  { suburb: "Knysna", city: "Knysna", province: "Western Cape", lat: -34.0363, lng: 23.0471 },
];

export const POPULAR_LOCATIONS = ["Cape Town CBD", "Sandton", "Durban North", "Stellenbosch", "Pretoria East"];

export const findLocation = (q: string): SaLocation | undefined =>
  SA_LOCATIONS.find((l) => `${l.suburb}, ${l.city}`.toLowerCase() === q.toLowerCase()) ||
  SA_LOCATIONS.find((l) => l.suburb.toLowerCase() === q.toLowerCase());
