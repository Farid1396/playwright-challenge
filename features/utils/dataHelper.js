import fs from 'fs';
import path from 'path';

const dataPath = path.resolve('features/data/users.json');
const users = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

export function getUser(userType) {
  if (!users[userType]) {
    throw new Error(`User type '${userType}' not found in users.json`);
  }
  return users[userType];
}
