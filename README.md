# Points & Co-ordinate Systems - SRIP, IIIT-H (2019)
The following work was done during my intern at [IIIT Hyderabad](https://www.iiit.ac.in/) in 2019. This work was done to replicate an java application in a web-browser using javascript. This is an open-source contribution <br>

## Objective:

Two dimensional points are represented as perpendicular distance from orthogonal axes, usually called X and Y. So (2,3) represents a point 2 units from the y-axis and 3 units from the x-axis. If the co-ordinate axes are non-orthogonal, the point represents distances taken parallel to the axes.

Three dimensional points are represented as distances from each of the three planes formed by the axes. So (2,3,4) represents a point 2 units from YZ-plane, 3 units from XZ-plane and 4 units from XY-plane.

Coordinates can be 'homogenized' by adding an extra value to the tuple. In 3 dimensions, points are represented as (x,y,z,w) which is equivalent to (x/w, y/w, z/w) in ordinary co-ordinates. This is a convenient representation used heavily in computer graphics as it allows writing the common operations such as translation as a linear product.


## Technical Details:
Languages used:
1.HTML
2.JavaScript
3.CSS


## Test Cases:

1.Co-Ordinates not in the range of the canvas
An error is shown which says to re enter co-ordinates in suitable range

2.Co-ordinates entered are not numbers
An error displayed shows to enter integer co-ordinate

3.Next button pressed after last piece of information
The next button is disabled or does not work

4.Entered value of W is a non-positive number 
Displays an error instructing user to enter W again

## To Run

1. Download this repo as a zip, and extract it.
2. Open the file Codes/proj1.html on the local browser
