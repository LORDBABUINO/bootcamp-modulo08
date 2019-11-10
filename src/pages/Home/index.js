import React, { useState } from 'react'

import { Container } from './styles'

export default function Home() {
  const [techs, setTechs] = useState(['ReactJS', 'React Native'])
  const [newTech, setNewTech] = useState([''])
  const handleAdd = () => {
    setTechs([...techs, newTech])
    setNewTech('')
  }

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
