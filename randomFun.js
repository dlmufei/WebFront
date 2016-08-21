//获取一个istart~iend之间的随机数
function getRandom(istart,iend){
	var iNum=istart-iend+1;
	return Math.floor(Math.random()*iNum+istart);
}
