import { useState } from 'react'
import { ContextType, TodoType } from '../types'
import { useLocalStorage } from './useLocalstorage'

export const useStorageListener = (sincronize:ContextType['sincronize']) => {
  const [storageChange, setStorageChange] = useState(false)
  const [todo, setTodo] = useLocalStorage<TodoType[]>('TODOS_V1', [])

  window.addEventListener('storage', (change) => {
    if (change.key === 'TODOS_V1') {
      if (change.newValue) setTodo(JSON.parse(change.newValue))
      console.log('Hubo cambios en TODOS_V1')
      console.log(change)
      setStorageChange(true)
    }
  })

  const toggleShow = () => {
    sincronize(todo)
    setStorageChange(false)
  }

  return {
    show: storageChange,
    toggleShow
  }
}
