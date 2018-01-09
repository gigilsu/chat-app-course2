const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    group = new Users();
    group.users = [{
      id:'1',
      name: 'Gigi',
      room:'Red Coin'
    }, {
      id: '2',
      name: 'Jason',
      room: 'Red Coin'
    }, {
      id: '3',
      name: 'Aiden',
      room: 'Odyssey'
    }];
  });

  it('should add new users', () => {
    var group = new Users();
    var user = {
      id: '223',
      name: 'Gigi',
      room: 'Cream'
    };
    var resUser = group.addUser(user.id, user.name, user.room);
    expect(group.users).toEqual([user]);
  });

  it ('should remove a user', () => {
    var userId = '3';
    var user = group.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(group.users.length).toBe(2);
  });

  it ('should not remove user', () => {
    var userId = '99';
    var user = group.removeUser(userId);
    expect(user).toBeFalsy();
    expect(group.users.length).toBe(3);
  });

  it ('should find user', () => {
    var userId = '2';
    var user = group.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it ('should not find user', () => {
    var userId = '99';
    var user = group.getUser(userId);

    expect(user).toBeFalsy();
  });

  it ('should return names for Red Coin', () => {
    var userList = group.getUserList('Red Coin');

    expect(userList).toEqual(['Gigi', 'Jason']);
  });

  it ('should return names for Odyssey', () => {
    var userList = group.getUserList('Odyssey');

    expect(userList).toEqual(['Aiden']);
  });

});
