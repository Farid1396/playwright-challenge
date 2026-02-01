import users from '../data/users.json' assert { type: 'json' };

export function getUser(userType) {
  if (!users[userType]) {
    throw new Error(`User type '${userType}' not found in users.json`);
  }
  return users[userType];
}
