import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';


const withAuth = (WrappedComponent: any) => {
  const ComponentWithAuth = (props: any) => {
    const cookies = new Cookies()
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const checkAuthentication = async () => {
        const token = cookies.get('token');

        if (!token) {
          router.push('/login');
        } else {
          setIsLoggedIn(true);
        }
      };

      checkAuthentication();
    }, []);

    if (!isLoggedIn) {
      // You can show a loading spinner or a message instead
      return <p>Loading...</p>

    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
