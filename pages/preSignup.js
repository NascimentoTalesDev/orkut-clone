import AButton from '@/components/AButton'
import Button from '@/components/Button'
import InputButton from '@/components/InputButton'
import Logo from '@/components/Logo'
import TextArea from '@/components/TextArea'
import React from 'react'

export default function preSignup() {
  return (
    <div className='flex flex-col w-screen h-screen'>

      <div className='flex justify-end mr-5 my-3 gap-5'>
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
              <h2>Já que seremos amigos, você pode me dizer qual o seu nome?</h2>
            </div>
            <div className='h-20'>
              <h2>Desculpas se estamos sendo indiscretos, mas quando você nasceu?</h2>
            </div>
            <div>
              <h2>Sexo:</h2>
            </div>
            <div>
              <h2>Termos de Serviço:</h2>
            </div>
          </div>
        </div>

        <div className='grow'>

          <form className='flex flex-col gap-3'>
              <div className='h-20'>
                <h1 className='bg-third pl-1 w-full'>Criação da conta</h1>
              </div>
              <div className='h-12'>
                <label>nome:</label>
                <InputButton className="border mx-2 w-32" type="text" />
                <label>sobrenome:</label>
                <InputButton className="border mx-2 w-44" type="text" />
              </div>
              <div className='h-20'>
                <div className='flex gap-2'>
                  <select value={"mes"}>
                    <option value={1}>Janeiro</option>
                    <option value={2}>Fevereiro</option>
                  </select>
                  <select value={"dia"}>
                    <option value={1}>01</option>
                    <option value={2}>02</option>
                  </select>
                  <select value={"ano"}>
                    <option value={1991}>1991</option>
                    <option value={1992}>1992</option>
                  </select>
                </div>
                <label className='flex gap-1 mt-2'>
                  <InputButton type="checkbox" />
                  <p>Exibir minha idade para meus futuros amigos do orkut</p>
                </label>
              </div>
              <div className='flex gap-2'>
                <label className='flex gap-1'>
                  <InputButton type="radio" name="sex" />
                  <p>Masculino</p>
                </label>
                <label className='flex gap-1'>
                  <InputButton type="radio" name="sex" />
                  <p>Feminino</p>
                </label>
              </div>
              <div className='w-9/12'>
                <TextArea className='border' rows={4} cols={100} content="Termos..."></TextArea>
                <h3>Ao clicar em "Aceito", você concorda com os <a href='/googleterms' className='link'>Termos de Serviços do Google</a> apresentados acima, com os <a href='/terms' className='link'>Termos Adicionais do orkut</a> e com a <a href='/privacy' className='link'>Politica de Privacidade</a>.</h3>
              </div>
              <div className='mt-2'>
                <AButton href="/signup" className="w-28" text="Aceito >>"></AButton>
              </div>
          </form>

        </div>

      </div>

      <div className='w-full flex bg-third justify-center gap-3 py-1 mb-10'>
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
