
import './App.css';
import { Card } from "./Components/Card";
import  Title  from "./Components/Title.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Card title="Save" />
          <Card title="Cancel" />
          <Card title="Renting" />
          <Card title="Buy" />
          <Card title="set auction" />
          <br/>
          <Title title="You only live once, but if you do it right, once is enough. ― Mae West" />
          <Title title="Insanity is doing the same thing, over and over again, but expecting different results. ― Narcotics Anonymous" />
          <Title title="It does not do to dwell on dreams and forget to live. ― J.K. Rowling, Harry Potter and the Sorcerer’s Stone" />
          <Title title="Sometimes the questions are complicated and the answers are simple. ― Dr. Seuss." />
          <Title title="You should learn from your competitor, but never copy. Copy and you die. – Jack Ma" />
          <br/>
        
      </header>
    </div>
  );
}

export default App;
