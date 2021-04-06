/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl ="https://platzi-avo.vercel.app";
const appNode= document.querySelector('#app');
const formatPrice=(price)=>{
  const newPrice=new window.Intl.NumberFormat('en-EN', {
    style:"currency",
    currency:"USD"
  }).format(price);
  return newPrice;
}
//web api
//conecctarnos al server
window
.fetch(`${baseUrl}/api/avo`)
//procesar la respuesta y convertirla en JSON
.then((respuesta)=>respuesta.json())
//JSON -> Data -> renderizar info browser
.then((responseJson)=>{
  const  todosLosItems=[]

  responseJson.data.forEach(item => {
    //crear imagen
    const imagen=document.createElement("img");
    imagen.src=`${baseUrl}${item.image}`;
    imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
    //crear titulo
    const title=document.createElement("h2");
    title.textContent=item.name;
    title.className='text-2xl text-green-600';
    //crear precio
    const price=document.createElement("div");
    price.textContent=formatPrice(item.price);
    price.className='text-blue-600'

    const container= document.createElement('div')
    container.append(imagen,title,price);
    todosLosItems.push(container)
  });
  appNode.append(...todosLosItems);
});
