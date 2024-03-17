function describe_city(city, country) {
    if (country === void 0) { country = "USA"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi", "Pakistan");
describe_city("New York", "America");
describe_city("London", "United Kingdom");
