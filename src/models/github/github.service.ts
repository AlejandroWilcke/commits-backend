import { Injectable } from '@nestjs/common';
import OctokitService from 'src/config/octokit';
import ICommit from 'src/interfaces/commit.interface';

@Injectable()
export class GithubService {
  async getCommits(repo: string, branch: string = 'master'): Promise<ICommit[]> {
    return OctokitService.getCommits(repo, branch);
  }
}
