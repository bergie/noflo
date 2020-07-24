// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
const noflo = require("noflo");

exports.getComponent = function() {
  const c = new noflo.Component;
  c.description = "Simple controller that says hello, user";
  c.inPorts.add('in',
    {datatype: 'object'});
  c.outPorts.add('out',
    {datatype: 'object'});
  c.outPorts.add('data',
    {datatype: 'object'});
  c.process(function(input, output) {
    if (!input.hasData('in')) { return; }
    const request = input.getData('in');
    output.sendDone({
      out: request,
      data: {
        locals: {
          string: `Hello, ${request.req.remoteUser}`
        }
      }
    });
  });
  return c;
};
