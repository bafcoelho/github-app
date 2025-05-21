import AppError from "./components/AppError";
import Layout from "./components/Layout";
import NoSearch from "./components/NoSearch";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";


import useGitHub from './hooks/GithubHooks';

const App= () => {

const {githubState} = useGitHub();

  return (
        <Layout>
          {
            githubState.appError ? (
              <AppError message={githubState.appError.message} />
            ) : githubState.loading ? (
              <p>Loading...</p>
            ) : githubState.hasUser ? (
              <>
                <Profile />
                <Repositories />
              </>
            ) : (
              <NoSearch />
            )
          }
        </Layout>
  );
}

export default App;
