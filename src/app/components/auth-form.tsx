'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeMinimal } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../types/supabase'
import { createStitches } from '@stitches/react'
import styles from './components.module.css'


export default function AuthForm() {
    const supabase = createClientComponentClient<Database>()
    return (
        <Auth
            supabaseClient={supabase}
            view='magic_link'
            appearance={{
                extend: false,
                className: {
                    button: styles.button,
                    container: styles.container,
                    input: styles.input,
                    divider: styles.divider,
                    message: styles.message
                }
            }}
            localization={{
                variables: {
                    sign_in: {
                        email_label: "Email",
                        social_provider_text: "Inicia sesión con {{provider}}",
                        password_label: 'Your strong password',
                        email_input_placeholder: 'example@email.com'
                    },
                    magic_link: {
                        email_input_label: "Email",
                        email_input_placeholder: 'example@email.com',
                        button_label: "Enviar Magic Link",
                        loading_button_label: "Enviando Magic Link",
                        link_text: "Already have an account? Sign in"
                    },
                },
            }}
            showLinks={false}
            providers={['google', 'github']}
            redirectTo="http://linktree-new-version.vercel.app/auth/callback"
        />
    )
}