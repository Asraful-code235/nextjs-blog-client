// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({
      success: true,
      message: 'User api is working',
    });
  } else {
    res.status(200).json({
      success: true,
      message: 'This is for other methods',
    });
  }
}
