export interface feedback {
    firstname: string;
    lastname: string;
    telnum: number;
    email: string;
    agree: boolean;
    conacttype: string;
    message: string;
};

export const ContactType = ['None', 'Tel', 'Email'];