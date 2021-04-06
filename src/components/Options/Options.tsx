import React from 'react'
import Todolist from '../../utils/todos'

export const Options: React.FC = () => {
return <div>
    <button type="button">Create a new Todo</button>
    <button type="button" onClick={() => Todolist.sortByUrgency()}>Sort by urgency</button>
    <button type="button" onClick={() => Todolist.sortByCompleteness()}>Sort by completeness</button>
</div>
} 