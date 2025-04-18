
document.querySelector('.btn-search').addEventListener('click', () => {
  let query = document.querySelector('.search').value;
  
  let index = query.search(" ");
  let str = setCharAt(query, index, '%20');

  getImage(str);
});

function getImage(query) {
  fetch(`https://pixabay.com/api/?key=36528586-15a90c6bc97ebafdaa24ba27f&q=${query}`)
  .then((response) => response.json())
  .then((data) => {
    for(let i = 0; i < data.hits.length; i++){ 
      let img = document.createElement('img');
      img.classList.add('img-container');
      img.src = data.hits[i].largeImageURL;

      document.querySelector('.output-container').appendChild(img);
    }
  });
}

function setCharAt(str, index, char){
  if(index > str.length) return str;

  return str.substring(0,  index) + char + str.substring(index+1);
}