export type AuthData = {
  email: string;
  password: string;
};

export type UserData = {
  id: number;
  token: string;
  name: string;
  email: string;
  isPro: boolean;
  avatarUrl: string;
};
