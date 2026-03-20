import type { Task } from '../types/task'

type TaskListProps = {
    tasks: Task[]
}

export default function TaskList({ tasks }: TaskListProps) {
    if (tasks.length === 0) {
        return <p className='text-muted'>No se han encontrado tareas</p>
    }

    return (
        <ul className='list-group'>
            {tasks.map((task) => (
                <li key={task.id} className='list-group-item'>
                    {task.title}
                </li>
            ))}
        </ul>
    )
}