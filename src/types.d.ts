import React from 'react'

export interface TodoType {
    id?: number
    description?: string
    completed?: boolean
    children?: React.ReactNode
}

export interface ContextType {
    labelForm?: string
    submitText?: string
    defaultTodoTextForm?: string
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
    editTodo: (id?: number, text?: string) => void
    submitTodo: (text: string) => void
    getTodo: (id: number) => TodoType | undefined
    sincronize: (todo: TodoType[]) => void
}
