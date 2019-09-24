#Utils for Informer Java Upgrade

##InformerJavaUpgradeReports.ixp
The report export file contains two reports, both based off the one
provided by Entrinsik. Primary enhancement was providing a link to the report in question (I don't recall the delivered one having this, but this was a while ago :))

###Reports with Arrays in Calculated Columns Joins
Retrieves all reports using the .join() call which have to be updated
for Java8. Presents a link to the report in question, but not to the exact field

###Reports with JavaScript Arrays
Retrieves all reports that use array indexing (e.g. field[i]) so they
can be reviewed for Java8 readiness.

##ArrayJoin Bookmarklet.js
The general idea is, follow the link from the "Joins" report, then click on the first column which contains a .join() call. Run the bookmarklet, which will update the textarea containing the calculated column's JavaScript, validate that it looks reasonable, and move onto the next column if applicable.

The bookmarklet is provided as plain javascript, and as an [URL Encoded](https://www.w3schools.com/tags/ref_urlencode.asp) string.

In Chrome or Firefox you can add it to your toolbar by ensuring the bookmarks bar is visible, and adding a new link. Paste it in making sure you captured the javascript: at the start, and the semicolon at the end.

The bookmarklet does provide some basic sanity checks, and won't modify the code if there's more than one line. But it's intention is to save you from having to type the same boiler plate for every single report.
