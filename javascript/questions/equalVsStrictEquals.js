/*
What is the difference between the comparison operators == and ===?
== (equals)
    - tests for abstract equality
    - dows not test for data type
    -- Comparing number & string
        - string is converted to a number
        - comparison is mada
    -- Comparing boolean & non-boolean
        - non-boolena is converted to a boolean
        - comparison is made
    -- Comparing object & primitive data-type
        - object is converted to primitive data-type
        - comparison is made

=== (strict equals)
    - tests for strcit equality
    - dos test for data type
*/
console.log(7 == '7')
console.log(7 === '7')
