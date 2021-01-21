import React, {useRef} from 'react'

type AddTodoProps = {
  addTodo(text: string): void
}

const AddTodo: React.FC<AddTodoProps> = ({addTodo}) => {

  const inputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputRef.current!.value.trim() !== '') {
      addTodo(inputRef.current!.value.trim())
      inputRef.current!.value = ''
    }
  }

  return (
    <form className="col s12" onSubmit={(e) => submitHandler(e)}>
      <div className="row">
        <div className="input-field col s12">
          <button
            style={{cursor: 'pointer', padding: 0}}
            type="submit"
            className="material-icons prefix btn"
            onClick={(e) => submitHandler(e)}
          >
            add
          </button>
          <input id="add" style={{marginLeft: '4rem'}} placeholder="Add todo" type="text" ref={inputRef}/>
        </div>
      </div>
    </form>
  )
}

export default AddTodo
