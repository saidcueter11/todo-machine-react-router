import { createPortal } from 'react-dom'
import { useStorageListener } from '../hooks/useStorageListener'
import { TodoType } from '../types'

export interface ChangeAlertProps {
    sincronize: (todo:TodoType[]) => void
}

export const ChangeAlert = ({ sincronize }:ChangeAlertProps) => {
  const { show, toggleShow } = useStorageListener(sincronize)

  if (show) {
    return createPortal(
        <div className='h-screen w-full fixed bg-gray-700/40 z-10 top-0 flex justify-center items-center'>
          <div className='bg-gray-100 p-4 w-4/5 h-2/5 z-20 rounded-md flex flex-col gap-6 items-center justify-center'>
            <p className='text-center'>Parece que hubieron cambios en tu lista, presiona el boton para actualizar</p>
            <button className='bg-blue-200 w-44 p-3 rounded-md hover:bg-blue-400 hover:scale-105 transition-all duration-150' onClick={toggleShow}>Actualizar</button>
          </div>
        </div>,
        document.getElementById('modal') as HTMLElement
    )
  } else {
    return <></>
  }
}
