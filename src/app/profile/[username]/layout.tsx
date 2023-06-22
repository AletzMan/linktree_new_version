import { ReactNode } from "react"
import { CardProfile } from "./CardProfile/CardProfile"

/*'use client'

import { Database } from "@/app/types/supabase"
import { FormValue, Network, UserInfo } from "@/app/types/types"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { ReactNode, useEffect, useState } from "react"
import { CardProfile } from "./CardProfile/CardProfile"

const emptyLinks: Network = [
    {
        application: 0,
        url: ''
    }
]

const emptySettings: FormValue = {
    backgroundColor: null,
    fontColor: null,
    fontHighColor: null
}
*/
export default async function LayoutParameter({ children, params }: { children: ReactNode, params: { username: string } }) {

    console.log(params.username)
    return (
        <main>
            <CardProfile username={params.username} />
            {children}
        </main>
    )
}
