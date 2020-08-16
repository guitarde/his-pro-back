

export class UserDTO {
  name: string;
  username: string;
  email: string;
  password: string;
  role: string;

  constructor(name: string, username: string,email: string,password: string,role: string ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this.name = name;
  }
}