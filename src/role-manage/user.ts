import { Role } from './role';

export class User {
  private _id: number;
  private _name: string;
  private roles: Set<Role>;

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
    this.roles = new Set();
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  addRole(role: Role): void {
    this.roles.add(role);
  }

  deleteRoleById(roleId: number): void | Role {
    let role!: Role;

    for (const ri of this.roles) {
      if (ri.id === roleId) {
        role = ri;
        break;
      }
    }

    if (role) {
      this.roles.delete(role);
      return role;
    }
  }

  getRoles(): Set<Role> {
    return this.roles;
  }
}
