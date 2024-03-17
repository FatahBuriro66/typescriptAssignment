// Array of usernames
let usernames: string[] = ['admin', 'alice', 'bob', 'charlie', 'david'];

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  usernames.forEach(username => {
    if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  });
}
