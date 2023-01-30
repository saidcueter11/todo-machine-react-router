import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalstorage'
import { TodoType, ContextType } from '../types'

export const useTodos = () => {
  const [todos, saveTodos] = useLocalStorage<TodoType[]>('TODOS_V1', [])
  const [sincronizeItem, setSincronizedItem] = useState(true)
  const [searchValue, setSearchValue] = useState<string>('')
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [loading, setLoading] = useState(true)

  let searchedTodos: TodoType[] = []

  if (!(searchValue.length >= 1)) searchedTodos = todos

  if (searchValue.length >= 1) {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.description?.toLowerCase()
      const searchText = searchValue.toLocaleLowerCase()

      return todoText?.includes(searchText)
    })
  }

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  const handleNewSearch = (newSearchValue: string): void => {
    setSearchValue(newSearchValue)
  }

  const toggleOpenModal = (isOpen: boolean): void => {
    setOpenModal(isOpen)
  }

  const toggleCompleteTodo = ({ id }: TodoType): void => {
    const index = todos.findIndex(todo => todo.id === id)
    const newTodos = [...todos]

    newTodos[index].completed = !newTodos[index].completed
    saveTodos(newTodos)
  }

  const deleteTodo = ({ id }: TodoType): void => {
    const index = todos.findIndex(todo => todo.id === id)
    const newTodos = [...todos]

    newTodos.splice(index, 1)
    saveTodos(newTodos)
  }

  const editTodo = ({ id, description }: TodoType) => {
    const index = todos.findIndex(todo => todo.id === id)
    const newTodos = [...todos]
    console.log({ newTodos })
    newTodos[index].description = description
    // saveTodos(newTodos)
  }

  const addTodo = (text: string) => {
    const newTodos = [...todos]
    newTodos.push({ completed: false, description: text, id: Date.now() })
    saveTodos(newTodos)
  }

  const sincronize = (todo: TodoType[]) => {
    saveTodos(todo)
    setLoading(true)
    setSincronizedItem(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setSincronizedItem(true)
    }, 2000)
  }, [sincronizeItem])

  const providerValues: ContextType = {
    error: false,
    loading,
    totalTodos,
    completedTodos,
    toggleCompleteTodo,
    deleteTodo,
    handleNewSearch,
    searchValue,
    searchedTodos,
    openModal,
    toggleOpenModal,
    addTodo,
    sincronize,
    editTodo
  }

  return (providerValues)
}
