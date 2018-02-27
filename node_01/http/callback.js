function learn(some){
	console.log(some);
};

function we(callback,str){
	str=str+'is cool!';
	callback(str);
}

we(learn,'node.js');
