# HOW TO DEPLOY

Okay, so I'm dumb and DevOps isn't my forte yet, so here are the instructions on how to build, install and deploy this site:

**NOTE: I AM NOT DUMB, I KNOW I NEED A QA BRANCH**

For now, daddy is just going to push to prod and hope he doesn't break things.

## BUILD

1. Fork both the main and gh-branch of the repo
2. Clone your fork
3. In the Free-Comp-Sci folder, run `npm install` like you would for any npm project.
4. Congrats, you have built it.

## Deploy

After you have made your changes here is what you need to do:

1. Commit and push to your main branch fork, this the actual code you are pushing

Next, this is what you need to push for the gh-pages branch:

Note: For the following commands, if you are using vue, just copy paste them, if you are using react replace dist with build.
npm run build creates a directory with a production build of your app. In vue, that directory in named dist, in react is named build.

    git checkout --orphan gh-pages
    npm run build
    git --work-tree dist add --all
    git --work-tree dist commit -m 'Deploy'
    git push origin HEAD:gh-pages --force
    rm -r dist
    git checkout -f main
    git branch -D gh-pages

Congrats, you have now pushed to your fork and can now merge the forks.

In the future, I'm going to set up some Github Actions that will allow you to just push your main branch fork and everything else will automated in terms of building out the gh-pages.

In the far future, I'll hopefully have some funding and can push to a server with dynamic pagination, but that's for later lol.
