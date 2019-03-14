# CCore

This project houses the code for the website at ccore.iu.edu, which is used to communicate information 
about the CCore project and get people started with using its projects' APIs.

## Making a preview/staging site

For the remainder of these instructions, the term `origin` will refer to your fork's `ccore` GitHub repo, 
and the term `upstream` will refer to the `indiana-university/ccore` repo. You'll be instructed on how to create the 
upstream remote in the instructions below.

### Fork to your GitHub.com account

 1. [Go to the original CCore communications site](https://github.com/indiana-university/ccore).
 2. To the right of the repo name will be three badges that show the watchers, stars, and forks of the repo. Click the 'fork' button.
 3. Go to your forked version of the repo and copy the clone url.

### Clone the fork locally

On your local terminal, change to the parent directory where you want the clone to live.

Then `$ git clone clone-url`

### Add the indiana-university/ccore repo as a git remote

```
# Adds a remote link called 'upstream' to the ccore repo in the Indiana University org 
$ git remote add upstream https://github.com/indiana-university/ccore.git
```

### Prevent changes to upstream CNAME file

If you need to make changes to the CNAME file but don't want it to affect the upstream repo, you can use the `update-index` command in git.

```
# This tells git to ignore any local changes to the CNAME file
$ git update-index --skip-worktree CNAME
```


The `--skip-worktree` flag will ignore any changes to the file made after it was flagged. It will be read as though it is perpetually up-to-date.

## Workflow and making changes

To make changes to the site, you first make a new branch. In your own fork you can do what you want, 
but we prefer the `feature/short-description-of-feature` naming convention for feature branches.

### Make a new branch

On the command-line, use the following commands:

```
# Creates the branch
$ git checkout -b your_branch_name

# pushes the branch to the origin remote and tracks it (the '-u' tells git to do the tracking)
$ git push -u origin your_branch_name
```

### Make your changes and commit them to your GitHub repo

```
# Add all files that have changed
$ git add .

# Commit the changes
$ git commit -m"<commit message>"

# Push changes up to your GitHub version of the branch
$ git push origin
```

### Merge, preview, and make a PR to the real main CCore repo 

#### Make a PR into your master branch on GitHub

Make sure you're in your fork and click the "Make pull request" button. Or if you've recently pushed your branch to 
your repo, GitHub will prompt you to make a PR and you can just click the green "Compare & pull request" button.

In both cases, you'll probably have to change what repo you're pushing into. It seems by default, GitHub will 
assume you're going to make a PR on the upstream version of the repo. Select the proper repo versions and branches, 
fill in a description of the changes, and make the PR by clicking the "Create pull request" button.

Now you can make sure everything is as you intended; I usually do a once over to make sure the changes look OK before merging.

#### Preview the changes to the site at https://<your-username>.github.io/ccore

Once merged, you should be able to preview the changes.

#### Make a PR to the upstream/develop branch

Make a branch from your master branch. Select the master branch from the branch drop down. Once the master branch 
loads, in the same branch dropdown, type a name for a feature branch for the PR. Preferably, it should be in the format 
of `feature/<change-description>`. 

Using your new branch make a PR to the upstream develop branch similar to how you did above.

Once created, tell everyone so we can get people to check the code and test it.

#### Make a PR from upstream develop to upstream master

This PR is a "release" PR so you are creating a branch from `develop` then making a PR into `master` 
in the `indiana-university/ccore` repo. Name the branch `release/<release-description>`.

Once this is reviewed and merged, the site will be updated automatically.  
