"use client"

export default function Home() {
  const onPress1 = () => {
    const tag = document.getElementById("text-result") as unknown as HTMLInputElement;
    if (tag) {
      tag.value += "1"
    }
  }

  const onPress2 = () => {
    const tag = document.getElementById("text-result") as unknown as HTMLInputElement;
    if (tag) {
      tag.value += "2"
    }
  }
  const onPress3 = () => {
    const tag = document.getElementById("text-result") as unknown as HTMLInputElement;
    if (tag) {
      tag.value += "3"
    }
  }
  const onPress4 = () => {
    const tag = document.getElementById("text-result") as unknown as HTMLInputElement;
    if (tag) {
      tag.value += "4"
    }
  }
  const onPress5 = () => {
    const tag = document.getElementById("text-result") as unknown as HTMLInputElement;
    if (tag) {
      tag.value += "5"
    }
  }
  const onPress6 = () => {
    const tag = document.getElementById("text-result") as unknown as HTMLInputElement;
    if (tag) {
      tag.value += "6"
    }
  }
  const onPress7= () => {
    const tag = document.getElementById("text-result") as unknown as HTMLInputElement;
    if (tag) {
      tag.value += "7"
    }
  }
  const onPress8 = () => {
    const tag = document.getElementById("text-result") as unknown as HTMLInputElement;
    if (tag) {
      tag.value += "8"
    }
  }
  const onPress9 = () => {
    const tag = document.getElementById("text-result") as unknown as HTMLInputElement;
    if (tag) {
      tag.value += "9"
    }
  }
  const onPress0 = () => {
    const tag = document.getElementById("text-result") as unknown as HTMLInputElement;
    if (tag) {
      tag.value += "0"
    }
  }

  const onPressDot = () => {
    const tag = document.getElementById("text-result") as unknown as HTMLInputElement;
    if (tag) {
      tag.value += "."
    }
  }
  
  const onPressSub = () => {}
  const onPressAdd = () => {}
  const onPressMult = () => {}
  const onPressDiv = () => {}
  const onPressEq = () => {}

  return (
    <div className=" p-5 w-full bg-white">
      <div className=" w-1/2 justify-self-center">
      <span className=" text-center self-center justify-self-center text-[30px] text-emerald-700" id="text-welcome">Welcome</span>
        {/* TEXT INPUT */}
        <input type="text" placeholder="0.00" className=" w-full p-5 bg-[#333] rounded-sm text-[50px]" id="input-result"/>
      </div>
      {/*  1-3 */}
      <div className=" w-1/2 justify-self-center flex justify-center items-center m-3 p-2 gap-[20px]">
        <button className=" w-30 rounded-sm p-5 bg-emerald-700 cursor-pointer" onClick={onPress1}>
          <span className=" text-[50px]">1</span>
        </button>
        <button className=" w-30 rounded-sm p-5 bg-emerald-700 cursor-pointer" onClick={onPress2}>
          <span className=" text-[50px]">2</span>
        </button>
        <button className=" w-30 rounded-sm p-5 bg-emerald-700 cursor-pointer" onClick={onPress3}>
          <span className=" text-[50px]">3</span>
        </button>
        <button className=" w-30 rounded-sm p-5 bg-emerald-700 cursor-pointer" onClick={onPressSub}>
          <span className=" text-[50px]">-</span>
        </button>
      </div>
      {/* 4-6  */}
      <div className=" w-1/2 justify-self-center flex justify-center items-center m-3 p-2 gap-[20px]">
        <button className=" w-30 rounded-sm p-5 bg-emerald-700 cursor-pointer" onClick={onPress4}>
          <span className=" text-[50px]">4</span>
        </button>
        <button className=" w-30 rounded-sm p-5 bg-emerald-700 cursor-pointer" onClick={onPress5}>
          <span className=" text-[50px]">5</span>
        </button>
        <button className=" w-30 rounded-sm p-5 bg-emerald-700 cursor-pointer" onClick={onPress6}>
          <span className=" text-[50px]">6</span>
        </button>
        <button className=" w-30 rounded-sm p-5 bg-emerald-700 cursor-pointer" onClick={onPressAdd}>
          <span className=" text-[50px]">+</span>
        </button>
      </div>
      {/* 6-9 */}
      <div className=" w-1/2 justify-self-center flex justify-center items-center m-3 p-2 gap-[20px]">
        <button className=" w-30 rounded-sm p-5 bg-emerald-700 cursor-pointer" onClick={onPress7}>
          <span className=" text-[50px]">7</span>
        </button>
        <button className=" w-30 rounded-sm p-5 bg-emerald-700 cursor-pointer" onClick={onPress8}>
          <span className=" text-[50px]">8</span>
        </button>
        <button className=" w-30 rounded-sm p-5 bg-emerald-700 cursor-pointer" onClick={onPress9}>
          <span className=" text-[50px]">9</span>
        </button>
        <button className=" w-30 rounded-sm p-5 bg-emerald-700 cursor-pointer"
          onClick={onPressMult}>
          <span className=" text-[50px]">*</span>
        </button>
      </div>
      {/* 0-= */}
      <div className=" w-1/2 justify-self-center flex justify-center items-center m-3 p-2 gap-[20px]">
        <button className=" w-30 rounded-sm p-5 bg-emerald-700 cursor-pointer" onClick={onPress0}>
          <span className=" text-[50px]">0</span>
        </button>
        <button className=" w-30 rounded-sm p-5 bg-emerald-700 cursor-pointer" onClick={onPressDiv}>
          <span className=" text-[50px]">/</span>
        </button>
        <button className=" w-30 rounded-sm p-5 bg-emerald-700 cursor-pointer" onClick={onPressDot}>
          <span className=" text-[50px]">.</span>
        </button>
        <button className=" w-30 rounded-sm p-5 bg-emerald-700 cursor-pointer" onClick={onPressEq}>
          <span className=" text-[50px]">=</span>
        </button>
      </div>
    </div>
  );
}
