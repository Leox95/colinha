import { FaGithub, FaPlus, FaBars, FaTrash} from 'react-icons/fa'
import {Container, Form, SubmitButton, List, DeleteButton} from './styles'
import {useState, useCallback, useEffect} from 'react'
import api from '../../services/api'


function Main() {

    const [novoRepositorio, setNovoRepositorio] = useState('')
    const [repositorio, setRepositorio] = useState([])

      //buscar em local storage
      useEffect(()=>{
        const repoStorage = localStorage.getItem('repos')
          setRepositorio(JSON.parse(repoStorage))
      },[])
  
    //salvar em local storage
    useEffect(()=>{
      localStorage.setItem('repos', JSON.stringify(repositorio))
    },[repositorio])


    function handleInputRepo(e){
      setNovoRepositorio(e.target.value)
    }
    async function handleSubmit(e){
      e.preventDefault()
      if( novoRepositorio === ''){
        alert('A busca de repositório está vazia, digite algum repositório')
      }
      const response = await api.get(`repos/${novoRepositorio}`)
     
      const data = {
        name: response.data.full_name,
      }

      setRepositorio([...repositorio, data])
      setNovoRepositorio('')

    }

    const handleDelete = useCallback( (repo) =>{
      const find = repositorio.filter(r => r.name !== repo)
      setRepositorio(find)
    }, [repositorio])

    return (
      <Container>
        <h1>
          <FaGithub size={25}/>
          Colinha Pessoal de Repositórios
        </h1>
        <Form onSubmit={handleSubmit}>
          <input 
          type="text" 
          placeholder="Adicionar Autor/repositório ex: facebook/react"
          value={novoRepositorio}
          onChange={handleInputRepo}/>
          
          <SubmitButton>
            <FaPlus color="#FFF" size={14}/>
          </SubmitButton>
        </Form>
        <List>
          {repositorio.map((repo =>
            <li key={repo.name}>
                <span>
                  <DeleteButton onClick={() => handleDelete(repo.name)}>
                    <FaTrash size={14}/>
                  </DeleteButton>
                  {repo.name}
                  </span>
                <a href={`https://github.com/${repo.name}`}>
                <FaBars color="#8b0000" size={20}/>
                </a>
            </li>
            ))}
        </List>

      </Container>
      
    );
  }
  
  export default Main;