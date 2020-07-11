
 async function loadData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
 // displayData(data);
  return data;
 }

 loadData().then(data => {
     displayData(data);
 });
 //loadData();

  function displayData(data){
      const parentNode = document.getElementById("myList");
      for (let i = 0; i < data.length; i++) {
          const user = data[i];
          const item = document.createElement("lI");
          item.innerText = user.name;
          parentNode.appendChild(item);
      }
  }