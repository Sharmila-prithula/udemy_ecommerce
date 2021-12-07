import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, Row , Col , FloatingLabel} from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { searchProducts } from '../actions/productActions'

function SearchBox() {
    const [keyword, setKeyword] = useState('')
    
    let navigate = useNavigate();
    // const dispatch = useDispatch()
    // const search = useLocation().search;
    // const keyword1 = new URLSearchParams(search).get('search')
    // console.log(keyword1)
    // useEffect(() => {
    //   dispatch(searchProducts(keyword1));
    // }, [dispatch]);

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            navigate(`/?search=${keyword}`)
        } else {
            console.log('nothing')
        }
    }
    return (
      <Form onSubmit={submitHandler} >
        <Form.Control 
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          className="mr-sm-2 ml-sm-5"
        ></Form.Control>

        <Button type="submit" variant="outline-success" >
          Submit
        </Button>
      </Form>
     
    );
}

export default SearchBox