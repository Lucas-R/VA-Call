import { useState } from "react"
import { useCall } from "./hooks/useCall";

interface PhoneProps extends EventTarget{
  value: string
}

function App() {
  const [ phone, setPhone ] = useState<string>("");

  function removeLetters(value: string) {
      return value.replace(/\D/g, '');
  }

  function handlePhone(event: PhoneProps) {
      let phoneRgx = removeLetters(event.value);
      phoneRgx = phoneRgx.replace(/(\d{2})(\d)/,"($1) $2")
      phoneRgx = phoneRgx.replace(/(\d)(\d{4})$/,"$1-$2")
      phoneRgx.length <= 15 && setPhone(phoneRgx);
  }

  async function handleCall() {
    const data = await useCall({ phone: removeLetters(phone) });
    console.log(data);
  } 

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center gap-4">
        <input 
          type="text" 
          value={phone}
          placeholder="Phone number"
          onChange={(e) => handlePhone(e.target)}
          className="w-70 h-10 p-4 border boder-black rounded-lg"
        />
        <button
          onClick={() => handleCall()} 
          className="w-auto h-10 px-4 hover:bg-green-600 bg-green-600/90 cursor-pointer text-white rounded-lg"
        > Ligar </button>
      </div>
    </>
  )
}

export default App
