const api = "http://localhost:8080/users";

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const userList = document.getElementById("list");
const loading = document.getElementById("loading");
const searchBox = document.getElementById("search");

let currentPage = 1;
const pageSize = 5;
let users = [];
let editId = null;

// LOAD USERS
function loadUsers() {
  loading.style.display = "block";

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      users = data;
      renderUsers(users);
      loading.style.display = "none";
    });
}

// SHOW USERS
function renderUsers(data) {
  userList.innerHTML = "";

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  const pageUsers = data.slice(start, end);

  pageUsers.forEach((u) => {
    userList.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <strong>${u.name}</strong><br />
          <small>${u.email}</small>
        </div>
        <div>
          <button 
            class="btn btn-warning btn-sm me-2" 
            onclick="editUser(${u.id}, '${u.name}', '${u.email}')">
            Edit
          </button>

          <button 
            class="btn btn-danger btn-sm" 
            onclick="deleteUser(${u.id})">
            Delete
          </button>
        </div>
      </li>
    `;
  });

  document.getElementById("pageNo").innerText = currentPage;
}

// SAVE / UPDATE
function saveUser() {
  if (!nameInput.value || !emailInput.value) {
    alert("Please fill all fields");
    return;
  }

  const user = {
    name: nameInput.value,
    email: emailInput.value,
  };

  if (editId === null) {
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(() => {
      alert("User saved successfully ✅");
      loadUsers();
    });
  } else {
    fetch(api + "/" + editId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(() => {
      editId = null;
      alert("User updated successfully ✅");
      loadUsers();
    });
  }

  nameInput.value = "";
  emailInput.value = "";
}

// EDIT
function editUser(id, name, email) {
  editId = id;
  nameInput.value = name;
  emailInput.value = email;
}

// DELETE
function deleteUser(id) {
  if (confirm("Are you sure to delete this user?")) {
    fetch(api + "/" + id, {
      method: "DELETE",
    }).then(() => {
      alert("User deleted ❌");
      loadUsers();
    });
  }
}

// SEARCH
function filterUsers() {
  const keyword = searchBox.value.toLowerCase();

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(keyword)
  );

  renderUsers(filtered);
}

// SORT A-Z
function sortUsers() {
  const sorted = [...users].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  renderUsers(sorted);
}

// PAGINATION
function nextPage() {
  if (currentPage * pageSize < users.length) {
    currentPage++;
    renderUsers(users);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderUsers(users);
  }
}

// FIRST LOAD
loadUsers();
