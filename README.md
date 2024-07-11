# GoldenSmile

# Working with Grid

1. To get started you have to define a container element as a grid with:
   display: grid;
2. set the column and row sizes with:
   grid-template-columns
   grid-template-rows;
3. place its child elements into the grid with:
   grid-column
   grid-row.

vertical (“column grid lines”) or horizontal (“row grid lines”)

# dealing with Grid

    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px;
    column-gap: 15px;
    row-gap: 10px;
