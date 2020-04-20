
function omega (param)
{
    let the_array = [];
    for(let i = 1; i <= param; i++)
    {
        if((i % 2 === 0) && (i % 3 === 0) && (i % 5 === 0))
        {
            the_array.push("yu-gi-oh");
        }
        else if ((i % 2 === 0) && (i % 3 === 0)) 
        {
            the_array.push("yu-gi");
        }
        else if ((i % 2 === 0) && (i % 5 === 0)) 
        {
            the_array.push("yu-oh");
        }
        else if ((i % 3 === 0) && (i % 5 === 0)) 
        {
            the_array.push("gi-oh");
        }
        else if(i % 2 === 0)
        {
            the_array.push("yu");
        }
        else if (i % 3 === 0) 
        {
            the_array.push("gi");

        }
        else if (i % 5 === 0) 
        {
            the_array.push("oh");
        }
        else
        {
            the_array.push(i);
        }
    }
    return the_array;
}

omega(100);