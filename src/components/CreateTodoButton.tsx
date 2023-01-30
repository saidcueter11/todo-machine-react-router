import { ContextType } from '../types'
import { BsFillPlusCircleFill } from 'react-icons/bs'

export const CreateTodoButton = ({ toggleOpenModal, openModal }:Pick<ContextType, 'toggleOpenModal' | 'openModal'>) => {
  const handleClick = () => {
    toggleOpenModal(!openModal)
  }

  return (

    <BsFillPlusCircleFill onClick={handleClick} className='fixed bottom-8 right-10 text-4xl hover:fill-emerald-300 fill-slate-50 drop-shadow-xl cursor-pointer hover:scale-110 transition-all duration-200'/>
  )
}
