const users = [
  {
    id: 1,
    userName: 'Asraful Islam',
  },
  {
    id: 2,
    userName: 'John smith',
  },
];

export default function getusers(req, res) {
  const { pid } = req.query;
  const user = users.find((user) => user.id === parseInt(pid));

  if (!user) {
    return res.status(404).json({
      status: 404,
      message: 'Not found',
    });
  }

  res.json({ ...user });
}
