import { useState } from "react";
import FormHeader from "./components/Header";
import './global.css'
import Busca from "./pages/Busca";
// import Home from "./pages/Home";

function App() {
  const [step,setStep] = useState(0);
  return (
    <div>
      <FormHeader setStep={setStep} />
      <Busca step={step}/>
    </div>
  );
}

export default App;
