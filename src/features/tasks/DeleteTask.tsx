import React, { useContext } from 'react';
import TaskContext, { TaskContexInterface } from '../state/TaskContex';
import { Task } from './Interface';

interface Props{
  id: number
}

const DeleteTask = ({id}: Props) => {
  const {deleteTask} = useContext(TaskContext) as TaskContexInterface

  return (
    <div>
      <button onClick={()=>deleteTask(id)}>Delete</button>
    </div>
  )
}

export default DeleteTask