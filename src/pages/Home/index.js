import React, { useState, useEffect } from 'react'

import { Container } from './styles'

export default function Home() {
  const [techs, setTechs] = useState([])
  const [newTech, setNewTech] = useState([''])
  const handleAdd = () => {
    setTechs([...techs, newTech])
    setNewTech('')
  }
  useEffect(() => {
    const storageTechs = localStorage.getItem('techs')

    if (storageTechs) {
      setTechs(JSON.parse(storageTechs))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs))
  }, [techs])

  return (
    <>
      <Container>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </Container>
      <input
        type="text"
        onChange={({ target: { value } }) => setNewTech(value)}
        value={newTech}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  )
}
