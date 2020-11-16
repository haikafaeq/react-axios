import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
        .get('https://gist.githubusercontent.com/haikafaeq/07b106d20c9f5ce4daa6057a9858796a/raw/2f9e7c7d0f82700f239f55ea784be5ec0550219a/datafetching.json')
        .then(res => {
            console.log(res)
            setItems(res.data)
        })
        .catch(err => {
            console.log(err)
        })

    }
    )

    return (
        <div>
            
                {items.map(item => (
                <p key={item.id}>{item.num} </p>
                ))}
            
        </div>
    )
}

export default DataFetching
