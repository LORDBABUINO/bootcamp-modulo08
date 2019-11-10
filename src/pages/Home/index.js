import React, { useState, useEffect, useMemo } from 'react'

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

  const techSize = useMemo(() => techs.length, [techs])

  return (
    <>
      <Container>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </Container>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
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
