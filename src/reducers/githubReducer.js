export const githubInitialState = {
  appError: undefined,
  hasUser: false,
  loading: false,
  user: {
    id: undefined,
    avatar: undefined,
    login: undefined,
    name: undefined,
    html_url: undefined,
    blog: undefined,
    company: undefined,
    location: undefined,
    followers: 0,
    following: 0,
    public_gists: 0,
    public_repos: 0,
  },
  repositories: [],
  starred: [],
};

export const githubReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        hasUser: true,
        appError: undefined,
      };
    case 'SET_ERROR':
      return {
        ...state,
        appError: action.payload,
        hasUser: false,
      };
    case 'SET_REPOS':
      return {
        ...state,
        repositories: action.payload,
        appError: undefined,
      };
    case 'SET_STARRED':
      return {
        ...state,
        starred: action.payload,
        appError: undefined,
      };
    default:
      return state;
  }
};