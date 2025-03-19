export type FormData = {
  email: string;
  password: string;
  userName: string;
  city: string;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  userName: string;
  city: string;
  email: string;
  level: string;
  password: string;
};

export type Complex = {
  id: number;
  name: string;
  city: string;
  distance: number;
  isFavorite: boolean;
};
export type CardComplexProps = {
  item: Complex;
  toggleFavorite: (id: number) => void;
};
