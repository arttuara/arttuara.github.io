This a readme.

### Development flow

- Create a new branch out of master. Name it according to the fix or feature. Add Jira ticket prefix in the name if available.
  - `git checkout -b ＜new-branch＞`
- Implement the needed change and verify locally and/or by deploying to the dev-environment
- Don't forget to update README.md if needed
- Before creating a pull request, pull changes from master and rebase your commits:
  - `git checkout master`
  - `git fetch -p`
  - `git pull origin master`
  - `git checkout ＜your-branch＞`
  - Squash commits to a single commit to keep the commits readable
  - `git rebase -i HEAD~X` where X is the number of commits in your branch
    - `pick` only one commit and `squash` the rest. Fix the commit message to be as informative as possible
    - You need to use `git push --force-with-lease` when pushing the squashed commit to the remote branch
    - If squashing is not familiar check more info from [here](https://medium.com/@slamflipstrom/a-beginners-guide-to-squashing-commits-with-git-rebase-8185cf6e62ec)
  - Push your changes to git and create a new pull request. Add at least one reviewer and relevant comments in the pull request
  - Once the pull request is accepted, merge to master and deploy the final version to dev/test/prod environmets. **REMEMBER TO TEST BEFORE PUSHING TO PRODUCTION**