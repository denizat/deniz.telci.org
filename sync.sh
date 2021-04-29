#!/bin/sh 
 
rsync -uvrP --delete-after ./build/ root@telci.org:/var/www/test.telci/ 
