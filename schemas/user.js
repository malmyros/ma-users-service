module.exports = class User {
  constructor(data) {
    this._userId = data.user_id;
    this._username = data.username;
    this._password = data.password;
    this._firstName = data.first_name;
    this._lastName = data.last_name;
    this._email = data.email;
    this._image = data.image;
    this._code = data.code;
    this._status = data.status;
    this._createdAt = data.created_at;
  }

  get userId() {
    return this._userId;
  }

  set userId(value) {
    this._userId = value;
  }

  get username() {
    return this._username;
  }

  set username(value) {
    this._username = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get image() {
    return this._image;
  }

  set image(value) {
    this._image = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(value) {
    this._createdAt = value;
  }

  get toJson() {
    return {
      userId: this.userId,
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      image: this.image,
      code: this.code,
      status: this.status,
      createdAt: this.created_at,
    };
  }
};
