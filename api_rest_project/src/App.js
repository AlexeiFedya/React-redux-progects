import React from 'react'; // no react

const getResource = async (url) => {
  const res = await fetch(url);
  if(!res.ok) { // вторая 
    throw new Error(`could not fetch ${url}`)
  }

  const body = await res.json();
  return (
    body
  )
}
getResource('https://swapi.co/api/people/1/')
  .then ((body)=>{
    console.log(body)
  })

  .catch((err) =>{ // первый тип 
    console.error('could not fetch', err)
  })
// два типа ошибок серверные (сервер лег или не ответи ...) проми будет реджектет
// второй тип ошибок который отправляет нам сервер (пример персонажа с этим id нет )
export default App;
