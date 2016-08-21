//2016-08-21格式的日期
function getMyDate(){
	var d=new Date();
	var year=d.getFullYear();//返回四位数字的年
	var month=d.getMonth()+1;//0是1月，11是12月
	//转换成两位的数字
	month=month<10?'0'+month:month;
	var day=d.getDate();
	day=day<10?'0'+day:day;
	return year+'-'+month+'-'+day;
}
