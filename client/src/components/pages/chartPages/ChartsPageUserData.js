import React, { useEffect, useState } from "react"

export default function ChartPageUserData(props) {
    const [data, setData] = useState([])

    let userId = localStorage.getItem("userId")
    console.log(userId)

    useEffect(() => {
        fetch(`http://localhost:3001/userData/user-data/${userId}`)
            .then((response) => response.json())
            .then((result) => {
                setData(result)
                console.log(result)
        })
    }, [])

    console.log(data)

    return (
        <div>hello world</div>
    )
}