const loadUniverse = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data =>displayTools(data.data.tools))
} 

const displayTools = tools =>{
    // console.log(tools);
    const toolsContainer = document.getElementById('tools-container');
    tools.forEach(tools =>{
        console.log(tools)
        const toolsDiv = document.createElement('div')
        toolsDiv.classList.add('col');
        toolsDiv.innerHTML = `
        <div class="card h-100">
        <img src="${tools.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>
          <p class="card-text"> 1.Natural language processing <br> 2.Contextual understanding <br> 3.Text generation
          </p>
        </div>
        <div class="card-footer">
        <small class="text-body-secondary"><h5>${tools.name}</h5></small>
        <small class="text-body-secondary">${tools.published_in}</small>
        </div>
      </div>
        
        `
        toolsContainer.appendChild(toolsDiv);

    })
}

loadUniverse();