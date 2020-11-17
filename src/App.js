function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p data-testid="test-p">
          Teste, testando.
        </p>
        <form data-testid="formTest" onSubmit={()=>{console.log('submit')}}>

        </form>
      </header>
    </div>
  );
}

export default App;
