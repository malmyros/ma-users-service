module.exports = class UserGroup {
  constructor(data) {
    this._userGroupId = data.user_group_id;
    this._name = data.name;
    this._permission = data.permission;
  }

  get userGroupId() {
    return this._userGroupId;
  }

  set userGroupId(value) {
    this._userGroupId = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get permission() {
    return this._permission;
  }

  set permission(value) {
    this._permission = value;
  }

  get toJSON() {
    return {
      userGroupId: this.userGroupId,
      name: this.name,
      permission: this.permission,
    };
  }
};
