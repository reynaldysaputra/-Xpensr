import * as React from 'react';
import ExpenseList from '../../components/expense-list';
import TopFold from '../../components/top-fold/top-fold';
import { ScrollContext } from '../../utils/scrollObserver';
import './home.css'

interface IHomePageProps {
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const { scrollY } = React.useContext(ScrollContext);
  const refContainer = React.useRef<HTMLDivElement>(null);
  const { current: elContainer } = refContainer;
  let progress = 0;

  if(elContainer){
    progress = Math.min(1, scrollY / elContainer.clientHeight);
    console.log(progress)
  }

  return(
    <div className='home' ref={refContainer}>
      <TopFold/>
      <ExpenseList/>
    </div>
  )
};

export default HomePage;
