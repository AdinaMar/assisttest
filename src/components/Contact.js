import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../style/Contact.css';

const Contact = () => {

    const [values, setValues] = useState({
        name: '',
        surname:'',
        phone:'',
        email:''
    })

    const [list, setList] = useState([]);

    const handleChange = e => {
        const{name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setList((ls)=>[...ls,values]);

        setValues({
            name: '',
            surname:'',
            phone:'',
            email:''
        })
    }

    
  return (

<>
<Sidebar />
    <div className="contact">
<form onSubmit={handleSubmit}>
<label htmlFor='name'>Name</label>
<input type="text" id="name" name="name" required value={values.name} onChange={handleChange}/>

<label htmlFor='surname'>Surname</label>
<input type="text" id="surname" name="surname" required value={values.surname} onChange={handleChange}/>

<label htmlFor='phone'>Phone</label>
<input type="tel" id="phone" name="phone" required value={values.phone} onChange={handleChange}/>

<label htmlFor='email'>Email</label>
<input type="email" id="email" name="email" required value={values.email} onChange={handleChange}/>

<input type="submit" id="submit" value="submit" />
</form>

{
    list.map((a)=><div>
        <li>{a.name}</li>
        <li>{a.surname}</li>
        <li>{a.phone}</li>
        <li>{a.email}</li>
        </div>
        
        )
}




    </div>
    <Footer />
    </>
  )
}

export default Contact