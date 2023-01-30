import { TodoType } from '../types'

export const TodoHeader = ({ children }:TodoType) => {
  return (
        <header className='mb-2 px-1 flex gap-5 flex-col w-full'>
            {children}
        </header>
  )
}
