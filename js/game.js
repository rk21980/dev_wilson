var Game = (function(){
	function Game(containerID){
		this.init(containerID);
	}
	
	Game.prototype = {
		init: function(containerID){
			this.$container = jQuery(containerID);
			this.$nav = jQuery('<article id="nav" />');
			this.$actions = jQuery('<acrticle id="actions" />');
			this.$dashboard = jQuery('<acrticle id="dashboard" />');
			this.$maze = jQuery('<article id="maze" />');
			this.$feedback = jQuery('<acrticle id="feedback" />');
			
			this.config = new Config();
		},
		addControl: function(label, action){
			
		},
		initDisplay: function(){
			this.$container.html('');
			this.$container
				.append(this.$nav)
				.append(this.$actions)
				.append(this.$dashboard)
				.append(this.$maze)
				.append(this.$feedback)
		},
		render: function(){
			
		}
	}
	
	return Game;
}());