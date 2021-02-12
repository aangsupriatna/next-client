import Link from 'next/link'

export interface IPost {
  id: number
  name: string
  email: string
  password: string
}

export default function Person({ users }: any) {
  return (
    <li>
      <Link href="/user/[id]" as={`/user/${users.id}`}>
        <a>{users.name}</a>
      </Link>
    </li>
  )
}