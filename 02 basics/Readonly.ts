type User = {
  readonly _id: string;
  name: string;
  mail: string;
  readonly check?: ReadonlyArray<string>;
};

let newUser: User = {
  _id: "sanjjk",
  name: "Demo",
  mail: "demo@gmail.com",
};

newUser.mail = "demo2@zoho.com";
// newUser._id="njzdsj"; // we are getting an exception

var roUser: User = {
  _id: "sanjjk",
  name: "Demo",
  mail: "demo@gmail.com",
  check: ["dsjnj", "dsnjj", "sdjkj"],
};

console.log(roUser);
roUser.check?.pop();
console.log(roUser);
