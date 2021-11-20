import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss'
import { FiX } from 'react-icons/fi'
import {signIn, signOut, useSession} from 'next-auth/client'


export function SigInButton(){

    const [session] = useSession();

    console.log(session);

    return session ? (
        <button 
        className={ styles.sigInButton}
        type="button"
        onClick={()=> signOut()}
        >
           <FaGithub color='#04d361' />
            { session.user.name}
        </button>

    ) : (
        <button 
        type="button"
        className={ styles.sigInButton}
        onClick={() => signIn('github')}
        >
           <FaGithub color='#eba417' />
            Sign in with Github
            <FiX color="737380" className={styles.closeIcon} />
        </button>
    )
       
    
}