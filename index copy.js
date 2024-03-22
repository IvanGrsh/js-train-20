// function User({ login = null, password = null, isAdmin = null, age = 0 }) {
function User(data) {
  //   console.log("new", new.target);

  if (new.target) {
    const { login = null, password = null, isAdmin = null, age = 0 } = data;

    // this.login = login;
    // this.password = password;
    // this.role = isAdmin ? "Admin" : "User";
    const role = isAdmin ? "Admin" : "User";
    const object = Object.assign(this, { login, password, role, age });

    // this.age = age;

    // this.verify = function (password) {
    //   return this.password === password;
    if (role === "Admin") {
      object.verify = function (password) {
        console.debug(password, this);
        return this.password === password;
      };
    }
    if (age >= 50) {
      object.login = String(object.login).toUpperCase();
    }

    object.toString = function () {
      return `Користувач ${this.login}`;
    };
    // const verify = function (password) {
    //   return this.password === password;
    // };
    return object;
  } else {
    return new User(data);
  }
}

// function UserAdmin({ login = null, password = null, isAdmin = null, age = 0 }) {
//   this.login = login;
//   this.password = password;
//   this.role = isAdmin ? "Admin" : "User";
//   this.age = age;

//   this.verify = function (password) {
//     return this.password === password;
//   };
// }

// const User = {
//   login: null,
//   password: null,
//   role: null,
//   age: null,
// };

// function CreateUser({ login, password, isAdmin }) {
//   return Object.create(User, {
//     login: {
//       value: login,
//     },
//     password: {
//       value: password,
//     },
//     role: {
//       value: isAdmin ? "Admin" : "User",
//     },
//     verify: {
//       value(password) {
//         return this.password === password;
//       },
//     },
//   });
// }
///=======================

const registerData = {
  login: "Ivan",
  password: "1qazxsw2",
  isAdmin: true,
};

User.prototype.test = "Hello World";

const user = User(registerData);

console.log(user.test);
console.log(user.toString());

// const user = createUser(registerData);

// user.verify = function (password) {
//   return this.password === password;
// };

// function userVerify(password) {
//   return this.password === password;
// }

// const user = Object.create(User, {
//   login: {
//     value: registerData.login,
//   },
//   password: {
//     value: registerData.password,
//   },
//   verify: {
//     value(password) {
//       return this.password === password;
//     },
//   },
// });

// user.login = registerData.login;

// console.log(user.login);
// console.log(user.password);
// console.log(user.verify("test"));

///=======================

const adminData = {
  login: "Ivan",
  password: "1qazxsw2",
  isAdmin: true,
};

const admin = User(adminData);
console.log(admin.password);
// const admin =  createUser(adminData);
// const adminUser = Object.create(User, {
//   login: {
//     value: registerData.login,
//   },
//   password: {
//     value: registerData.password,
//   },
//   role: {
//     value: adminData.isAdmin ? "Admin" : "User",
//   },
//   verify: {
//     value(password) {
//       return this.password === password;
//     },
//   },
// });

///=======================

const testData = {
  login: "Ivan",
  password: "1qazxsw2",
  age: 50,
};

const testUser = new User(testData);
// const testUser = createUser(testData);
console.log(testUser.login);

///=======================

console.log(testUser === User);
console.log(testUser.__proto__);
console.log(Object.getPrototypeOf(testUser) === User.prototype);
console.log(User.length);

console.log(User.name);
// const test = User;
// можно вписать test

///=======================

console.log("==============================================");
console.log(user.verify("1qazxsw2"));
const verifyUser = user.verify.bind(user, "1qazxsw2");
console.log(verifyUser());
// console.log(verifyUser.apply(user, ["1qazxsw2"]));

function Animal(name) {
  this.name = name;
}
const Person = function (name, age) {
  // function Person(name, age) {
  //   Animal.call(this, name);
  Animal.apply(this, [name]);
  this.age = age;
};

const user2 = new Person("Ivan", 32);
console.log(user2.name);
