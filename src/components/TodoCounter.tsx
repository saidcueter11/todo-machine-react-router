import { ContextType } from '../types'

export const TodoCounter = ({ totalTodos, completedTodos, loading }:Pick<ContextType, 'totalTodos' | 'completedTodos' | 'loading'>) => {
  return (
    <h2 className={`text-center font-semibold text-xl text-gray-50 ${loading && 'opacity-60'}`}>You have completed {loading ? 0 : completedTodos} of {loading ? 0 : totalTodos} tasks</h2>
  )
}
