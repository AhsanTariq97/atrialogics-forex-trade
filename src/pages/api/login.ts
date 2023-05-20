export default function handler(req: any, res: any) {
    if (req.method === 'POST') {
      // Process the login request here
      const { email, password } = req.body;
      
      res.status(200).json(req.body)
      
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
