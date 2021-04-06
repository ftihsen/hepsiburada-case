import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header, ProducList, SideBar, SubHeader } from 'components';
import { getMyBasket } from 'store/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyBasket());
  }, []);

  return (
    <>
      <Header />
      <div className="content">
        <SubHeader />
        <div style={{ display: 'flex' }}>
          <SideBar />
          <main>
            <ProducList />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
