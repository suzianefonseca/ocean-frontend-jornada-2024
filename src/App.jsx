import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { useEffect } from 'react'

function App() {
  // carregamento de dados direto via código
// const item1 = {
//   name: 'Rick Sanchez',
//   image:'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
// }

// const item2 = {
//   name: 'Morty Smith',
//   image:'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
// }

// const item3 = {
//   name: 'Summer smith',
//   image:'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
// }

// const item4 = {
//   name: 'Beth smith',
//   image:'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
// }

//   const itens = [item1, item2, item3, item4 ]

const [itens, setItens] = useState([])

  //carregamento de dados via API (backend)
async function carregarDadosApi() {
  //declarar a URL da API
  const apiURL = 'https://rickandmortyapi.com/api/character/'

  //preparar  E EXECULTAR a requisição
  const response = await fetch(apiURL)

  //console.log(response)

  const body = await response.json()

  //console.log(body)

  // extrair a propriedade results do body
  // essa propriedade contem a lista de itens
  const results = body.results

  console.log(results)

  //atualiza o estado "itens" com  os  resultados da API
  setItens(results)
 } 

 useEffect(function () {

// chamando a função que carrega dados da API
carregarDadosApi()
 }, [])



  return (
    <>
    <div className="cards">
      {/* <Card  item={item1}/>
      <Card  item={item2}/>
      <Card  item={item3}/> */}
      {itens.map((item, i) => <Card item={item} key={i} />)}
    </div>
    </>
  )
}

export default App
