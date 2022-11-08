import React from "react"
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
    handleEditing = () => {
        console.log("edit mode activated")
      }
    render() {
    return (
        <li className={styles.item}>
          <div onDoubleClick={this.handleEditing}>...</div>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={this.props.todo.completed}
            onChange={() => this.props.handleChangeProps(this.props.todo.id)}
          />
          <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
            Delete
          </button>
          {this.props.todo.title}
          <input type="text" className={styles.textInput} />
        </li>
      )
  }
}

export default TodoItem
