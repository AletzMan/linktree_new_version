import  Database  from '@/app/types/supabase'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export default async function Links(){
    const supabase = createServerComponentClient<Database>({ cookies })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    console.log(session)

    return(
        <section>
            <h2>TITLE</h2>
        </section>
    )
}