import { Octokit } from "octokit";
import ICommit from "src/interfaces/commit.interface";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

class OctokitService {
  static async getCommits(repo: string, branch: string = 'master'): Promise<ICommit[]>{
    try{
      let { data } = await octokit.request(`GET /repos/${process.env.GITHUB_OWNER}/${repo}/commits`, {
        sha: branch,
        headers: { 'X-GitHub-Api-Version': '2022-11-28' }
      });
      return data.map( (el: any) => {
        return{
          author: {
            handle: el.author?.login,
            alias: el.commit?.author?.name,
            email: el.commit?.author?.email,
            profile_url: el.author?.html_url,
            avatar_url: el.author?.avatar_url
          },
          date: el.commit?.author?.date,
          message: el.commit?.message,
          html_url: el.html_url,
        }
      });
    }catch(error){
      return error.message;
    }
  }
}

export default OctokitService;