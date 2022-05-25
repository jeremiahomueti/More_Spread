const arr1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

let arr2;
(function ()
{
    arr2 = [...arr1]; 
    arr1[0] = 'potato'
}
) ();

console.log(arr1);

//now arr2 has copied the actual values or contents of arr1

//whereas, arr1 has on the other hand, updated as set in line7.

//Haha!! BRILLIANTOoo