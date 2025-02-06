import Chat from "./Chat"

const App = () => {
  return (
    <div className='flex flex-col gap-4 h-screen items-center justify-center bg-gradient-to-r from-orange-400 to-blue-500'>
      <div className="p-8 h-screen w-full flex items-center justify-center">
        <Chat />
      </div>
    </div>
  )
}

export default App
