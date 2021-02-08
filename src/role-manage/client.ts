import { Role } from './role';
import { User } from './user';
import { Ref } from './ref';

const user = new User(1, 'a1');

const role1 = new Role(1, '增');
const role2 = new Role(2, '删');
const role3 = new Role(3, '改');
const role4 = new Role(4, '查');

user.addRole(role1);
user.addRole(role2);
user.addRole(role3);
user.addRole(role4);

console.log(user.getRoles());

user.deleteRoleById(1);

console.log(user.getRoles());

const ref = new Ref<number>(1, () => {
  console.log('ref', ref.value);
});

ref.value = 2;
