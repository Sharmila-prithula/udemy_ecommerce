import React, { useState, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useNavigate  } from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

function PaymentScreen() {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    let navigate = useNavigate();
    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    if (!shippingAddress.address) {
        navigate('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }

    return (
        <>
        <CheckoutSteps step1 step2 step3 />
        <FormContainer>

            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend' className="my-3">Select Method</Form.Label>
                    <Col className="my-3">
                        <Form.Check
                            type='radio'
                            label='Cash on delivery'
                            id='paypal'
                            name='paymentMethod'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >

                        </Form.Check>
                    </Col>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
        </>
    )
}

export default PaymentScreen