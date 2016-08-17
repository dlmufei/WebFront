function weic() {	
	$.ajax({
      	type: "POST",
        url: "http://url",
        data: {actId:"f9123b"},
        success: function (data) {
            console.log("系统提示", "success");
        },
        error: function (data) {
            console.log("系统提示", "error");
	    weic();
	            }
	});
}	

function start(hour,minute,second) {	
	console.log($("#num").val());
	var inval = setInterval(function(){
		var now = new Date();	
		var date = new Date(now.getFullYear(),now.getMonth(),now.getDate(),hour,minute,second);
		if (date.getTime() - now.getTime() <= 30000){
		weic();
	
		}else{
			console.log('准备中...');
		}
	},1000);
}

//标的开始时间：小时，分钟，秒
start(16,29,00);
