module.exports = {
  apps: [
    {
      name: process.env.APPNAME || 'portal-web',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      max_memory_restart: '512M',
      watch: false,
      ignore_watch: ['node_modules'],
      autorestart: true
    }
  ]
};
