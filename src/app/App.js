define([
	'dojo',
	'dijit/_Widget',
	'dijit/_Templated',
	'i18n!./nls/App',
	'text!./templates/App.html'
], function (d, Widget, Templated, i18n, template) {
	return d.declare([
		Widget,
		Templated
	], {
		templateString: template,
		i18n: i18n,
		startup: function () {
			this.inherited(arguments);
			if (this.alertWhenStarted) {
				alert('App is started!');
			}
		}
	});
});
