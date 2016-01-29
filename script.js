console.log(_)


//Map
// map_.map(list, iteratee, [context])

var array = [7, 13, 11, 21, 42, 1880]

function map2 (arr) {
	newArray = _.map(arr, function(num){ return num * 2; });
	return newArray;
}

console.log(map2(array))

//Filter



//Reduce
// reduce_.reduce(list, iteratee, [memo], [context])

var str = "Gym Tan Luandry"

var reduceResult = _.reduce(
	str.split(' '),                                //List
	function (acronymSoFar, currentWord) {
		return acronymSoFar + currentWord[0] + '.'
	},                                             //iteratee
	'' 				                               //memo is the starting point...an array would start at 0
) 

console.log(reduceResult);


///Find :returns the first element that matches your criteria
//filter_.filter(list, predicate, [context]) 

var teddyBears = [
	{
		name       : 'Steve',
		fluffiness : 1,
		diet       : 'souls',
		huggability: 5,
		ownedBySean: true
	},
	{
		name       : 'Teddy Ruspin',
		fluffiness : 10,
		diet       : 'batterries',
		huggability: 5,
		ownedBySean: false
	},
	{
		name       : 'Ted',
		fluffiness : 1,
		diet       : 'children tears',
		huggability: 7,
		ownedBySean: true
	},
	{
		name       : 'Hulk',
		fluffiness : 10,
		diet       : 'batterries',
		huggability: 5,
		ownedBySean: false
	}
]


var huggyBear = _.find(teddyBears, function(bear) {
	return bear.huggability === 5
	})
console.log(huggyBear);


//Pluck
//_.pluck(list, propertyName)

function teddyDiet () {
	var diet = _.pluck(teddyBears, 'diet');
	return diet;
}

console.log(teddyDiet(teddyBears));

//---Uniq
//_.uniq(array, [isSorted], [iteratee]) 
console.log(_.uniq(teddyDiet(teddyBears)));


//Chain
//_.chain(obj) 
console.log(
_.chain(teddyBears) //chain and value are like the book ends
	.pluck('diet') 
	.uniq()        //Unique startsw roking on the array yeilded by .pluck()
	.value()       //Value returns the resulting array yielded by both .pluck() and .uniq()
)












