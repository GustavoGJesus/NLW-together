import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleIconImage from '../assets/google-icon.svg'

export function Home(){
    return(
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
                <main>
                    <div>
                        <img src={logoImg} alt="Letmeask" />
                        <button>
                        <img src={googleIconImage} alt="Logo do Google" />
                            Crie sua sala com o Google
                        </button>
                        <div>ou entre em uma sala</div>
                        <form>
                            <input 
                            type="text" 
                            placeholder="Digite o código da sala"
                            />
                            <button type="submit">
                                Entrar na sala
                            </button>
                        </form>
                    </div>
                </main>
            </aside>
        </div>
    );
}