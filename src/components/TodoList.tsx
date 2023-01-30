import React from 'react'
import { TodoType } from '../types'

interface TodoListProps extends TodoType {
  loading: boolean
  searchedTodos:TodoType[]
  totalTodos:number
  searchValue: string
  onEmptySearch: (text:string) => void
  onLoading: () => void
  onEmpty: () => void
  render: (todo:TodoType, index:number) => void
}

export const TodoList = ({ loading, totalTodos, onLoading, searchedTodos, onEmpty, render, onEmptySearch, searchValue }:TodoListProps) => {
  return (
    <ul className='w-full h-full flex flex-col gap-4 border-collapse'>
      <>
        {loading && onLoading()}
        {(!loading && !totalTodos) && onEmpty()}
        {(!!totalTodos && !searchedTodos.length) && onEmptySearch(searchValue)}
        {!loading && searchedTodos.map(render)}
      </>
    </ul>
  )
}
