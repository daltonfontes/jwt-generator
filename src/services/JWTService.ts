import { JWTInterface, TokenUserData } from "interfaces/JWTInterface ";
import * as jwt from 'jsonwebtoken';
import { generateRandomToken } from '../utils/generateSecretKeys';

export class JwtService implements JWTInterface {
    private secretsKey: string;

    constructor() {
        this.secretsKey = generateRandomToken();
    }

    generateUserToken(user: TokenUserData, deviceId: string, sessionKey: string, userKey: string, issuedAt: number, expiresIn: number = 3600): string {
        const payload = {
            id: user.id,
            login: user.login,
            sub: user.sub,
            deviceId,
            sessionKey,
            userKey,
            issuedAt,
        };

        return jwt.sign(payload, this.secretsKey, { expiresIn, algorithm: 'HS256', jwtid: deviceId });
    }

    async verify(token: string): Promise<boolean> {
        try {
            jwt.verify(token, this.secretsKey, { algorithms: ['HS256'] });
            return true;
        } catch (err) {
            console.error('Token inválido:', err);
            return false;
        }
    }

    decode(token: string): any {
        return jwt.decode(token);
    }
}
