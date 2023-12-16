# fx(hash) p5.js template template

This is a template of 'template for an art project using fx(hash) and p5.js.'

- fx(hash) https://www.fxhash.xyz/
- p5.js https://p5js.org

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

# How to use (A. use shortcut scripts)

## Create new

### 0. prepare config .env once.

```
ARTIST="your name"
LICENSE="CC BY-NC-ND 4.0"
```

see [fx(hash) doc : Licensing your Project](https://fxhash-documentation.super.site/licensing-your-project)

### 1. Copy template to new project directory.

```sh
# use p5js and fxhash
./create.sh [PROJECT]
```

or

```sh
# use p5js only
./create.sh [PROJECT] 0
```

## Development

### 1. Run dev server

```sh
./dev.sh [PROJECT]
```

### 2. Let's coding with p5.js in sketch.js.

## Release

### 1. Create upload.zip

```sh
./build.sh [PROJECT]
```

### 2. Test capture

```sh
./capture.sh [PROJECT]
```

### 3. Upload the upload.zip on fx(hash)

[mint generative on fx(hash)](https://www.fxhash.xyz/mint-generative/)

# How to use (B. self operation)

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
