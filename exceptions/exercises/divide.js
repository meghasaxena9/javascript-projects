function division(numerator, denominator) {
    if (denominator === 0) {
       throw Error('You cannot divide numerator by zero!');
    }
    return numerator/denominator;
 }
