let usernames: string[] = ['admin', 'alice', 'bob', 'charlie', 'david'];

usernames.forEach(username => {
  if (username === 'admin') {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
});
