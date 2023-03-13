export default interface IUserService {
  login(email: string, password: string): Promise<string | undefined>;
  getRole(token: string | undefined): Promise<string | undefined>;
}
