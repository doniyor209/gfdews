import './App.css'
import Card from './components/Card'
import data from '../public/data'
import { useState } from 'react';


function App() {

    let [show, setShow] = useState(false);
    let [book,setBook] = useState({
        title: '',
        author: '',
        image: '',
        description: '',
    });

    function handle(e) {
        // let {name, value} = e.target;

        let name =e.target.name;
        let value = e.target.value;
        

        setBook((prevBook) =>({...prevBook, [name]: value}));
    }



    function savebook() {
        data.push(book);
        setShow(false);
        setBook({
            author: '',
            title: '',
            image: '',
            description: '',
        })
    }







    return (
        <div className='container'>

            <div style={{filter: show==true?'blur(5px)':blur(0)}}>
                <h1>My Books</h1>
                <button id='addBtn' onClick={() => setShow(true)}>Add Book</button>

                <div className="cards">
                    {
                        data.map((inf, i) => {
                            return <Card key={i} title={inf.title} aftor={inf.author} img={inf.image} desc={inf.description}></Card>
                        })
                    }
                </div>
            </div>
            {show && (

                <div className="box">
                    <button id='exitBtn' onClick={() => { setShow(false) }}><i class="fa-solid fa-xmark"></i></button>
                    <input onChange={handle} value={book.title} name='title' type="text" placeholder='name' id='nameInput' />
                    <input onChange={handle} value={book.author} name='author' type="text" placeholder='aouthur' id='aftorInput' />
                    <input onChange={handle} value={book.image} name='image' type="text" placeholder='img url' id='urlInput' />
                    <textarea onChange={handle} value={book.description} name='description' placeholder='descdescription ' id='descInput'></textarea>
                    <button id='saveBtn' onClick={savebook}>Add Book</button> 
                </div>

            )


            }


        </div>
    )
}

export default App