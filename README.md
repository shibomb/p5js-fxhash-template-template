# p5.js fx(hash) template template

This is a template of 'template for an art project using p5.js and fx(hash).'

- p5.js https://p5js.org
- fx(hash) https://www.fxhash.xyz/

# Structure of this template util

- root/
  - captures/
    - \*.jpg - a captured images you tested capture.
  - projects/
    - \*/ - art project dir, you created.
  - templates/
    - fxhash/ - fx(hash) lib and template.
    - p5js/ - p5.js lib and template.
  - .env - config for utility.
  - \*.sh - utilty scritpts.
  - README.md - this file.
  - .gitignore - git ignore file.

# Structure of one art PROJECT you created.

- root/projects/PROJECT/
  - LICENSE - licensing your art and libs.
  - index.html - html
  - styles.css - css
  - sketch.js - your p5.js sketch.
  - p5.min.js - p5js lib.
  - fxhash.js - fx(hash) lib.
  - index.js - fx(hash) params definition.

# Prepare

## for Mac

1. install node.js, npm

2. install fxhash to global

```
npm i -g @fxhash
```

## for Win

1. install node.js, npm

2. install fxhash cli to global

```
npm i -g @fxhash/cli
```

3. (Set-ExcutionPolicy, If warning displayed to run.)

# How to use (A. use shortcut scripts)

## Create new

### 0. prepare config .env once.

```
ARTIST="your name"
LICENSE="CC BY-NC-ND 4.0"
```

see [fx(hash) doc : Licensing your Project](https://fxhash-documentation.super.site/licensing-your-project)

### 1. Copy template to new project directory.

4 patterns.

```sh
# auto project name ymdhis with p5js and fxhash
## mac
./create.sh
## win
.\wcreate.ps1

or

# auto project name ymdhis with p5js only
## mac
./create.sh 0
## win
.\wcreate.ps1 0

or

# use PROJECT name with p5js and fxhash
## mac
./create.sh [PROJECT]
## win
.\wcreate.ps1 [PROJECT]

or

# use PROJECT name with p5js only
## mac
./create.sh [PROJECT] 0
## win
.\wcreate.ps1 [PROJECT] 0
```

## Development

### 1. (with fxhash) Run dev server

```sh
## mac
./dev.sh [PROJECT]
## wim
.\wdev.ps1 [PROJECT]
```

### 1. (without fxhash) Live preview

Preview your indx.html by VSCode live preview extension.

### 2. Let's coding with p5.js in sketch.js.

### 3. commit and push to git repos

```sh
# with auto YMDHIS
## mac
./gitcommit.sh
## win
.\wgitcommit.ps1

or

# with message
## mac
./gitcommit.sh [MESSAGE]
## win
.\wgitcommit.ps1 [MESSAGE]
```

## Release

### 1. Create upload.zip

```sh
## mac
./build.sh [PROJECT]
## win
.\wbuild.ps1 [PROJECT]
```

### 2. Test capture

```sh
## mac
./capture.sh [PROJECT]
## win
.\wbuild.ps1 [PROJECT]
```

### 3. Upload the upload.zip on fx(hash)

[mint generative on fx(hash)](https://www.fxhash.xyz/mint-generative/)

# How to use (B. self operation)

Sorry, this entry is only for Mac.

If you are on Windows, please read the handling of folders and files accordingly, and replace "npx fxhash" with the [@fxhash/cli](https://github.com/fxhash/fxhash-package/tree/main/packages/fxhash-cli) command.

## Create new

Create a directory for each art project.

### 1. Copy template to new project directory

```sh
cp -rf ./templates/p5js ./projects/[PROJECT]
cp -rf ./templates/fxhash/* ./projects/[PROJECT]
cd ./projects/[PROJECT]
npx fxhash update
```

### 2. Change art name, artist name and license.

#### target files

- ./projects/[PROJECT]/index.html
- ./projects/[PROJECT]/LICENSE
- ./projects/[PROJECT]/sketch.js

#### replace

- [ART]
- [ARTIST]
- [LICENSE]. see [fx(hash) doc : Licensing your Project](https://fxhash-documentation.super.site/licensing-your-project)

## Development

### 1. Run dev server

```sh
cd ./projects/[PROJECT]
npx fxhash dev
```

### 2. Let's coding with p5.js in sketch.js.

### 3. commit and push to git repos

```sh
cd ./projects/[PROJECT]
git add .
git commit -m [MESSAGE]
git push
```

## Release

### 1. Create upload.zip

```sh
cd ./projects/[PROJECT]
npx fxhash build
```

### 2. Test capture

```sh
cd ./projects/[PROJECT]
npx fxhash capture
mv ./capture-*.jpg ../../captures/
```

### 3. Upload the upload.zip on fx(hash)

[mint generative on fx(hash)](https://www.fxhash.xyz/mint-generative/)

---

# Links

- p5.js https://p5js.org
- p5.js Japanese Docs https://p5js-i18n-ja.pages.dev/ja/
- fx(hash) https://fxhash.xyz
- fx(hash) document https://fxhash-documentation.super.site
- fx(hash) CLI Usage https://fxhash-documentation.super.site/cli-usage
- @fxhash/Cli https://github.com/fxhash/fxhash-package/tree/main/packages/fxhash-cli
