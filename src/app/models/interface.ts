export interface User {
    name?: string;
    lastname?: string;
    email?: string;
    phone?: string;
    type_dni?: string;
    dni?: string;
    states_id?: string;
    cities_id?: string;
    municipalities_id?: string;
    parishes_id?: string;
    address?: string;
    password?: string;
}

export interface UserUpdate {
    name?: string;
    lastname?: string;
    email?: string;
    phone?: string;
    type_dni?: string;
    dni?: string;
    address?: string;
    // id?: string;
}
