const cron = require('node-cron');
const date = require('../Notification/notification');

const cronJob = async () => { 
    let job = cron.schedule('* * * * *', async () => {
        await date.calcTime();
    });
}

module.exports = {
    cronJob
}