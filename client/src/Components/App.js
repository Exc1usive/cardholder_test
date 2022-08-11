import Sidemenu from "./Sidemenu"
import Cardmenu from "./Cardmenu";
import React, { useState } from 'react'

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const [updateForm, setUpdateForm] = useState(true)
  const [id] = useState("62f3f90eff26bfc3d7624781")
  const listCurrency = ['UAH', 'USD', 'EUR']
  return (

    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Sidemenu 
          updateForm={updateForm}
          setUpdateForm={setUpdateForm}
          id={id}
          listCurrency={listCurrency}
        />
        <Cardmenu 
          updateForm={updateForm}
          setUpdateForm={setUpdateForm}
          id={id}
          listCurrency={listCurrency}
        />
      </div>
    </ThemeProvider>


  );
}

export default App;
