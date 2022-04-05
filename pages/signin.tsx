
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import styles from '../styles/Home.module.css'

interface LoginFormElements extends HTMLCollection {
    username: HTMLInputElement,
    password: HTMLInputElement
}
interface AuthResult {
    signIn: boolean
    data: string
}

const SignInPage: NextPage = () => {

    const router = useRouter()
    const [warningMessage, setWarningMessage] = useState<string|undefined>()

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const loginForm = (event.currentTarget as HTMLFormElement).elements as LoginFormElements

        const response = await fetch('/api/signin', {
            body: JSON.stringify({
                username: loginForm.username.value,
                password: loginForm.password.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const result: AuthResult = await response.json()
        if (response.status == 200 && result.signIn) {
            router.push('/protected')
        } else {
            setWarningMessage(result.data)
        }

    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Sign In</title>
                <meta name="description" content="Sign in page" />
            </Head>

            <form onSubmit={onSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Submit</button>
            </form>
            {
                warningMessage ? <p className="warning">{warningMessage}</p> : <p></p>
            }
        </div>
    )
}

export default SignInPage
