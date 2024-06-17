export interface SessionUser {
   email: string;
   fullName: string;
   role: 'ADMIN' | 'CUSTOMER';
   token?: string;
}

export interface SessionPayload {
   user: SessionUser;
}
