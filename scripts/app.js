var app = angular.module('onlineTestAdmin', ['ngRoute','datatables']);
app.config(function($locationProvider,$routeProvider) {
		//$locationProvider.html5Mode(true);
		$routeProvider
		.when("/", {
			templateUrl: "views/index.html"
		}).when("/questions",{
			templateUrl: "views/questions/questions-index.html",
			controller: "QuestionsController"
		}).when("/questions/add",{
			templateUrl: "views/questions/question-add.html",
			controller: "QuestionsController"
		}).when("/questions/edit",{
			templateUrl: "views/questions/question-edit.html",
			controller: "QuestionsController"
		}).when("/questions/:id",{
			templateUrl: "views/questions/question-detail.html",
			controller: "QuestionsController"
		}).when("/questions/delete",{
			controller: "QuestionsController"
		});
		/*.when("/calendar", {
			templateUrl: "views/calendar.html"
		})
		.when("/stats", {
			templateUrl: "views/stats.html"
		})
		.when("/tables", {
			templateUrl: "views/tables.html"
		})
		.when("/buttons", {
			templateUrl: "views/buttons.html"
		})
		.when("/editors", {
			templateUrl: "views/editors.html"
		})
		.when("/forms", {
			templateUrl: "views/forms.html"
		})*/
	});
;
