# cookie-stand
This is a READ.ME for the Pat's Salmon Cookie (fictional business) website. It is a project undertaken for learning purposes while at Code Fellows in Seattle, WA.

## Overview

This is a website for a salmon cookie stand that a fictional business in seattle, selling a fictional product: salmon cookies.

## Purpose

The purpose of this project is to further learn how to manipulate html using javascript and css. This project features the following techniques:
* Tables
* Forms
* DOM manipulation
* Event Listeners
* Constructor Functions

## Contents

This website will feature a home page for the business including contact information and locations for sale. It will also have a backend/admin page to display the business owner the sales statistics he has asked for.

It currently has 5 store locations listed on the sales page. These are dynamically displayed javacript tables which will can update with by changing only one line of code!

The sales.html page also includes a form to enter:
* Store Name
* Minimum Customers Per Hour
* Maximum Customers Per Hour
* Average Cookies bought per customer visit
Fill out the form and click submit and the table will reflect the daily totals from that store as well. The form checks to see if the new store being entered is already in the table and if so does not allow it to be resubmitted.

## Styling
This website makes use of the 960 framework which can be found here: https://960.gs/

It is used as the baseline formatting for layout, then specific styles to font and content are made to style.css.

## Future Work
If we were to build this page out further here are some ideas as to what would go into it.

Home Page Improvements for Future:
* Adding map to show locations in iframe
* Streaming social media feed (not place holder)

Sales Admin Page
* Table displays the min customer and max customer values to the admin
* Table allows user to update the provided values for each store
* Table displays some sort of graph using the data entered