"use client"
import React from 'react'
import {SignInSchema} from "@/lib/validations";
import AuthForm from "@/components/forms/AuthForm";

const SignIn = () => {
	return (
		<div>
			<AuthForm
				formType="SIGN_IN"
				schema={SignInSchema}
				defaultValues={{ email: "", password: ""}}
				onSubmit={(data)=> Promise.resolve({success:true, data})}
			/>
		</div>
	)
}
export default SignIn
