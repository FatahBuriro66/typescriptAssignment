let current_users: string[] = ['John', 'Alice', 'Bob', 'Charlie', 'David'];

let new_users: string[] = ['John', 'Samantha', 'Eric', 'ALICE', 'Frank'];

new_users.forEach(new_username => {
  let is_duplicate = current_users.some(current_username =>
    current_username.toLowerCase() === new_username.toLowerCase()
  );

  if (is_duplicate) {
    console.log(`The username '${new_username}' is not available. Please choose a different username.`);
  } else {
    console.log(`The username '${new_username}' is available.`);
  }
});
