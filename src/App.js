import { IoFilter } from 'react-icons/io5'

import Header from './components/Header/Header'
import MainNav from './components/layout/MainNav/MainNav'
import Page from './components/layout/Page/Page'
import Nav from './components/Nav/Nav'
import View from './components/View/View'
import Wrapper from './components/layout/Wrapper/Wrapper'
import Card from './components/UI/Card/Card'
import Button from './components/UI/Button/Button'
import Search from './components/Search/Search'
import Users from './components/Users/Users'

function App() {
  return (
    <div className="main-layout">
      <MainNav />
      <Page>
        <Header />
        <Nav />
        <View>
          <Wrapper>
            <Card title="Total Customers" total="2,420" percent="20" />
            <Card title="Members" total="1,210" percent="15" />
            <Card title="Members" total="316" usersCount="yes" />
          </Wrapper>
          <Wrapper className="Wrapper--reverse">
            <Button className="Button--full">
              <span>
                <IoFilter />{' '}
              </span>
              Filters
            </Button>
            <Search />
          </Wrapper>
          <Users />
        </View>
      </Page>
    </div>
  )
}

export default App
