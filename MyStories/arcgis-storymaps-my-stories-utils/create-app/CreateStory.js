define(['dojo/i18n!./nls/app.js?v=' + app.cfg.version, 'lib-build/hbars!./templates/createStory', 'lib-build/hbars!./templates/finalApp',
	'lib-build/hbars!./templates/noCreateStory', 'lib-build/hbars!./templates/question', 'create-app/buildApp'],
	function(createStoryi18n, createStoryTemplate, finalAppTemplate, noCreateStoryTemplate, questionTemplate, buildApp) {
	'use strict';
	// click on large pictures takes to builder

	// show reasons on final screen
	// when init twice, messes up
	// init createStory hbs from js?
	var count = 0,
		strings = createStoryi18n,
		basicUrl = window.customBasicTemplateURL || app.cfg.defaultBasicTemplateURL,

	appTypes = {
		mapTour: 'Map Tour',
		mapJournal: 'Map Journal',
		mapSeries: 'Map Series',
		swipeSpyglass: 'Swipe/Spyglass',
		swipe: 'Swipe',
		spyglass: 'Spyglass',
		basic: 'Basic'
	},

	apps = {
		mapTour: {
			title: appTypes.mapTour,
			multiple: false,
			value: 'mapTour',
			method: 'buildTour()',
			thumbnail: '/arcgis-storymaps-my-stories-utils/create-app/assets/images/map-tour.jpg',
			reason: strings.reasons.mapTour,
			example: 'http://links.esri.com/storymaps/map_tour_example_3panel'
		},
		mapJournal: {
			title: appTypes.mapJournal,
			multiple: false,
			value: 'mapJournal',
			method: 'buildJournal()',
			thumbnail: '/arcgis-storymaps-my-stories-utils/create-app/assets/images/map-journal.jpg',
			reason: strings.reasons.mapJournal,
			example: 'http://links.esri.com/storymaps/map_journal_example_side_panel'
		},
		mapSeries: {
			title: appTypes.mapSeries,
			multiple: false,
			value: 'mapSeries',
			method: 'buildSeries()',
			thumbnail: '/arcgis-storymaps-my-stories-utils/create-app/assets/images/tabbed-viewer.jpg',
			reason: strings.reasons.mapSeries,
			example: 'http://links.esri.com/storymaps/map_series_example_tabbed'
		},
		swipeSpyglass: {
			title: appTypes.swipeSpyglass,
			multiple: true,
			value: 'swipeSpyglass',
			method: 'buildSwipe("swipe")',
			methodTwo: 'buildSwipe("spyglass")',
			thumbnail: '/arcgis-storymaps-my-stories-utils/create-app/assets/images/swipe.jpg',
			thumbnailTwo: '/arcgis-storymaps-my-stories-utils/create-app/assets/images/spyglass.jpg',
			reason: strings.reasons.swipeSpyglass,
			example: 'http://links.esri.com/storymaps/swipe_example'
		},
		basic: {
			title: appTypes.basic,
			multiple: false,
			value: 'basic',
			method: basicUrl,
			thumbnail: '/arcgis-storymaps-my-stories-utils/create-app/assets/images/basic.jpg',
			reason: strings.reasons.basic,
			example: 'http://links.esri.com/storymaps/basic_example'
		}
	},

	generateId = function() {
		return count++;
	},


	clickScrollQuestion = {
		id: generateId(),
		txt: strings.questionText.clickOrScroll,
		answers: [
			{
				id: generateId(),
				txt: strings.answerText.click,
				app: apps.mapSeries,
				question: null
			},
			{
				id: generateId(),
				txt: strings.answerText.scroll,
				app: apps.mapJournal,
				question: null
			}
		]
	},

	questionStructure = {
		/*
		Question {
				id: '',
				txt: '',
				answers: []
			}
		*/
		/*
		Answer {
				id: '',
				txt: '',
				app: {} // The app object (title and valueId) of the answer. Null if answer leads to another question instead of to a final solution.
				question: {} // null if this answer is the final answer, because there are no more questions needed.
			}
		*/

		id: generateId(),
		txt: strings.questionText.bestDescribesStory,
		answers: [
			{
				id: generateId(),
				txt: strings.answerText.seriesOfPlaces,
				app: null,
				question: {
					id: generateId(),
					txt: strings.questionText.showPhotos,
					answers: [
						{
							id: generateId(),
							txt: strings.answerText.yes,
							app: apps.mapTour,
							question: null
						},
						{
							id: generateId(),
							txt: strings.answerText.no,
							app: null,
							question: clickScrollQuestion
						}
					]
				}
			},
			{
				id: generateId(),
				txt: strings.answerText.mapsNarrative,
				app: null,
				question: clickScrollQuestion
			},
			{
				id: generateId(),
				txt: strings.answerText.compareDatasets,
				app: apps.swipeSpyglass,
				question: null
			},
			{
				id: generateId(),
				txt: strings.answerText.other,
				app: apps.basic,
				question: null
			}
		]
	},


	createStory = function() {
		var toggleButton = null,
			askProsView = null,
			backButton = null,
			questionState = [],
			finalAnswerId = '9999',

		init = function() {
			initUI();

			answerQuestion(questionStructure.id, false, true);

			attachEvents();
		},


		/**
		@summary Traces through the question structure to find a question with the input id.
		*/
		findQuestionById = function(question, questionId) {
			var answer = null;
			// check on the item. If not found, check on its children.
			// base case: no children left.
			if(question.id === questionId) {
				return question;
			}

			else {
				// check its child.
				for(var i = 0; i < question.answers.length; i++) {
					answer = question.answers[i];
					if(answer.question) {
						return findQuestionById(answer.question, questionId);
					}
				}
			}
		},


		answerQuestion = function(questionId, backwards, firstTime) {
			// if you have the answer, get that. otherwise find the new question.

			var question = findQuestionById(questionStructure, questionId),
				questionWidget = templatizeQuestion(question);

			if(backwards) {
				askProsView.html(questionWidget);
				onAnswerClick();
			}
			else {
				questionState.push(questionId);

				if(firstTime) {
					askProsView.html(questionWidget);
					onAnswerClick();
				}
				else {
					animateSegue(askProsView, function() {
						askProsView.html(questionWidget);
					}, onAnswerClick);
				}
			}
		},


		/**
		@summary Handles the segue animation between screens.
		*/
		animateSegue = function(element, callbackOne, callbackTwo) {
			element.animate({
				opacity: 0
			}, 400, function() {
				if(callbackOne && typeof callbackOne === 'function') {
					callbackOne();
				}

				element.animate({
					opacity: 1
				}, 800);

				if(callbackTwo && typeof callbackTwo === 'function') {
					callbackTwo();
				}
			});
		},


		onAnswerClick = function() {
			// add click events so when select answer, go to next question.
			$('.answer').off('click').on('click', function() {
				var element = $(this),
					nextQuestion = element.data('question'),
					appType = element.data('app');

				backButton.css('display', 'inline-block');

				if(appType) {
					showApp(appType);
				}
				else {
					answerQuestion(nextQuestion, false, false);
				}
			});
		},


		/**
		@summary Displays the final app recommendation screen.
		*/
		showApp = function(appType) {
			var finalAppWidget = templatizeFinalApp(apps[appType]);

			questionState.push(finalAnswerId);

			animateSegue(askProsView, function() {
				askProsView.html(finalAppWidget);
			});
		},


		attachEvents = function() {
			toggleButton.off('click').on('click', function(e) {
				// toggle between the two views.
				var target = $(e.target);
				toggleFrame(target);
			});

			$('.create-app-image-container').hover(function() {
				$(this).children('.image-hover-text').addClass('hovered');
			}, function() {
				$(this).children('.image-hover-text').removeClass('hovered');
			});

			backButton.off('click').on('click', function() {
				questionState.pop();
				if(questionState.length === 1) {
					backButton.css('display', 'none');
				}
				answerQuestion(questionState[questionState.length - 1], true, false);
			});
		},


		toggleFrame = function(target) {
			var selectedToggle = target.data('toggle'),
				selectedClass = 'selected',
				activeClass = 'active';

			backButton.css('display', 'none');

			if(selectedToggle === 'ask-pros') {
				// clear the questions out and start over
				questionState.length = 0;
				answerQuestion(questionStructure.id, false, true);
			}

			$('.toggle-view.selected').removeClass(selectedClass);
			$(toggleButton).removeClass(activeClass);

			$('.toggle-view[data-toggle="' + selectedToggle + '"]').addClass(selectedClass);
			target.addClass(activeClass);
		},


		initUI = function() {
			addHandlebarsHelpers();
			templatizeCreateStory();
			templatizeNoCreateStory();
			T.modal();

			toggleButton = $('.toggle');
			askProsView = $('#ask-pros');
			backButton = $('#create-story-back');

			var pickAppToggle = $('.toggle[data-toggle="pick-app"]');

			backButton.css('display', 'none');
			toggleFrame(pickAppToggle);
		},


		/**
		@summary Seeds the create story dialog template with the strings.
		*/
		templatizeCreateStory = function() {
			$('#create-story-modal').html(createStoryTemplate(
				{
					strings: strings,
					appTypes: appTypes,
					questionWidget: templatizeQuestion(),
					basicUrl: basicUrl
				}
			));
		},


		/**
		@summary Seeds the create story dialog template with the strings.
		*/
		templatizeNoCreateStory = function() {
			$('#no-create-story-modal').html(noCreateStoryTemplate(
				{
					labels: strings.incompatibleNotice
				}
			));
		},


		templatizeFinalApp = function(app) {

			var title = strings.finalApp.weRecommend.replace(/{{STORY_TYPE}}/g, app.title),
				finalAppWidget = finalAppTemplate({
					title: title,
					finalApp: strings.finalApp,
					app: app
				});

			return finalAppWidget;
		},


		templatizeQuestion = function(question) {
			var questionWidget = questionTemplate({
				question: question
			});

			return questionWidget;
		},


		/**
		@summary Compares if two values are equal. Currently (Jan. 2015), Handlebars natively only allows
				for a true or false check, not for an equality check.
		*/
		addHandlebarsHelpers = function() {
			Handlebars.registerHelper('ifEquals', function(input, value, opts) {
				if(input === value) {
					return opts.fn(this);
				}
				else {
					return opts.inverse(this);
				}
			});
		};



		init();
	};

	return createStory;
});