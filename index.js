let rules = []

// First load proxy rules
try {
  rules = require('./rules')
} catch (e) {
  console.log(e)
}

const proxy = require('redbird')({
  bunyan: {
    name: 'swhurl-proxy',
    level: 'info'
  },
  port: 3080,
  letsencrypt: {
    path: `${__dirname}/certs`,
    port: 9999
  },
  ssl: {
    redirect: true,
    redirectPort: 443,
    port: 3443
  }
})

// Register rules with Redbird proxy
rules.forEach(register)

function register(rule) {
  const { source, host } = rule
  return proxy.register(source, `http://${host.name}:${host.port}`, {
    ssl: {
      port: host.port,
      letsencrypt: {
        email: 'sam@swhurl.com',
        production: true
      }
    }
  })
}
