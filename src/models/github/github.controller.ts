import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';
import ICommit from 'src/interfaces/commit.interface';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('/commits/:repo/:branch?')
  getCommits(
    @Param('repo') repo: string,
    @Param('branch') branch: string
  ): Promise<ICommit[]> {
    return this.githubService.getCommits(repo, branch);
  }
}
