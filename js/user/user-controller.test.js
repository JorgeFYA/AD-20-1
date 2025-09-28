const UserController = require('./user-controller');
const User = require('./user');

const userController = new UserController();

test('add user to userController', () => {
  let user = new User(1234, 'Santiago', 'santiago@generation.org');
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {
  let user = new User(1234, 'Santiago', 'santiago@generation.org');
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

describe('testing "findByEmail" function', () => {
  test('finding an existing user', () => {
    const paco = new User(73, 'Paco', 'paco@gmail.com');
    userController.add(paco);
    expect(userController.findByEmail('paco@gmail.com')).toBe(paco);
  });
  test('looking for a non-existing email', () => {
    expect(userController.findByEmail('paco2@gmail.com')).toBeUndefined();
  });
});

describe('testing "findById" function', () => {
  test('finding an existing user', () => {
    const john = new User(104, 'john', 'doe@email.com');
    userController.add(john);
    expect(userController.findById(104)).toBe(john);
  });
  test('looking for a non-existing user', () => {
    expect(userController.findById(74)).toBeUndefined();
  });
});
