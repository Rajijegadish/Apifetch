fetch('https://fakestoreapi.com/products').then((data)=>{
    //console.log(data);
    return data.json();
}).then((completedata)=>{
    // console.log(completedata[2].title);
    // document.getElementById('root').innerHTML=completedata[2].title;
    let data1="";
    completedata.map((values)=>{
         data1 +=` <div class="row">
         <div class="col-lg-4 mb-3 d-flex align-items-stretch">
         <div class="card ">
            <h1 class="title">${values.title}</h1>
            <img  class="image"src=${values.image} alt="image">
            <p>${values.description}</p>
            <p class="category">${values.Category}</p>
            <p class="price">${values.price}</p>
        </div>
        </div>
        </div>
    </div>`
    })
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log('err');
})