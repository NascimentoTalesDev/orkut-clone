import Button from '@/components/Button'
import Logo from '@/components/Logo'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <div className='flex items-center justify-center bg-primary h-screen w-screen'>
      
      <div className='w-4/5 h-2/3'>

        <div className='flex gap-2'>
          
          <div className='flex flex-col text-center justify-center items-center bg-white w-2/3 h-96'>
            <div className='mb-14'>
              <Logo width={300} />
            </div>
            <div>
              <h2><b className='orkut'>Conecta-se</b> aos seus amigos e familiares usando recados e mensagens instantâneas</h2>
              <h2><b className='orkut'>Conheça</b> novas pessoas através de amigos de seus amigos de comunidades</h2>
              <h2><b className='orkut'>Compartilhe</b> seus videos, fotos e paixões em um só lugar</h2>
            </div>
          </div>

          <div className='flex flex-col justify-between w-1/3 gap-2 min-h-2/3'>
            
            <div className='bg-white p-1 grow'>
              <div className='flex flex-col text-center p-3 bg-cyan-100 h-full'>
                <h2 className='mb-2'>Acesse o Orkut com a sua conta</h2>
                <form className='flex flex-col items-baseline gap-2'>
                  <label>Nome:
                    <input type='text'></input>
                  </label>
                  <label>
                    Senha:
                    <input type='password'></input>
                  </label>
                  <label>
                    <input className='mr-2' type='checkbox'></input>
                    Salvar as minhas infirmações neste computador
                  </label>
                  <p>Não use em computadores públicos. [?]</p>
                  <Button text="Login"></Button>
                  <a href='#'>Não consegue acessar a sua conta?</a>
                </form>
              </div>
            </div>

            <div className='bg-white p-1 text-center'>
              <div className='bg-cyan-100 '>
                <h2>Ainda não é membro?</h2>
                <a href='#'>ENTRAR JÁ</a>
              </div>
            </div>

          </div>
          
        </div>
      
      </div>
    
    </div>
  )
}
