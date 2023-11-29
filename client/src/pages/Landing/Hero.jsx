import { useStoreContext } from "../../utils/store";

function Hero() {
  const [state, dispatch] = useStoreContext();

  return (
    <>
      <h1>{state.user ? `Welcome, ${state.user.firstName}` : 'Welcome to the Auth App'}</h1>
      <p>The place where everyone comes to authenticate</p>
    </>
  )
}

export default Hero