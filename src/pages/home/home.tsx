import * as React from 'react';
import ExpenseList from '../../components/expense-list';
import TopFold from '../../components/top-fold/top-fold';
import './home.css'

interface IHomePageProps {
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return(
    <div className='home'>
      <TopFold/>
      <ExpenseList/>
    </div>
  )
};

export default HomePage;
