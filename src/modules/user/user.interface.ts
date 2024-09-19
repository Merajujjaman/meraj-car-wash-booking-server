// name: Full name of the user.
// email: Email address used for communication and login.
// password: Securely hashed password for authentication.
// phone: Contact phone number for notifications and updates.
// role: The role of the user, which can be one of the following: admin, user.
// address: Complete physical address for service delivery or correspondence

export type TUser = {
    name: string;
    email:string;
    password: string;
    phone: string;
    role: "admin" | "user";
    address: string
}