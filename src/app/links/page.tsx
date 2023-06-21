import { Database } from '@/app/types/supabase'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import EditLinks from './Edit_Links'


export default async function Links() {
    const supabase = createServerComponentClient<Database>({ cookies })

    const {
        data: { session },
    } = await supabase.auth.getSession()


    return (
        <EditLinks session={session} />
    )
}