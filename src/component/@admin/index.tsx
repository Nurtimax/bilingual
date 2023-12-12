import React, { useMemo } from 'react';
import { IconButton, Stack, Switch, Typography } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';

import CustomTable, { ITableHeaders, ITableRow } from '../UI/table/CustomTable';

const tableHeaders: ITableHeaders[] = [
   { label: '', rowKey: 'title' },
   { label: '', rowKey: 'actions' }
];

const MainAdmin = () => {
   const data: ITableRow[] = useMemo(
      () => [
         {
            title: (
               <Typography color="#4C4859" variant="body2">
                  {'Test  number 1'}
               </Typography>
            ),
            actions: (
               <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={3} py={3}>
                  <Switch id="ios" />
                  <IconButton>
                     <EditNoteIcon />
                  </IconButton>
                  <IconButton>
                     <DeleteIcon />
                  </IconButton>
               </Stack>
            )
         }
      ],
      []
   );

   return <CustomTable tableHeaders={tableHeaders} tableRows={data} tableRowProps={{ sx: { px: 2 } }} />;
};

export default MainAdmin;
