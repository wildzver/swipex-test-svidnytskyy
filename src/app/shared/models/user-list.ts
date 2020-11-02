import {User} from './user';

export class UserList {
  public page: number;
  public per_page: number;
  public total: number;
  public total_pages: number;
  public data: User[];
}
