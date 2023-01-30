import { ContextType } from '../types'

export const TodoSearch = ({ searchValue, handleNewSearch, loading }:Pick<ContextType, 'searchValue' | 'handleNewSearch' | 'loading'>) => {
  const handleChange = ({ value }: HTMLInputElement) => {
    handleNewSearch(value)
  }

  return (
    <div className='w-full flex justify-center'>
      <input onChange={(e) => handleChange(e.target) } type="text" value={searchValue} className="border shadow w-3/4 rounded-md p-1 disabled:animate-pulse" disabled={loading}/>
    </div>
  )
}
