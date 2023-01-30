import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoCounter } from '../components/TodoCounter'
import { TodoItem } from '../components/TodoItem'
import { TodoList } from '../components/TodoList'
import { TodoSearch } from '../components/TodoSearch'
import { Modal } from '../components/Modal'
import { TodoForm } from '../components/TodoForm'
import { Loading } from '../components/Loading'
import { TodoHeader } from '../components/TodoHeader'
import { useTodos } from '../hooks/useTodos'
import { TodoType } from '../types'
import { EmptyTodo } from '../components/EmptyTodo'
import { EmptySearch } from '../components/EmptySearch'
import { ChangeAlert } from '../components/ChangeAlert'
import { LimitTodos } from '../components/LimitTodos'

function HomePage () {
  const {
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    toggleOpenModal,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    handleNewSearch,
    addTodo,
    sincronize,
    editTodo
  } = useTodos()

  return (
    <div className='flex flex-col items-center m-3 pt-4 p-4 h-[97vh] gap-4 border border-transparent rounded-2xl shadow-lg relative bg-indigo-400'>
      <h1 className='font-bold text-3xl text-gray-50'>TodoList</h1>

      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} loading={loading} />
        <TodoSearch searchValue={searchValue} handleNewSearch={handleNewSearch} loading={loading} />
      </TodoHeader>

      <TodoList
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onLoading={() => <Loading />}
        onEmpty={() => <EmptyTodo />}
        onEmptySearch={(text: string) => <EmptySearch text={text} />}
        render={(todo: TodoType, index: number) => (
          <TodoItem
            key={index}
            description={todo.description}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo({ id: todo.id })}
            onDelete={() => deleteTodo({ id: todo.id })}
            onEdit={() => editTodo({ id: todo.id, description: todo.description })}
          />)}
      >

      </TodoList>

      <>
        {openModal && (
          <Modal>
            <TodoForm addTodo={addTodo} toggleOpenModal={toggleOpenModal} />
          </Modal>
        )}
      </>

      <CreateTodoButton toggleOpenModal={toggleOpenModal} openModal={openModal} />
      <ChangeAlert sincronize={sincronize} />
      <LimitTodos totalTodos={totalTodos} />
    </div>
  )
}

export { HomePage }
