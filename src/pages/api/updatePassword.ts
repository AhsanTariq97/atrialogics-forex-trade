import axios from 'axios';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { oldPassword, newPassword } = req.body;

    try {
      // Make a request to the updatePassword endpoint
      const response = await axios.post('/api/updatePassword', {
        oldPassword,
        newPassword,
      });

      // Handle the response and send it back
      res.status(response.status).json(response.data);
    } catch (error: any) {
      // Handle any errors
      const statusCode = error.response.status || 500;
      const errorMessage = error.response.data.message || 'Internal Server Error';
      res.status(statusCode).json({ message: errorMessage });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}