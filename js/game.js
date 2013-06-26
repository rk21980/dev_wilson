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
			
			this.initDisplay();
		},
		addControl: function(label, action){
			
		},
		initNav: function(){
			
		},
		initActions: function(){
			
		},
		initDashboard: function(){
			
		},
		initMaze: function(){
			this.maze = new Maze(this.$maze);
			this.$maze.html(this.maze.render());
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