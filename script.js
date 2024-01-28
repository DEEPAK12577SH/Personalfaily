const filter = document.getElementById('filter');
const result = document.getElementById('result');
const usersArray = [
  { name: 'Deepak Sharma',
    dob: '22/12/1999',
    aadhar: '498240360461',
    phone: '9934512577',
    image:'author.png',
    pdf: 'pdf-1'  },

    { name: 'DeepNarayan Sharma',
    dob: '1997-01-15',
    aadhar: '1234-5678-9101',
    phone: '555-1234',
    image:'author.png'  },

    { name: 'Rajendra Sharma',
    dob: '1997-01-15',
    aadhar: '1234-5678-9101',
    phone: '555-1234',
    image:'author.png'  },

    { name: 'Sumintra Devi',
    dob: '1997-01-15',
    aadhar: '1234-5678-9101',
    phone: '555-1234',
    image:'author.png'  },

    { name: 'sangita sharma',
    dob: '1997-01-15',
    aadhar: '1234-5678-9101',
    phone: '555-1234',
    image:'author.png'  },

    { name: 'Amrita Sharma',
    dob: '1997-01-15',
    aadhar: '1234-5678-9101',
    phone: '555-1234',
    image:'author.png'  },

    { name: 'Pratima Devi',
    dob: '1997-01-15',
    aadhar: '1234-5678-9101',
    phone: '555-1234',
    image:'author.png'  },

    { name: 'Sarita  Devi',
    dob: '1997-01-15',
    aadhar: '1234-5678-9101',
    phone: '555-1234',
    image:'author.png'  },

    { name: 'Geeta Kumari',
    dob: '1997-01-15',
    aadhar: '1234-5678-9101',
    phone: '555-1234',
    image:'author.png'  },

    { name: 'Bachhi Devi',
    dob: '1997-01-15',
    aadhar: '1234-5678-9101',
    phone: '555-1234',
    image:'author.png'  },

    { name: 'Sunaina Devi',
    dob: '1997-01-15',
    aadhar: '1234-5678-9101',
    phone: '555-1234',
    image:'author.png'  },

    { name: 'Madhu Kumari',
    dob: '1997-01-15',
    aadhar: '1234-5678-9101',
    phone: '555-1234',
    image:'author.png'  },

    { name: 'Reshma Kumari',
    dob: '1997-01-15',
    aadhar: '1234-5678-9101',
    phone: '555-1234',
    image:'author.png'  },

    { name: 'Jagdish Chandra Sharma',
    dob: '1997-01-15',
    aadhar: '1234-5678-9101',
    phone: '555-1234',
    image:'author.png'  },

  // Add more user objects as needed
];

getData();

filter.addEventListener('input',(e)=>filterData(e.target.value));

function getData() {
  result.innerHTML = ''; // Clear existing content

  usersArray.forEach(user => {
    const li = document.createElement('li');
    li.innerHTML = `
    <div class="picture-box">
    <img src="images/${user.image}".png alt="${user.name}">
    <a href="pdf-files/${user.pdf}.pdf" download  class="btn">Download >> </a>
    </div>
    
      <div class="user-info">
        <h3><span>${user.name} </span> </h3>
        <p>DOB: ${user.dob}</p>
        <p>Aadhar: ${user.aadhar}</p>
        <p>Phone: ${user.phone}</p>
      </div>
    `;

    result.appendChild(li);
  });
}
function filterData(searchTerm) {
    const filteredItems = usersArray.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    result.innerHTML = ''; // Clear existing content
  
    filteredItems.forEach(user => {
      appendUser(user);
    });
  }
  
  function appendUser(user) {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="picture-box">
        <img src="images/${user.image}" alt="${user.name}">
        <a href="pdf-files/${user.pdf}.pdf" download class="btn">Download >> </a>
      </div>
    
      <div class="user-info">
        <h3><span>${user.name}</span></h3>
        <p>DOB: ${user.dob}</p>
        <p>Aadhar: ${user.aadhar}</p>
        <p>Phone: ${user.phone}</p>
      </div>
    `;
  
    result.appendChild(li);
  }