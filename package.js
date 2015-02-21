Package.describe({
  name: 'donchess:autoform-froala',
  summary: 'Froala editor for aldeed:autoform',
  version: '0.0.1',
  git: 'https://github.com/maxnatik/meteor-autoform-froala'
});

Package.onUse(function(api) {
  var both = ['client', 'server'];

  api.versionsFrom('1.0');

  api.use([
    'templating',
    'aldeed:autoform@4.2.2'
  ], both);
  api.use('froala:editor@1.2.5_2', 'client');

  api.addFiles([
    'lib/client/templates.html',
    'lib/client/templates.js',
    'lib/client/autoform-froala.js'  
  ], 'client');
});