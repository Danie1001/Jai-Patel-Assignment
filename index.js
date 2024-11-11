let data = [];

function showForm() {
    document.getElementById("addNewBtn").style.display = "none";
    document.getElementById("formContainer").style.display = "block";
}

function cancelForm() {
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("addNewBtn").style.display = "block";
    clearForm();
}

function clearForm() {
    document.getElementById("userForm").reset();
}

function saveData() {
    const name = document.getElementById("name").value.trim();
    const designation = document.getElementById("designation").value.trim();
    const joiningDate = document.getElementById("joiningDate").value.trim();
    const age = document.getElementById("age").value.trim();

    if (!name || !designation || !joiningDate || !age) {
        alert("Please fill in all fields.");
        return;
    }

    data.push({ name, designation, joiningDate, age });
    renderTable();

    clearForm();
    cancelForm();
}

function renderTable() {
    const tbody = document.getElementById("newData");
    tbody.innerHTML = "";

    data.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.designation}</td>
            <td>${item.joiningDate}</td>
            <td>${item.age}</td>
            <td><button class="btn btn-danger btn-sm" onclick="deleteRow(${index})">Delete</button></td>
        `;
        tbody.appendChild(row);
    });
}

function deleteRow(index) {
    data.splice(index, 1);
    renderTable();
}
