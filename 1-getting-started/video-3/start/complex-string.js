'use strict';

let str = 'Excited that there are x days until Halloween!';

let halloweenDate = new Date(new Date().getFullYear(), 9, 31);

let complexStr = str.replace('x', dayCount(new Date, halloweenDate)); // this will replaxe the firs x in the sentence, which is in Excited

console.log(complexStr);

function dayCount(start, end) {
	return Math.round((end - start)/(1000*60*60*24)); // (ms*sec*min*hr)
}