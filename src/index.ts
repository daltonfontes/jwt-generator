import { TokenUserData} from "interfaces/JWTInterface ";
import { JwtService } from './services/JWTService';
const jwtService = new JwtService();

const user: TokenUserData = {
    id: '123',
    login: 'userLogin',
    sub: 'userSubject'
};

const deviceId = 'device_001';
const sessionKey = 'session_key_example';
const userKey = 'user_key_example'; 
const issuedAt = Math.floor(Date.now() / 1000);

async function run() {
    
    const token = jwtService.generateUserToken(user, deviceId, sessionKey, userKey, issuedAt);
    console.log('Generated JWT:', token);

    const isValid = await jwtService.verify(token);
    console.log('Token is valid:', isValid);
    const decoded = jwtService.decode(token);
    console.log('Decoded token:', decoded);
}

run().catch(err => {
    console.error('Erro ao executar:', err);
});