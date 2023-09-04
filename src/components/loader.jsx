import { styled } from "styled-components"

const Loader = () => {
  return (
    <SLoader>
      <img src="/loader.gif" alt="Loader" />
    </SLoader>
  )
}

const SLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Loader