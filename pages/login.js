import Button from '@/components/Button'
import InputButton from '@/components/InputButton'

import Logo from '@/components/Logo'


export default function login() {
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

          <div className='flex flex-col justify-between w-1/3 gap-2'>
            
            <div className='bg-white p-1 grow'>
              <div className='flex flex-col text-center p-3 bg-secondary h-full'>
                <h2 className='mb-2'>Acesse o Orkut com a sua conta</h2>
                <form className='flex flex-col gap-2'>
                  <div className='flex items-baseline'>
                    <label className='mr-1'>Nome:</label>
                    <InputButton type='text' placeholder='Tales Nascimento'/>
                  </div>
                  <div className='flex items-baseline'>
                    <label className='mr-1'>Senha:</label>
                    <InputButton type='password' placeholder='********'/>
                  </div>
                  
                  <label>
                    <input className='mr-2' type='checkbox'></input>
                    Salvar as minhas infirmações neste computador
                  </label>

                  <p className='text-center'>Não use em computadores públicos. [?]</p>
                  <Button className="w-20" text="Login"></Button>
                  <a href='/recovery' className='text-center link'>Não consegue acessar a sua conta?</a>
                </form>
              </div>
            </div>

            <div className='bg-white p-1 text-center'>
              <div className='bg-secondary py-2'>
                <h2>Ainda não é membro?</h2>
                <a className='link uppercase font-bold' href='/preSignup'>Entrar Já</a>
              </div>
            </div>

          </div>
          
        </div>

        <div className='w-full flex bg-third mt-2 justify-center gap-3 bg-red-500'>
          <p>2023 Orkut.com</p>
          <a className='link' href='/about'>Sobreo Orkut.com</a>-
          <a className='link' href='/security'>Centro de segurança</a>-
          <a className='link' href='/privacy'>Privacidade</a>-
          <a className='link' href='/terms'>Termos</a>-
          <a className='link' href='/contacte'>Contato</a>
        </div>
      
      </div>
    
    </div>
  )
}
