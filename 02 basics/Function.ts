function demo(name: string) {
  return name.toUpperCase();
}
demo("sakkmask");

var loginUser = (
  uname: string,
  email: string,
  isPaid: boolean = false
): string => {
  console.log(uname);
  return uname;
};

loginUser("dsmjlnkl", "sadnjdk2", true);
