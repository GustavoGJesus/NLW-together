import { useContext } from 'react'
import { Link } from 'react-router-dom'

import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'

import { TestContext } from '../App'

export function NewRoom(){
    const {value, setValue} = useContext(TestContext)
    
    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <h1>{value}</h1>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Nome da sala"
                            />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente ? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
/*export function NewRoom(){
    return(

    );
}*/