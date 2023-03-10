export default interface IUserService {
  login(email: string, password: string): Promise<string | undefined>;
  getRole(email: string): Promise<string | void>;
}
