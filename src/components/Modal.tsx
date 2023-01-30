import { createPortal } from 'react-dom'
import { TodoType } from '../types'

export const Modal = ({ children }:TodoType) => {
  return createPortal(
    <div className='h-screen w-full fixed bg-gray-700/40 z-10 top-0 flex justify-center items-center'>
        {children}
    </div>,
    document.getElementById('modal') as HTMLElement
  )
}
