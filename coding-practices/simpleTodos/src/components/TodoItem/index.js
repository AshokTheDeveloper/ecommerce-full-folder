// Write your code here
import './index.css'

const TodoItem = props => {
  const {todosList, deleteTodo} = props
  const {title, id} = todosList

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item-container">
      <div className="button-text-container">
        <p className="todo">{title}</p>
        <button className="delete-button" type="button" onClick={onDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
