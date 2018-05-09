# juiceBar
Demo for kiosk and kitchen view
<p>This project skeleton gives a folder structure and a basic communication pattern to quickly build prototypes of real-time apps. 

With only fundamental pattern matching abilities and basic HTML/CSS/JS knowledge you will be able to create functional prototypes of web apps. The skeleton code makes use of the modules/frameworks [express js](https://expressjs.com), [socket.io](http://socket.io), and [vue js](https://vuejs.org/) but for prototyping purposes you will most likely not need to understand these libraries very well.

Do not use this skeleton code for creating production apps. Security and stability have not been considered.

## Getting started

1. Install [Node JS](https://nodejs.org)
2. Clone or download (and unzip) this repo
3. Navigate to the resulting folder in a command line tool (you know that you are in the right folder if it contains the file structure above)
4. Type `npm install` and wait while magic is installing the necessary libraries, which are specified in the file package.json (Don't worry about the npm warning at the end: "No repository field")
5. Type `node app.js` to start the server
6. Use a web browser to check what is happening at `localhost:3000/front.html`
7. Use a web browser to check what is happening at `localhost:3000/kitchen.html` or use another device to check what is happening at `<your IP address>:3000/kitchen.html` (for this you may need to adjust your computer's firewall to allow connections to Node)
8. When you other some standard drinks or DIY drinks in kiosk view, your order will appear in the kitchen view. 

That should be enough to get started. Happy tinkering!


## Who did what: 

CODE: 
Lidong: Kitchen view HTML/CSS, JS, make the interface of the kitchen ready, connect kitchen to standard drinks’ part, improve the HTML/CSS of DIY part

Shuyang: basic element HTML/CSS for each view, Payment successful view HTML/CSS, yourCart view(unused), JS for menu and standard drinks view, make the interface of the standard and DIY part ready, connect kitchen to DIY part, improve the HTML/CSS in standard drinks’ view, establish the GitHub repository. JSON data of standard drinks and ingredients
 
Sjoerd: original DIY view HTML/CSS, JS
 
Amanda: connect front page and DIY page with menu page, HTML/CSS for menu and standard drinks, type the ingredients, search the ingredients’ image and put them in CSV file. List the standard drinks

Rui: helped doing menu view
</p>
