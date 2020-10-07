// import axios from 'axios';
const axios = require('axios');
const { model } = require('mongoose');

const getWeVoteId = () => {
  return axios.get('https://api.wevoteusa.org/apis/v1/deviceIdGenerate');
};


module.exports = getWeVoteId;