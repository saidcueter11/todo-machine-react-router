export const EditTodoPage = () => {
  return (
    <>
      <form className='py-6 h-2/5 w-4/5 bg-gray-100 flex flex-col items-center rounded-md justify-between shadow'>
        <label className='text-center text-xl font-semibold w-full'>Add new Todo</label>
        <textarea placeholder="Add your new Todo" className='w-4/5 h-3/5 p-2 rounded-md bg-gray-50 shadow text-lg'></textarea>
        <div className='flex justify-evenly w-full'>
          <button className='bg-gray-50 w-24 h-fit px-6 py-1 shadow rounded-md hover:bg-gray-200 hover:scale-105 duration-150' type="button" >Cancel</button>
          <button className='bg-blue-200 w-24 sm:w-36 h-fit px-6 py-1 shadow rounded-md hover:bg-blue-400 hover:scale-105 duration-150' type="submit">Add</button>
        </div>
      </form>
    </>
  )
}
