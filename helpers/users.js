class User {
  constructor(data) {
    this._id = data.id;
    this._email = data.email;
    this._firstName = data.first_name;
    this._lastName = data.last_name;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
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

  get toJSON() {
    return {
      id: this.id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
    };
  }
}

module.exports = {
  User,
};
