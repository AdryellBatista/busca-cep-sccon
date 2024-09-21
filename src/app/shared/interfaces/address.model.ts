export interface AddressModel {
    id?: string;
    address?: string;
    zipcode?: string;
    date?: Date;
}

export interface AddressViaCepModel {
    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    regiao: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}