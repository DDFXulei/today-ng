import { UserprocessModule } from './userprocess.module';

describe('UserprocessModule', () => {
  let userprocessModule: UserprocessModule;

  beforeEach(() => {
    userprocessModule = new UserprocessModule();
  });

  it('should create an instance', () => {
    expect(userprocessModule).toBeTruthy();
  });
});
