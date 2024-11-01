export type TokenUserData = {
  id: string,
  login: string,
  sub: string
  scope?: any
};

export interface JWTInterface {
  generateUserToken: (user: TokenUserData, deviceId: string, sessionKey: string, userKey: string, issuedAt: number, expiresIn?: number) => any;
  verify: (token: string, userKey: string) => Promise<boolean>;
  decode: (token: string) => any;
}