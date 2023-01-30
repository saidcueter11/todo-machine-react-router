import { useNavigate } from 'react-router-dom'
import { BsFillPlusCircleFill } from 'react-icons/bs'

export const CreateTodoButton = () => {
  const navigate = useNavigate()
  return (

    <BsFillPlusCircleFill onClick={() => navigate('/new')} className='fixed bottom-8 right-10 text-4xl hover:fill-emerald-300 fill-slate-50 drop-shadow-xl cursor-pointer hover:scale-110 transition-all duration-200' />
  )
}
