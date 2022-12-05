import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function Home() {
  const islogin = useSelector(state => state.auth.islogin);

  return !islogin ? (
    <Redirect to="/login" />
  ) : (
    <div>
      <h1> Home </h1>
    </div>
  );
}

export default Home;
