import { useState } from 'react'

export function useLocalStorage <T> (itemName:string, initialValue:T) {
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem: T

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem)

  const saveItem = (newTodos:T) => {
    const stringifiedTodos = JSON.stringify(newTodos)
    localStorage.setItem(itemName, stringifiedTodos)
    setItem(newTodos)
  }
  const returnValue: [T, (newTodos:T) => void] = [item, saveItem]

  return returnValue
}
