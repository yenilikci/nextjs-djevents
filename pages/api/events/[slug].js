const {events} = require('./data.json')

export default function handler(req, res) {
    const evt = events.filter(evt => evt.slug === req.query.slug)
    if (req.method === 'GET') {
        res.status(200).json(evt)
    } else {
        req.setHeader('Allow', ['GET'])
        req.status(405).json({message: `Method ${req.method} Not Allowed`})
    }
}

