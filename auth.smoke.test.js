const { login } = require("./auth");

test("Smoke Test - Login đúng với admin/123", () => {
    expect(login("admin", "123")).toBe(true);
});
