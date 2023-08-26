export type AuthData = {
  email: string;
  password: string;
};

export type User = {
  email: string;
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

export interface UserData extends User {
  id: number;
  token: string;
}

