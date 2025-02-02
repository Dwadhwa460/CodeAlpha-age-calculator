function calculateAge() {
    const dobInput = document.getElementById("dob").value;

    if (dobInput) {
        const dob = new Date(dobInput);
        const today = new Date();

        let age = today.getFullYear() - dob.getFullYear();
        let month = today.getMonth() - dob.getMonth();
        let day = today.getDate() - dob.getDate();

        if (month < 0 || (month === 0 && day < 0)) {
            age--;
            month += 12;
        }

        if (day < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
            day += lastMonth.getDate();
            month--;
        }

        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `Your Age: ${age} years, ${month} months, and ${day} days.`;
    } else {
        alert("Please select a valid date of birth.");
    }
}
