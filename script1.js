const filter = document.getElementById('filter');
const result = document.getElementById('result');
const ListItems = [];
getData();
filter.addEventListener('input',(e)=>filterData(e.target.value))

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50');
  const { results } = await res.json();
  
  results.forEach(user => {
    const li = document.createElement('li'); // Corrected typo here (createElement('li'))
    ListItems.push(li);

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;

   

    result.appendChild(li); // Changed from 'results' to 'result'
  });
 
}
function filterData(searchTerm){
    ListItems.forEach(item=>{
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase()))
        {item.classList.reove('hide')}
        else{item.classList.add('hide')}
    })
}
