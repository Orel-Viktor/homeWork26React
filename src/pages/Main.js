import { Card } from '../Card'
import { Button } from "../components/Button"
import { useState } from 'react'


export function Main() {
    const [error, setError] = useState(false);
    const handleError = () => {
        setError({ value: 112 })
      
    }
    return (
            <main>
                <Button onClick={handleError} >Уставить ошибку</Button>
                <span>{error ? error : null} </span>
                <Card userName="Viktor" lastName="Orel" ></Card>
            </main>
    )
}