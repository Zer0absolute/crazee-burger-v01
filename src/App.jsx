import './App.css'

function App() {

  return (<div>
    <h1>Bienvenue chez nous !</h1>
    <br/>
    <h2>Connectez-vous</h2>
    <form>
      <input type={"text"} placeholder={"Entrez votre prénom..."} required/>
      <button>
        Accéder à votre espace
      </button>
    </form>
  </div>)
}

export default App
