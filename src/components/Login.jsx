import React from 'react';
import LoginNavbar from '../components/style-components/Login-Nav.jsx';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import logo from '../../assets/myvote_lg.png';

const Login = () => (
  <div className='login-page'>
    <LoginNavbar />
    <div className='login-form'>
      <Grid container style={{ minHeight: '100vh' }} justify='center'>
        <Grid
          container
          item
          xs={12}
          sm={6}
          style={{ padding: 10 }}
          alignItems='center'
          justify='space-between'
          direction='column'
        >
          <div />
          <div
            style={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}
          >
            <Grid container justify='center'>
              <img src={logo} width={600} alt='logo' />
            </Grid>
            <TextField
              label='Email Address'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label='Password'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ height: 20 }} />
            <Button color='primary' variant='contained'>
              Log in
            </Button>
            <div style={{ height: 20 }} />

            <Button color='primary' variant='contained' href='/auth/google'>
              Sign in with Google
            </Button>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  </div>
);

export default Login;
