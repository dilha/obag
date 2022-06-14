module.exports = {
  apps: [
    {
      name: 'obag',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env_production: {
        PORT: 3000,
        NODE_ENV: 'production',
      },
    },
  ],
}
