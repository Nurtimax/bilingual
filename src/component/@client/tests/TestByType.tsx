import React, { FC } from 'react';

import TestDescriptionImage from './components/DescriptionImage';
import TestSelect from './components/TestSelect';
import PracticeTest from './components/PracticeTest';
import HighlightsAnswer from './components/HighlightsAnswer';
import SelectMainIdea from './components/SelectMainIdea';

export type TestType = 'descriptionImage' | 'select' | 'practice' | 'highlight' | 'mainIdea';

interface ITestByTypeProps {
   type: TestType;
}

const TestByType: FC<ITestByTypeProps> = ({ type }) => {
   if (type === 'descriptionImage') {
      return <TestDescriptionImage />;
   }

   if (type === 'select') {
      return <TestSelect />;
   }

   if (type === 'practice') {
      return <PracticeTest />;
   }

   if (type === 'highlight') {
      return <HighlightsAnswer />;
   }

   if (type === 'mainIdea') {
      return <SelectMainIdea />;
   }

   return <div>TestByType</div>;
};

export default TestByType;
