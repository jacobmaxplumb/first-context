import { useContext, useState } from "react"
import { TodosContext } from "../contexts/TodosContext"

export const TodoForm = () => {
    const { addTodo } = useContext(TodosContext);
    const [text, setText] = useState('');

    const handleAdd = () => {
        addTodo(text);
        setText('');
    }

    return <div>
        <input placeholder="todo item" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
    </div>
}