var current_users = ['John', 'Alice', 'Bob', 'Charlie', 'David'];
var new_users = ['John', 'Samantha', 'Eric', 'ALICE', 'Frank'];
new_users.forEach(function (new_username) {
    var is_duplicate = current_users.some(function (current_username) {
        return current_username.toLowerCase() === new_username.toLowerCase();
    });
    if (is_duplicate) {
        console.log("The username '".concat(new_username, "' is not available. Please choose a different username."));
    }
    else {
        console.log("The username '".concat(new_username, "' is available."));
    }
});
