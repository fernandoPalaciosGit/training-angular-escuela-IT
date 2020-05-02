export interface Users {
  [value: string]: any;

  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: number;
      longitude: number
    };
  };
  email: string;
  login: {
    username: string;
    password: string;
  };
  phone: number;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export interface ApiUsers {
  results: Users[];
  info: any;
}
