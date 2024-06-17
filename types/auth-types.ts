export interface SessionUser {
   email: string;
   fullName: string;
   role: 'ADMIN' | 'CUSTOMER';
}

export interface SessionPayload {
   user: SessionUser;
}
