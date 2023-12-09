import { useEffect, useState } from "react";
import Axios from 'axios'

function Authors()
{
    const [data, setData] = useState({
        nama: "",
        umur: 0
    })
    const [authors, setAuthors] = useState([])

    const handle = e => {
        const value = { ...data }
        value[e.target.id] = e.target.value
        setData(value);
    }

    useEffect(() => {
        Axios.get('http://localhost:5000/authors').then((res) => {
            setAuthors(res.data);
        })
    }, [authors])

    const submit = e => {
        e.preventDefault()

        Axios.post('http://localhost:5000/authors', {
            name: data.nama,
            age: data.umur
        })
    }

    const hapus = (e, id) => {
        e.preventDefault()

        Axios.delete(`http://localhost:5000/authors/${id}`)
    }

    return (
        <div>
            <h1>Menambahkan Penulis</h1>
            <form onSubmit={e => submit(e)}>
                <label for="name">Nama: </label><br/>
                <input onChange={e => handle(e)} type="text" id="nama" value={data.nama}/><br/>
                <label for="age">Usia: </label><br/>
                <input onChange={e => handle(e)} type="text" id="umur" value={data.umur}/><br/>
                <button>Submit</button>
            </form>

            <br/><br/><br/>
            <h1>List Penulis</h1>
            <ul>
                {authors.map(author => (
                    <li key={author.id}>ID: {author.id} ; Nama: {author.name}; Umur: {author.age}
                        <button onClick={e => hapus(e, author.id)}>Hapus</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Authors;