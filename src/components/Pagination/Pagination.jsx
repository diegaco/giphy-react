export default function Pagination({ page, handlePrev, handleNext }) {
  return (
    <div className="flex">
      {
        (page > 0) ?
          <button className="px-5 py-2 font-medium rounded bg-purple-500 text-white focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all" onClick={handlePrev}>Prev page</button> :
          null
      }
      <button className="ml-auto px-5 py-2 font-medium rounded bg-purple-500 text-white focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all" onClick={handleNext}>Next page</button>
    </div>
  )
}
