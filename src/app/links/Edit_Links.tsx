import  Database  from '@/app/types/supabase'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function EditLinks({ session }: { session: Session | null }) {
    const supabase = createClientComponentClient<Database>()

return(
    <section></section>
)

}