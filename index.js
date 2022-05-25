//Using the Spread Operator to Evaluate Arrays In-Place

const arr1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

let arr2;
(function ()
{
    arr2 = arr1; 
    arr1[0] = 'potato'
}
) ();

console.log(arr2);

/* when you log arr2 to the console, you get potato in 
index[0] of arr2, even though, we only made that adjustment in 
arr1. Since we set arr2 = arr1 in line 8, that's why we're
having the outcome we're having, because they are equal. Arr1
is equal to arr2.

But what if we want to make arr1 a copy of arr2 instead.
We can use the spread array. Let's observe that change in
index1.js, where we replace arr2 = arr1 with, arr2 = ...arr1

Although, we can't simply leave the expression as ...arr1, 
because it's not going to work.

We'll have to include a bracket at both sides because the data 
in question is an array. 

...to be continued [see index1.js]...
*/