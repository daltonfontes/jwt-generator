import { randomBytes } from 'node:crypto';

export function generateRandomToken(size: number = 64): string {
  return randomBytes(size / 2).toString('hex');
}
