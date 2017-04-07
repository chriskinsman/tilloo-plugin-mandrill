var request = require('request');
var debug = require('debug')('tilloo-plugin-mandrill');

function Mandrill(pluginConfig, generalConfig) {
    this.pluginConfig = pluginConfig;
    this.generalConfig = generalConfig;
}

Mandrill.prototype.notify = function notify(message, lastErrorTime, failureCount, job) {
    if (!message.manualStop) {
        var jobId = message.jobId;
        var runId = message.runId;

        var statusDescription = 'Unknown Status';

        if (message.status === 'fail') {
            statusDescription = 'Job failed';
        }
        else if (message.status === 'success') {
            statusDescription = 'Job recovered from last fail';
        }

        var html;
        if (job && job.name) {
            html = '<b>' + statusDescription + '.</b> View job: <a href="http://' + this.generalConfig.web.host + ':' + this.generalConfig.web.port + '/run/' + runId + '">' + job.name + '.</a>';
        }
        else {
            html = '<b>' + statusDescription + '.</b> <a href="http://' + this.generalConfig.web.host + ':' + this.generalConfig.web.port + '/run/' + runId + '">Click here to view job.</a>';
        }

        var body = {
            'key': this.pluginConfig.key,
            'message': {
                'from_email': this.pluginConfig.from_email,
                'to': [
                    {
                        'email': this.pluginConfig.to_email,
                        'name': this.pluginConfig.from_name,
                        'type': 'to'
                    }
                ],
                'autotext': 'true',
                'subject': statusDescription,
                'html': html
            }
        };

        request.post({
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            body: body,
            json: true
        }, function (error, response, body) {
            if (error) {
                debug('Error sending message err: %O', error);
                console.error("Mandrill error: " + error);
            }
            else {
                debug('Sent message jobId: %s, statusDescription: %s', jobId, statusDescription);
            }
        });
    }
};

module.exports = Mandrill;