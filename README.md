# MRRT React architecture by upmedic team
upmedic team presents brand new approach to editing radiological reports templates by
using Slate.js backed by MRRT standards provided by IHE.

MRRT templates are html 5 files (only a subset of the standard)  with labels, inputs and metadata and are used by radiologists to define standardized templates for medical documents. The full specification is available here: https://ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_MRRT.pdf

MRRT templates are publicly available at radreport.org and many doctors speaking different languages already published hundrets of standardized documents in order to support the community.


## What's in this repo
We collected results of our experiments with editing MRRT templates in a web browser using react backed by slate.js and we publish an architecture that might be useful for your own implementations of template editors.

## What's not in this repo
Another piece of software is needed in order to create a proper report having MRRT template. Our software supports it and if you are interested in getting to know more about it, visit www.upmedic.pl/en/ and contact us


## Try it
clone the repo
``` bash
cd mmrrt-react
npm install
npm start
```
