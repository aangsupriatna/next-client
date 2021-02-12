import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function User() {
    const { query } = useRouter()
    const userId = Number(query.id)
    const { data, error } = useSWR(`/api/users/${userId}`, fetcher)

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.password}</td>
                </tr>
            </tbody>
        </table>
    )
}