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
└── getTextFromImage.js
└── 📁images
    └── imageOne.jpg
    └── imageTwo.jpg
└── package-lock.json
└── package.json
└── readme.md
```
* Open terminal and execute

```bash
node getTextFromImage.js
```

* On success, we'll see
```bash
node getTextFromImage.js
Done extracting text!
```

* On error, we'll see
```bash
node getTextFromImage.js
Error processing images, got: {error.message}
```