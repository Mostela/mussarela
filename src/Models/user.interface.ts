export interface IUser {
  name: string;
  senha: string;
  email: string;
  celular: string;
  endereco?: IEndereco
}

export interface IUserAuth {
  name: string;
  senha: string;
  email: string;
  token: string;
  celular: string;
  endereco: IEndereco
}

export interface IUserLogin {
  email: string;
  senha: string;
}

export interface IEndereco {
  logradouro: string;
  bairro: string;
  numero: string
  cidade: string;
  cep: string;
}