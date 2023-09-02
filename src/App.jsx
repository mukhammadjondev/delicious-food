import Category from './components/category'
import Search from './components/search'
import Pages from './pages/pages'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { GiKnifeFork } from 'react-icons/gi'

const App = () => {
  return <>
    <Nav>
      <GiKnifeFork />
      <Logo to={'/'}>delicious</Logo>
    </Nav>
    <Search />
    <Category />
    <Pages />
  </>
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
  padding: 1.5rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem
  }
`

export default App