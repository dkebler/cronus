"use strict";

var Job = function() {
	this.cronPattern = "*/5 * * * * *";
	this.name = "unicorn 5";
	this.description = "You will see this message every 5 seconds";

	return this;
};


Job.prototype.test = function(controller) {
	// controller.log.info("done");

	//throw new Error ("errors"); 
	// controller.io.sockets.emit("job-done", { job:this,  msg : "done",  result: true });

	return true;
};

module.exports = Job;