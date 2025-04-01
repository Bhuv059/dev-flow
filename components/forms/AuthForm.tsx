"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import {DefaultValues, FieldValue, FieldValues, SubmitHandler, useForm} from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {z, ZodType} from "zod";

interface AuthFormProps<T extends FieldValues>{
	schema: ZodType<T>;
	defaultValues?: T;
	onSubmit?: (data: T) => Promise<{success:boolean}>;
	formType: 'SIGN_IN' | 'SIGN_UP' ;
}

const AuthForm = <T extends FieldValues>({
											 schema,
											 defaultValues,
											 formType,
											 onSubmit,
										 }: AuthFormProps<T>) => {
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: defaultValues as DefaultValues<T>,
	});
	const handleSubmit :SubmitHandler<T>= async () =>{}

	const buttonText = formType === "SIGN_IN" ? "SignIn" : "SignUp"

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
				{buttonText}
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}

export default AuthForm;