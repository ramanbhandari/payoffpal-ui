const ENV = 'development';

const config = {
  development: {
    apiBaseUrl: 'http://localhost:3000/',
  },
  production: {
  },
};

export default config[ENV];
