import { useState, useEffect } from 'react'

function Landing() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/hello')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div>
            {
                data.map((person) => (
                    <div key={person.id}>
                        <h1>{person.name}</h1>
                        <p>{person.age}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Landing