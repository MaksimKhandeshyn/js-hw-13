const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];
const toggleUserState = (allUsers, userName) => {
  const promise = new Promise((resolve, reject) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName
        ? resolve(logger({ ...user, active: !user.active }))
        : reject(user)
    );
  });
  return promise;
};
const logger = (updatedUsers) => console.table(updatedUsers);
toggleUserState(users, "Ajax").then(logger);
toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
