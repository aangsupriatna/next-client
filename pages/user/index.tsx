import useSWR from 'swr'
import Person from '../../components/Person'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
    const { data, error } = useSWR('/api/users', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <ul>
            {data.map((p: string, i: number) => (
                <Person key={i} users={p} />
            ))}
        </ul>
    )
}