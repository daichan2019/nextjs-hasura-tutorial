import { FC } from 'react'
import { todoVar } from '../cache'
import { useReactiveVar } from '@apollo/client'
import Link from 'next/link'

export const LocalStateB: FC = () => {
  const todos = useReactiveVar(todoVar)
  return (
    <>
      {todos.map((task, index) => {
        return (
          <p className="mb-3" key={index}>
            {task.title}
          </p>
        )
      })}
      <Link href="/local-state-a">Back</Link>
    </>
  )
}
