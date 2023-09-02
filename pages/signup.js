import AButton from '@/components/AButton'
import Button from '@/components/Button'
import InputButton from '@/components/InputButton'
import Logo from '@/components/Logo'
import TextArea from '@/components/TextArea'
import React from 'react'

export default function signup() {
  return (
    <div className='flex flex-col w-screen h-screen'>

      <div className='flex opacity-0 justify-end mr-5 my-3 gap-5'>
        <div>
          <label>País:</label>
          <select value={'country'}>
            <option value={1}>Brasil</option>
            <option value={2}>Estados Unidos</option>
            <option value={3}>França</option>
          </select>
        </div>
        <div>
          <label>Idioma:</label>
          <select value={'language'}>
            <option value={1}>Inglês</option>
            <option value={2}>Francês</option>
            <option value={3}>Portugês</option>
          </select>
        </div>
      </div>

      <div className='flex w-screen gap-2 h-screen'>

        <div className='min-s-300 flex flex-col items-end pr-2 text-right'>  
          <div className='flex flex-col w-4/5 gap-3'>
            <div className='h-20'>
              <Logo width='200' />
            </div>
            <div className='h-12'>
              <h2>O seu endereço de email atual:</h2>
            </div>
            <div className='h-12'>
              <h2>Escolha uma senha:</h2>
            </div>
            <div className='h-12'>
              <h2>Digite a senha novamente:</h2>
            </div>
            <div>
              <h2>Verificação de palavras:</h2>
            </div>
          </div>
        </div>

        <div className='grow'> 
          <form className='flex flex-col gap-3'>
            <div className='h-20 flex flex-col'>
              <h1 className='bg-third pl-1 w-full'>Crie sua conta do Google</h1>
              <p className='text-sm pl-1 mt-6'>Vamos criar uma conta do Google para que você possa usar o Orkut. Se você  ja tem uma conta. <a className='link' href='/login'>Faça login com ela</a>.</p>
            </div>
            <div className='h-12'>
              <InputButton className="border w-72" type="text"/>
              <p className='text-sm color-gray'>por exemplo, myname@example.com. Esse será o seu nome de usuário e acesso</p>
            </div>
            <div className='h-12'>
              <InputButton className="border w-40" type="password"/>
              <p className='text-sm color-gray'>no mínimo, 8 caracteres.</p>
            </div>
            <div className='h-12'>
              <InputButton className="border w-40" type="password"/>
            </div>
            <div className='w-9/12'>
              <h3>Digite os caracteres que você vê na figura abaixo.</h3>
              <img></img>
              <InputButton className="border w-40" type="password"/>
              <p className='text-sm color-gray'>As letras não diferenciam minusculas de maiúsculas.</p>
            </div>
            <div className='mt-2'>
              <Button className="w-20" text='Criar'></Button>
            </div>
          </form>
        </div>

      </div>

      <div className='w-full flex bg-third justify-center mb-10 gap-3 py-1'>
        <p>2023 Orkut.com</p>
        <a className='link' href='/about'>Sobreo Orkut.com</a>-
        <a className='link' href='/security'>Centro de segurança</a>-
        <a className='link' href='/privacy'>Privacidade</a>-
        <a className='link' href='/terms'>Termos</a>-
        <a className='link' href='/contacte'>Contato</a>
      </div>
    </div>
  )
}
