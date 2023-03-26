let arry=[1,2,3,4,5,6]
function even(arry)
{
	var count=0;
	for(i=0;i<arry.length;i++)
	{
		if(arry[i]%2!=0)
		{
			count++;
		}
		
	}
	return count;
}
console.log	(even(arry));