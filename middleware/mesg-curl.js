const message = `
WRONG
`

export default function ({ req, res }) {
  if (!req) { return } // Hack for build
  if (!process.server) { return }
  if (req.headers['user-agent'].startsWith('curl/')) {
    return res.end(message)
  }
}
