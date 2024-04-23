
import Router from './routers/router'
import './styles/App.css'
import ThemProvider from './layout/themProvider';


/* const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
}); */




function App() {


  return (
    <ThemProvider>
      <Router/>
      </ThemProvider>
  )
}

export default App
