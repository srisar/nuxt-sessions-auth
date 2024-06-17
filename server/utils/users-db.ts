interface UserData {
   email: string;
   password: string;
   fullName: string;
   role: 'ADMIN' | 'CUSTOMER';
}

const USERS: UserData[] = [
   { email: 'dave@hello.com', password: 'password2', fullName: 'Dave Birla', role: 'ADMIN' },
   { email: 'kumar@hello.com', password: 'password2', fullName: 'Kumar Sanga', role: 'CUSTOMER' },
   { email: 'bala@hello.com', password: 'password2', fullName: 'Balakumaran S', role: 'CUSTOMER' },
];

export function findUser(email: string, password: string) {
   return USERS.find(user => user.email === email && user.password === password);
}
