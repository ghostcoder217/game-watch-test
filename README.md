# GameWatch Test
The book "The Lean Startup by Eric Ries" describes how startups should be learning institutions instead of businesses since we don't know what consumers want
This website tests the appeal for my service Game Watch by providing a landing page and an experimental event for people to join. It also collects statistics.
This website was hacked together within two days, it shows my ability to push medium quality code in small timeframes

## How to run

Run Commands

`npm install`

`npm run dev`

If you want to run the events page properly you will have to configure a MySQL database with the `sql/generate-db.sql` script and update the `helpers/globals.js` file

Then you will need to uncomment the statistics collection block in `index.js`

Website should run on localhost:80

## Folder Structure

* app -> front end dev files, are put through build tools into '/public' and/or '/views'
* batch_files -> automation scripts
* doc -> Information to be read before joining project
* public -> Assets that can be downloaded by the client for the front end
* routes -> Handlers for the different URL's and request methods (GET, POST, DELETE)
* sql -> Database creation / management scripts
* views -> Where the html files (.ejs) are stored so they can be rendered by express
* index.js -> Entry point
