/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url="https://platzi-avo.vercel.app/api/avo";

//web api
//conecctarnos al server
window
.fetch(url)
//procesar la respuesta y convertirla en JSON
.then((respuesta)=>respuesta.json())
//JSON -> Data -> renderizar info browser
.then((responseJson)=>{
  const  todosLosItems=[]

  responseJson.data.forEach(item => {
    //crear imagen
    const imagen=document.createElement("img");
    document.body.appendChild(imagen);
    //crear titulo
    const title=document.createElement("h2");
    document.body.appendChild(title);
    //crear precio
    const price=document.createElement("div");
    document.body.appendChild(price);

    const container= document.createElement('div')
    container.append(imagen,title,price);
    todosLosItems.push(container)
  });
  document.body.append(...todosLosItems);
});
