export default function FormInput({handleChange, label, ...rest }) {
  return (
    <div className="form-group mb-4">
      {
        label ?
          <label htmlFor={rest.id} className="block text-gray-600 font-semibold tracking-wide">
            { label }
          </label> :
          null
      }
      <input className="form-control block w-full border-b-2 border-gray-300 px-2 py-3 text-lg font-light text-purple-700 h-12" onChange={handleChange} {...rest}/>
    </div>
  )
}
