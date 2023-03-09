interface ICommitAuthor {
  handle: string;
  alias: string;
  email: string;
  profile_url: string;
  avatar_url: string;
}

export default interface ICommit {
  author: ICommitAuthor;
  date: string;
  message: string;
  html_url: string;
}