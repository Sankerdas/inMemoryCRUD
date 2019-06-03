import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user-data';

export class UserData extends InMemoryDbService {
  createDb() {
    const users: User[] = [
      {id: 1, name: 'sanker', email: 's@g.com', contact: '987456311'},
      {id: 1, name: 'das', email: 'd@g.com', contact: '1234567899'}
    ];
    return {users};
  }
}
