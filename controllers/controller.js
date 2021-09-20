const Task = require('../models/task');


module.exports.getSpecificTask = (taskId) => {
	return Task.findById(taskId).then((result, error) => { 
		if(error) {
            console.log(error)
            return false;
        }

        return result;
	})
}

module.exports.createTask = (requestBody) => {
	let newTask = new Task({
		name: requestBody.name
	})
    return newTask.save().then((result, error) => {
        if (error) {
            return false;
        } else {
            return result;
        }
    });
}

module.exports.updateTask = (taskId, newContent) => {
	return Task.findById(taskId).then((result, error) => {
		if(error){
			console.log(err)
			return false;
		}

		// results of the findById method will be stored in the "result" parameter
		result.status = newContent.status;
		return result.save().then((updatedTask, saveErr) => {
			if(saveErr){
				console.log(saveErr)
				return false;
			} else {
				// update successful, returns the updated task object back to the client
				return updatedTask;
			}
		})
	})
}


    