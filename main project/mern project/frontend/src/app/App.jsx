import Editor from "@monaco-editor/react"

function App() {

  return (
    <>
      <main className="h-screen bg-gray-900 flex">
          <aside className="h-full w-1/4 bg-white rounded-1xl">

          </aside>
          <section className="h-full w-3/4 bg-gray-500 rounded-1xl">
              <Editor/>
          </section>
      </main>
    </>
  )
}

export default App
