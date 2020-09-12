// Refactor the above code to use two arrow functions. Turn it into a one-liner.

const double = (arr) => 
    arr.map((val) => 
        val * 2;
    )


// Replace ALL functions with arrow functions:
const squareAndFindEvens = (numbers) => 
    numbers.map((num) =>
      num ** 2;
    ).filter((square) => 
      square % 2 === 0;
    );
