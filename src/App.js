import { BrowserRouter as Router } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import {Helmet } from 'react-helmet'
function App() {
  return (
    <Router>
      <Helmet>
        <title>Rivita - Krovinių gabenimas geležinkelio transportu</title>
        <meta name='description' content="Krovinių ekspedijavimas geležinkelio transportu"/>
      </Helmet>
      <HomeScreen />
    </Router>
  );
}

export default App;
