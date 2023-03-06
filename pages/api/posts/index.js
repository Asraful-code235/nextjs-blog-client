export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.json({ method: 'GET', endpoints: 'User' });
      break;
    case 'POST':
      res.json({ method: 'POST', endpoints: 'USER' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
