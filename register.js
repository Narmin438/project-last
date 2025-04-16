document.querySelector(".register-form").addEventListener("submit", (e) => {
    e.preventDefault(); 

    const password = document.querySelector("#password").value;

    const passwordRules = [
        { regex: /.{8,}/, message: "At least 8 characters" },
        { regex: /[A-Z]/, message: "At least 1 uppercase letter" },
        { regex: /[a-z]/, message: "At least 1 lowercase letter" },
        { regex: /[0-9]/, message: "At least 1 number" },
        { regex: /[!@#$%^&*]/, message: "At least 1 special character (!@#$%^&*)" },
    ];

    const failedRules = passwordRules.filter(rule => !rule.regex.test(password));

    if (failedRules.length > 0) {
        alert("Password doğru deyil:\n" + failedRules.map(rule => rule.message).join("\n"));
    } else {
        alert("Qeydiyyatdan keçdiniz!");
    }
});