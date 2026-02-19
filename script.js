// script.js
let members = JSON.parse(localStorage.getItem('members')) || [];

function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

function showMemberForm() {
    const form = document.getElementById('memberForm');
    form.style.display = form.style.display === "none" ? "block" : "none";
}

function addMember() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const institution = document.getElementById('institution').value;
    members.push({ name, email, institution });
    localStorage.setItem('members', JSON.stringify(members));
    alert(`Member Added: ${name}, Email: ${email}`);
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('institution').value = '';
    showDirectory();
}

function showDirectory() {
    const directory = document.getElementById('directory');
    const memberList = document.getElementById('memberList');
    memberList.innerHTML = '';
    members.forEach(member => {
        const li = document.createElement('li');
        li.textContent = `${member.name} - ${member.email} (${member.institution})`;
        memberList.appendChild(li);
    });
    directory.style.display = 'block';
}

function searchMembers() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredMembers = members.filter(member => 
        member.name.toLowerCase().includes(searchInput) || 
        member.email.toLowerCase().includes(searchInput) || 
        member.institution.toLowerCase().includes(searchInput)
    );
    const memberList = document.getElementById('memberList');
    memberList.innerHTML = '';
    filteredMembers.forEach(member => {
        const li = document.createElement('li');
        li.textContent = `${member.name} - ${member.email} (${member.institution})`;
        memberList.appendChild(li);
    });
}


  
