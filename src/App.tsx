import { useEffect, useState } from 'react';
import Accordion from './components/Accordion';

import GlobalStyle from './styles/global';

function App() {
  const [jokes, setJokess] = useState([]);

  const fetchData = () => {
    fetch("https://official-joke-api.appspot.com/jokes/ten")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setJokess(data);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <GlobalStyle/>
      <main className='container'>
        <h1>Random Punchlines</h1>
        <Accordion items={jokes} />
      </main>
    </>
  );
}

export default App;