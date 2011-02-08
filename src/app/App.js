define([
	'dojo',
	'dijit/_Widget',
	'dijit/_Templated',
	'i18n!./nls/App',
	'text!./templates/App.html',
	'dojo/date/locale',
	'i18n!dojo/cldr/nls/fr-ch/gregorian'
], function (d, Widget, Templated, i18n, template, locale) {
	return d.declare([
		Widget,
		Templated
	], {
		templateString: template,
		i18n: i18n,

		buildRendering: function () {
			// this is just to test some locale specific stuff with dojo
			this.defaultMonths = locale.getNames('months', 'wide', 'standAlone', d.locale).join(', ');
			this.frchMonths = locale.getNames('months', 'wide', 'standAlone', 'fr-ch').join(', ');
			this.inherited(arguments);
		},

		startup: function () {
			this.inherited(arguments);
			if (this.alertWhenStarted) {
				alert('App is started!');
			}
		}
	});
});
