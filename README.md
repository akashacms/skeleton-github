# skeleton-github
Skeleton [AkashaCMS]((https://akashacms.com)) site for deployment to Github Pages - https://akashacms.github.io/skeleton-github/index.html

The repository is built as so:

```
$ npm install
$ npm run build
```

To deploy the site to Github such that it displays using [Github Pages](https://akashacms.github.io/skeleton-github/index.html), an additional two steps are required:

1. The files in `docs/` will have changed, and those changes must be committed to the local Git repository
1. The local Git repository must be pushed to Github

The Github repository is configured to display the content of the `docs/` directory on the GitHub pages URL for this repository.

