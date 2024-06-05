import React from "react"
export default function Faq (props){
const [isShown, setIsShown] = React.useState(false)

function handleIsShown(){
  setIsShown(prevShown => !prevShown)
}
  return (
    <div onClick = {handleIsShown} className="mx-auto md: max-w-2xl border border-gray-700 rounded-t-md mb-2 hover:bg-gray-800 cursor-pointer">
      <div className="mt-6 ml-4">
        <div className="flex items-center cursor-pointer mb-4 mr-4">
            <h3 className="mb-2 mr-auto text-md text-white">{props.question}</h3>

          
            {isShown===false && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>}

            {isShown && <svg xlmns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>}

        </div>
        {isShown && <p className="text-left mb-4">{props.answer}</p>}

      </div>
    </div>
  )
}