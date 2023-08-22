import React from "./componentes/header"

export default function App() {
  return (
    <>
      <div className="container">
        <cabecalho></cabecalho>
        <header>
          <h1>Vite + React</h1>
        </header>

        <section>
          {}
          <p>
            <a href="/">Home Page</a>
            <button onClick={()=> alert ("Hello Word")}>
              </p>Click
              </button>
          </p>
        </section>
      </div>
    </>
  )
}
