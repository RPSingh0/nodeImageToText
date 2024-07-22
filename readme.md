### Installation

* Clone the repo with 
```bash
git clone https://github.com/RPSingh0/nodeImageToText
```
* Open the folder in vscode 
* Install the packages with

```bash
npm install
```
* Put the image files (.jpg, .png, .jpeg) under the folder named `images` in same directory
* The file system should look something like this
```
📁imageOCR
└── index.js
└── 📁images
    └── imageOne.jpg
    └── imageTwo.jpg
└── package-lock.json
└── package.json
└── readme.md
```
* Open terminal and execute

```bash
node index.js

# -or-

npm run extract-text
```

* On success, we'll see
```bash
Done extracting text!
```

* On error, we'll see
```bash
Error processing images, got: {error.message}
```