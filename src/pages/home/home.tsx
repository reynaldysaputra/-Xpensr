import * as React from 'react';
import TopFold from '../../components/top-fold/top-fold';
import './home.css'

interface IHomePageProps {
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return(
    <div className='home'>
      <TopFold/>
    </div>
  )
};

export default HomePage;
