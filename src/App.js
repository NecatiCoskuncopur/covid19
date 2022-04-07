import { useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container'; // npm install @mui/material @emotion/react @emotion/styled --force
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';

import covidLogo from './virus.svg'

import { fetchCountries } from './api'
import AreaChart from './components/AreaChart';

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState("turkey")

  useEffect(() => {
    const fetchCountriesData = async () => {
      const countries = await fetchCountries()
      setCountries(countries)
    };

    fetchCountriesData()
  }, [])
  return (
    <>
      <CssBaseline />
      <Container className='container' maxWidth="lg" >
        <Grid className='header' container>
          <img src={covidLogo} alt="covidlogo" />

          <FormControl className='form-control'>
            <Select
              value={country}
              onChange={e => setCountry(e.target.value)}
              className='select'
            >
              {
                countries.map((country, index) => (
                  <MenuItem key={index} value={country.Slug}>{country.Country}</MenuItem>
                ))
              }
            </Select>
          </FormControl>


          <Grid item xs={12}>
            <Paper>
              <AreaChart country={country} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
