import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../../state'
import { useGetData } from '../../../hooks/useGetData'
import { API } from '../../../config'
import { useHistory } from 'react-router-dom'
//Braintree
import DropIn from 'braintree-web-drop-in-react'
import { usePostData } from '../../../hooks/usePostData'

export const Checkout = ({ total }) => {
	const [{ cart, token, user }] = useStateValue(),
		history = useHistory(),
		[showPayment, setShowPayment] = useState(false),
		[dataBraintree, setDataBraintree] = useState({
			clientToken: null,
			instance: null,
			error: false,
		}),
		[sendGet, { loading, error, success }] = useGetData(
			`${API}/braintree/getToken/${user._id}`,
			token
		),
		[sendPost, paymentInfo] = usePostData(
			`${API}/braintree/payment/${user._id}`,
			token
		),
		getBraintreeToken = async () => {
			try {
				if (!user.name) {
					history.push('/signin')
				} else {
					const data = await sendGet()
					console.log(data)
					setShowPayment(true)
					setDataBraintree({ ...dataBraintree, clientToken: data.token.clientToken })
				}
			} catch (e) {
				return console.log(e)
			}
		},
		buy = () => {
			dataBraintree.instance
				.requestPaymentMethod()
				.then(async data => {
					console.log(data)
					//
					const paymentData = {
						paymentMethodNonce: data.nonce,
						amount: total,
					}
					const dataProcessPayment = await sendPost(paymentData)
					if (!dataProcessPayment.happy) {
						setDataBraintree({ ...dataProcessPayment, error: 'eee' })
						return console.log(dataProcessPayment)
					}
					return console.log('yeah', dataProcessPayment)
				})
				.catch(e => {
					console.log('dropin error', e)
					setDataBraintree({ ...dataBraintree, error: e })
				})
		}

	return (
		<>
			{cart.length > 0 && (
				<div>
					<button onClick={getBraintreeToken}>Proceed to checkout</button>
					{showPayment && dataBraintree.clientToken && (
						<div>
							<DropIn
								options={{
									authorization: dataBraintree.clientToken,
									paypal: {
										flow: 'vault',
									},
								}}
								onInstance={instance =>
									setDataBraintree({ ...dataBraintree, instance })
								}
							/>
							<button onClick={buy}>Pay</button>
						</div>
					)}
					{console.log(dataBraintree)}
				</div>
			)}
			<div>{loading && 'loading..'}</div>
			<div>{error && `${error}`}</div>
			<div>{success && 'success'}</div>
		</>
	)
}
