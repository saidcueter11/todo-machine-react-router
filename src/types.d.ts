import React from 'react'

export interface TodoType {
    id?: number
    description?: string
    completed?: boolean
    children?: React.ReactNode
}

export interface ContextType {
    totalTodos: number
    completedTodos: number
    searchValue: string
    error: boolean
    loading: boolean
    openModal: boolean
    searchedTodos: TodoType[]
    handleNewSearch: (todo: string) => void
    toggleCompleteTodo: (todo: TodoType) => void
    deleteTodo: (todo: TodoType) => void
    toggleOpenModal: (todo: boolean) => void
    addTodo: (todo: string) => void
    editTodo: (todo: TodoType) => void
    sincronize: (todo: TodoType[]) => void
}
