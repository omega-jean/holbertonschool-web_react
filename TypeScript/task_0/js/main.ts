// interface named Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// 2 students variables called student1 and student2
const student1: Student = {
    firstName: "Ethan",
    lastName: "David",
    age: 20,
    location: "Paris",
}

const student2: Student = {
    firstName: "Quentin",
    lastName: "Moreau",
    age: 18,
    location: "Lyon",
}


const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const headerRow = table.insertRow();

const firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
headerRow.appendChild(firstNameHeader);

const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
headerRow.appendChild(locationHeader);

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();
  
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
