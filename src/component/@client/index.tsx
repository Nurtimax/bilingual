import { Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import ClientRole from './tests/components/ClientRole';
import List from './components/List';

const MainClientTest = () => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const getData = async () => {
         await axios.get('https://jsonplaceholder.typicode.com/todos');

         setLoading(false);
      };

      getData();
   }, []);

   if (loading) {
      return <ClientRole />;
   }

   return (
      <Box>
         <List array={[1]} />
      </Box>
   );
};

export default MainClientTest;
