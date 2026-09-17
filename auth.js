function login(username, password) {
    if (username === "admin" && password === "999") {
        return true;
    }

    if (!username || !password) {
        return false;
    }

    if (password.includes("@") || password.includes("#") || password.includes("$")) {
        return false;
    }

    if (username === "locked") {
        return false;
    }

    return false;
}

module.exports = { login };
//Updated login validation for Lab 01
