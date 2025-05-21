import React, { createContext, useCallback, useReducer } from "react";
import api from "../services/api";
import { githubInitialState, githubReducer } from '../reducers/githubReducer';

export const GithubContext = createContext({
  githubState: githubInitialState,
  getUser: () => {},
  getUserRepos: () => {},
  getUserStarred: () => {},
});

const GithubProvider = ({ children }) => {
  const [githubState, dispatch] = useReducer(githubReducer, githubInitialState);

  const getUser = (username) => {
    dispatch({ type: 'SET_LOADING', payload: true });

    api.get(`users/${username}`, {
      validateStatus: (status) => status < 300,
    })
      .then(({ data }) => {
        dispatch({
          type: 'SET_USER',
          payload: {
            id: data.id,
            avatar: data.avatar_url,
            login: data.login,
            name: data.name,
            html_url: data.html_url,
            blog: data.blog,
            company: data.company,
            location: data.location,
            followers: data.followers,
            following: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos,
          },
        });
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR', payload: error });
      })
      .finally(() => {
        dispatch({ type: 'SET_LOADING', payload: false });
      });
  };

  const getUserRepos = (username) => {
    api.get(`users/${username}/repos`)
      .then(({ data }) => {
        dispatch({ type: 'SET_REPOS', payload: data });
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR', payload: error });
      });
  };

  const getUserStarred = (username) => {
    api.get(`users/${username}/starred`)
      .then(({ data }) => {
        dispatch({ type: 'SET_STARRED', payload: data });
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR', payload: error });
      });
  };

  return (
    <GithubContext.Provider
      value={{
        githubState,
        getUser: useCallback(getUser, []),
        getUserRepos: useCallback(getUserRepos, []),
        getUserStarred: useCallback(getUserStarred, []),
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;