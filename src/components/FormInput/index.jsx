export default function FormInput({handleChange, label, ...rest }) {
  return (
    <div className="form-group mb-3">
      {
        label ?
          <label htmlFor={rest.id} className="block">
            { label }
          </label> :
          null
      }
      <input className="form-control block w-full" onChange={handleChange} {...rest}/>
    </div>
  )
}
