const {events} = require('./data.json')

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(events)
  } else {
    req.setHeader('Allow', ['GET'])
    req.status(405).json({message: `Method ${req.method} Not Allowed`})
  }
}
