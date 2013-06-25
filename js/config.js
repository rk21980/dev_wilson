var Config = (function(){
	function Config(){
		this.init();
	}
	
	Config.prototype = {
		init: function(){
			this.mazeWidth = 10;
			this.mazeHeight = 10;
			this.funds = 1000;
			this.gameLevel = 1;
			this.actorLevel = 1;
		}
	}
	
	return Config;
}());