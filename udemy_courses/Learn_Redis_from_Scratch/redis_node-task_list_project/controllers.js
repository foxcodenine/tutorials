
const redisclient = require('./utils/redis.js');

// ---------------------------------------------------------------------


exports.getIndex = async function(req, res, next) {


    try {
        const tasks = await redisclient.lRange('tasks', 0, -1);

        const call = await redisclient.hGetAll('call');

        res.render('index', {
            pageTitle: 'Redis Tasks',
            tasks,
            call,
        });

    } catch (err) {
        console.info('! constrollers.postAddTask !');
    }
}

// ---------------------------------------------------------------------

exports.postAddTask = async function(req, res, next) {

    try {
        const task = req.body.task.trim();
        const isInList = (await redisclient.lRange('tasks', 0, -1)).includes(task)

        if (task && !isInList) {
            const response =  await redisclient.rPush('tasks', task);
        }
        res.redirect('/');

    } catch (err) {
        console.info('! constrollers.postAddTask !');
        console.error(err)
    }
}
// ---------------------------------------------------------------------

exports.postDeleteTask = async function(req, res, next) {

    try {
        const taskToDel = req.body.tasks;
        console.log('->', taskToDel)

        const tasks = await redisclient.lRange('tasks', 0, -1);

        const newTasks = tasks.filter( (task) => { 
            console.log(task, !taskToDel.includes(task)); 
            return  !taskToDel.includes(task)
        } );

        await redisclient.del('tasks');

        if (newTasks.length > 0) {
            await redisclient.rPush('tasks', newTasks);
        }

        res.redirect('/');

    } catch (err) {
        console.info('! constrollers.postDeleteTask !');
        console.error(err)
    }
}

// ---------------------------------------------------------------------

exports.postAddCall = async function(req, res, next) {

    try {
        const newCall = {};

        newCall.name = req.body.name;
        newCall.company = req.body.company;
        newCall.phone = req.body.phone;
        newCall.time = req.body.time;

        const payload = [];

        for (const property in newCall) {
            payload.push(property);
            payload.push(newCall[property]);
        }

        const reply = await redisclient.hSet('call', payload);
        console.log(reply);

        res.redirect('/');

    } catch (err) {
        console.info('! constrollers.postAddCall !');
        console.error(err)
    }
}
