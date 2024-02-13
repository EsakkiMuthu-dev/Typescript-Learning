var _a;
var newUser = {
    _id: "sanjjk",
    name: "Demo",
    mail: "demo@gmail.com",
};
newUser.mail = "demo2@zoho.com";
// newUser._id="njzdsj"; // we are getting an exception
var roUser = {
    _id: "sanjjk",
    name: "Demo",
    mail: "demo@gmail.com",
    check: ["dsjnj", "dsnjj", "sdjkj"],
};
console.log(roUser);
(_a = roUser.check) === null || _a === void 0 ? void 0 : _a.pop();
console.log(roUser);
