import { useState } from  'react';
import './App.css';

function App() {
  const spanStyles = "text-fuchsia-900";
  const essayStyles = "text-rose-700 text-3xl mx-30 my-10 text-center";
  const buttonStyles = "border-3 border-rose-900 rounded-2xl bg-rose-700 text-white text-bold p-2 m-5 w-20 hover:cursor-pointer hover:bg-rose-800 hover:border-rose-950";

  const [yes, setYes] = useState(false);
  const [submit, setSubmit] = useState(false);
  
  if (yes) {
    if (submit) {
      return (
        <>
          <main className="flex justify-center align-center">
            <img src="./src/marriage-certificate.png" className="w-[85vw] h-[100vh]" />
          </main>
        </>
      )
    } 
    else {
        return (
          <>
            <header>
              <h1 className="text-5xl text-center text-amber-900 my-10 font-gothic">Marriage Certificate</h1>
              <h3 className="text-3xl text-center text-amber-800 my-5 font-gothic">This certificate states that</h3>
            </header>
            <main className="p-5 mx-20 border-3 border-amber-900">
              <form name="form" className="pb-30 border-3 border-amber-900 flex flex-col align-center">
                <div className="flex flex-row justify-center m-5">
                  <input id="name" type="text" className="border-b-2 mb-5 mr-5 border-amber-900 text-amber-900 text-3xl text-center font-gothic focus:outline-none" />
                  <p className="text-3xl text-amber-900 font-gothic">& Arymus Reyes</p>
                </div>
                <h3 className="text-3xl text-center text-amber-900 font-gothic">Are now married ᥫ᭡</h3>
                <input type="submit" onClick={() => setSubmit(true)} className="rounded-2xl border-3 border-amber-900 bg-amber-800 text-white font-bold p-2 m-5 w-30 cursor-pointer self-center hover:border-amber-950 hover:bg-amber-900" />
              </form>
            </main>
          </>
        )
    };
  };

  return (
    <>
      <header>
        <h1 className="text-center text-5xl text-rose-700 font-bold mt-10">For <span className={spanStyles}>Kaden ᥫ᭡</span></h1>
      </header>
      <main className="flex flex-col align-center">
        <p id="essay" className={essayStyles}><span className={spanStyles}>Kaden, I love you so fucking much.</span> Through all the time we’ve spent together, no one’s shown me the amount of care and love you have. I honestly love being with you so much and <span className={spanStyles}>I’m so glad you’re my boyfriend. You’re handsome, sweet, loving, caring</span>, and you make me feel things I haven’t felt for a long time. <span className={spanStyles}>Thank you so much for everything Kaden</span>, you’re the reason I keep pushing. Every memory I share with you only makes me fall deeper in love. I’m glad that you don’t make me fight for your love, and I want you to know <span className={spanStyles}>I’ll never make you fight for mine.</span> You’ve brought me joy in ways I didn’t even know made me happy. It’s like we’re in sync, you just always know how I feel, and I wanna be that for you too. Every day you make me feel so appreciated. I can’t count the amount of times I wanted to go crazy because <span className={spanStyles}>I love you so much I can’t describe it.</span> Every single day I wake up, I’m grateful that you’re mine. I love you so much no matter what. You’ve helped me so much, every time I was sad, angry, or had no clue what was going on. You’ve made me trust you so quickly I think it’s a world record.  So for being the person my brain defies any and all logic around, <span className={spanStyles}>will you be my valentine?</span></p>
        <div className="flex flex-row justify-center">
          <button id="yes" className={buttonStyles} onClick={() => setYes(true)}>Yes</button>
          <button id="no" className={buttonStyles} onClick={() => setYes(true)} onMouseEnter={() => alert("Don't even think about it, you're mine :3")}>No</button>
        </div>
      </main>
    </>
  )
}

export default App
