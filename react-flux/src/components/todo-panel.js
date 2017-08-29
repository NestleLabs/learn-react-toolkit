import React from 'react';

export default function TodoPanel({title, body, key}) {
  return (
    <li className={`todo-${key}`}>
        <h5 className="todo-title">{ title }</h5>
        <p className="todo-body">{ body }</p>
    </li>
  )
}
