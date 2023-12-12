import { useState } from 'react';
import './App.css'
import Button from './components/Button';


const App = (): JSX.Element => {
  const [ value, setValue ] = useState("");

  const handleButton = (e: string) => {
    setValue((prevValue) => String(prevValue).concat(String(e)));
  }

  const handleEqual = () => {
    try {
      setValue(eval(value));
    } catch (erro) {
      setValue("Syntax Error")
    }
  }

  return (
    <main className='flex flex-col items-center'>
      <h1 className='text-4xl font-bold mt-6'>Calculadora</h1>
      <section className='bg-zinc-800 w-[450px] h-[550px] rounded-xl p-6 mt-2'>
        <div id='calculadora' className='w-full h-full flex flex-col gap-5'>
          <input type='text' value={value} className='w-full h-1/5 font-bold text-2xl px-4 rounded-xl' readOnly/>
          <div id='layout' className='w-full h-4/5 grid grid-cols-4 grid-rows-5 gap-2'>
            <Button operation={7} func={() => {handleButton("7")}} />
            <Button operation={8} func={() => {handleButton("8")}} />
            <Button operation={9} func={() => {handleButton("9")}}/>
            <Button operation="=" func={() => handleEqual()} identifier='igual' />

            <Button operation={4} func={() => {handleButton("4")}} />
            <Button operation={5} func={() => {handleButton("5")}} />
            <Button operation={6} func={() => {handleButton("6")}} />
            <Button operation="+" func={() => {handleButton("+")}} identifier='suma' />

            <Button operation={1} func={() => {handleButton("1")}} />
            <Button operation={2} func={() => {handleButton("2")}} />
            <Button operation={3} func={() => {handleButton("3")}} />
            <Button operation="-" func={() => {handleButton("-")}} identifier='resta' />

            <Button operation={0} func={() => {handleButton("0")}} />
            <Button operation="." func={() => {handleButton(".")}} />
            <Button operation="*" func={() => {handleButton("*")}} identifier='multiplicacion' />
            <Button operation="/" func={() => {handleButton("/")}} identifier='division' />

            <Button operation="Clear" func={() => {setValue("")}} identifier='clear' />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App