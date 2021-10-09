This lab is based on [This](https://cs.calvin.edu/courses/cs/262/kvlinden/06hci/lab.html).


1.)//What do the hooks in this code do?

The two hooks at the top set the isLoading to true by default and data to an empty array.

The Effect Hook calls the getBooks function which will run asynchronously to the whole program.


2.)//Modify the URL to some invalid value and explain how the code responds.

There is no error dislayed on the screen. To be more accurate, nothing is displayed on the screen, it's blank. The error is handled discretely.

The code then sets the setLoading to false regardless of the outcome.
