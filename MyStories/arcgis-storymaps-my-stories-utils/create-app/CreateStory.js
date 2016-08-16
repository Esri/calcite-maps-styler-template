define(['dojo/i18n!./nls/app.js?v=' + app.cfg.version, 'lib-build/hbars!./templates/createStory', 'lib-build/hbars!./templates/finalApp',
	'lib-build/hbars!./templates/noCreateStory', 'lib-build/hbars!./templates/pickApp', 'lib-build/hbars!./templates/question', 'create-app/buildApp'],
	function(createStoryi18n, createStoryTemplate, finalAppTemplate, noCreateStoryTemplate, pickAppTemplate, questionTemplate, buildApp) {
	'use strict';
	// click on large pictures takes to builder

	// show reasons on final screen
	// when init twice, messes up
	// init createStory hbs from js?
	var checkIfStoryMapsSite = function() {
		var isStoryMapsDomain = false,
			storyMapsDomains = [
				'storymaps.arcgis.com',
				'storymapsdev.arcgis.com',
				'storymapsstg.arcgis.com'
			];

		for(var i = 0; i < storyMapsDomains.length; i++) {
			if(window.location.hostname === storyMapsDomains[i]) {
				isStoryMapsDomain = true;
			}
		}

		return isStoryMapsDomain;
	},

		count = 0,
		strings = createStoryi18n,
		basicUrl = window.customBasicTemplateURL || app.cfg.defaultBasicTemplateURL,
		isStoryMapsSite = checkIfStoryMapsSite(),
		imagePathRelative = 'arcgis-storymaps-my-stories-utils/create-app/assets/images/',
		imagePathAbsolute = '/' + imagePathRelative,
		imageBase = isStoryMapsSite ? imagePathAbsolute : imagePathRelative,

	appTypes = {
		mapTour: 'Map Tour',
		mapJournal: 'Map Journal',
		cascade: 'Cascade',
		mapSeries: 'Map Series',
		crowdsource: 'Crowdsource',
		shortlist: 'Shortlist',
		swipeSpyglass: 'Swipe/Spyglass',
		basic: 'Basic'
	},

	apps = {
		mapTour: {
			title: appTypes.mapTour,
			value: 'mapTour',
			template: 'tour',
			thumbnail: imageBase + 'map-tour.jpg',
			reason: strings.reasons.mapTour,
			example: 'http://links.esri.com/storymaps/map_tour_example_3panel'
		},
		mapJournal: {
			title: appTypes.mapJournal,
			value: 'mapJournal',
			template: 'journal',
			thumbnail: imageBase + 'map-journal.jpg',
			reason: strings.reasons.mapJournal,
			example: 'http://links.esri.com/storymaps/map_journal_example_side_panel'
		},
		cascade: {
			title: appTypes.cascade,
			value: 'cascade',
			template: 'cascade',
			thumbnail: imageBase + 'cascade.jpg',
			reason: strings.reasons.cascade,
			example: 'http://links.esri.com/storymaps/story_map_cascade_overview_1'
		},
		mapSeries: {
			title: appTypes.mapSeries,
			value: 'mapSeries',
			template: 'series',
			thumbnail: imageBase + 'tabbed-viewer.jpg',
			reason: strings.reasons.mapSeries,
			example: 'http://links.esri.com/storymaps/map_series_example_tabbed'
		},
		crowdsource: {
			title: appTypes.crowdsource,
			value: 'crowdsource',
			template: 'crowdsource',
			thumbnail: imageBase + 'crowdsource.jpg',
			reason: strings.reasons.crowdsource,
			example: 'http://links.esri.com/storymaps/story_map_crowdsource_overview_1'
		},
		shortlist: {
			title: appTypes.shortlist,
			value: 'shortlist',
			template: 'shortlist',
			thumbnail: imageBase + 'shortlist.jpg',
			reason: strings.reasons.shortlist,
			example: 'http://links.esri.com/storymaps/story_map_shortlist_overview_1'
		},
		swipeSpyglass: {
			title: appTypes.swipeSpyglass,
			value: 'swipeSpyglass',
			template: 'swipeSpyglass',
			thumbnail: imageBase + 'swipe.jpg',
			reason: strings.reasons.swipeSpyglass,
			example: 'http://links.esri.com/storymaps/swipe_example'
		},
		basic: {
			title: appTypes.basic,
			value: 'basic',
			url: basicUrl,
			thumbnail: imageBase + 'basic.jpg',
			reason: strings.reasons.basic,
			example: 'http://links.esri.com/storymaps/basic_example'
		}
	},


	generateId = function() {
		return count++;
	},

	placesCategoriesQuestion = {
		id: generateId(),
		txt: strings.questionText.categories,
		answerFormat: 'button',
		answers: [
			{
				id: generateId(),
				txt: strings.answerText.yes,
				app: apps.shortlist,
				question: null
			},
			{
				id: generateId(),
				txt: strings.answerText.no,
				app: apps.mapTour,
				question: null
			}
		]
	},

	narrativeQuestion = {
		id: generateId(),
		txt: strings.questionText.narrative,
		answerFormat: 'detail',
		answers: [
			{
				id: generateId(),
				detailThumbnail: imageBase + 'map-journal.jpg',
				detailTxt: strings.answerText.detailJournal,
				txt: strings.answerText.pickThis,
				app: apps.mapJournal,
				question: null
			},
			{
				id: generateId(),
				detailThumbnail: imageBase + 'cascade.jpg',
				detailTxt: strings.answerText.detailCascade,
				txt: strings.answerText.pickThis,
				app: apps.cascade,
				question: null
			}
		]
	},

	howManyDatasetsQuestion = {
		id: generateId(),
		txt: strings.questionText.datasets,
		answerFormat: 'button',
		answers: [
			{
				id: generateId(),
				txt: strings.answerText.two,
				app: apps.swipeSpyglass,
				question: null
			},
			{
				id: generateId(),
				txt: strings.answerText.moreThanTwo,
				app: apps.mapSeries,
				question: null
			}
		]
	},

	crowdsourceQuestion = {
		id: generateId(),
		txt: strings.questionText.crowdsource,
		answerFormat: 'button',
		answers: [
			{
				id: generateId(),
				txt: strings.answerText.yes,
				app: apps.crowdsource,
				question: null
			},
			{
				id: generateId(),
				txt: strings.answerText.no,
				app: null,
				question: placesCategoriesQuestion
			}
		]
	},

	clickScrollPlaceQuestion = {
		id: generateId(),
		txt: strings.questionText.clickOrScroll,
		answerFormat: 'button',
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

	clickScrollNarrativeQuestion = {
		id: generateId(),
		txt: strings.questionText.clickOrScroll,
		answerFormat: 'button',
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
				app: null,
				question: narrativeQuestion
			}
		]
	},

	showPhotosQuestion = {
		id: generateId(),
		txt: strings.questionText.showPhotos,
		answerFormat: 'button',
		answers: [
			{
				id: generateId(),
				txt: strings.answerText.yes,
				app: null,
				question: crowdsourceQuestion
			},
			{
				id: generateId(),
				txt: strings.answerText.no,
				app: null,
				question: clickScrollPlaceQuestion
			}
		]
	},

	questionStructure = {
		/*
		Question {
				id: '',
				txt: '',
				answerFormat: 'button' || 'detail'
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
		answerFormat: 'button',
		answers: [
			{
				id: generateId(),
				txt: strings.answerText.seriesOfPlaces,
				app: null,
				question: showPhotosQuestion
			},
			{
				id: generateId(),
				txt: strings.answerText.mapsNarrative,
				app: null,
				question: clickScrollNarrativeQuestion
			},
			{
				id: generateId(),
				txt: strings.answerText.compareDatasets,
				app: null,
				question: howManyDatasetsQuestion
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
			buildApp.init($('#create-story-modal'));
		},


		/**
		@summary Traces through the question structure to find a question with the input id.
		*/
		findQuestionById = function(question, questionId) {

			var answer = null;
			var result = null;
			// check on the item. If not found, check on its children.
			// base case: no children left, or we've found the node.
			if (!question) {
				return null;
			}

			if (question.id === questionId) {
				return question;
			}

			else {
				// check its children
				for (var i = 0; i < question.answers.length; i++) {
					answer = question.answers[i];
					// credit to Barmar for returning value from recursive function: http://stackoverflow.com/questions/15674603/recursive-javascript-function-is-losing-the-return-value
					// find the result of the search (either it's null (no more children), it's the match, or keep looking).
					result = findQuestionById(answer.question, questionId);
					// only return the result if it's the correct result.
					if (result) {
						return result;
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
				buildApp.init($('.app-item.final'));
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
					pickAppWidget: templatizePickApp(),
					askProsWidget: templatizeQuestion()
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


		templatizePickApp = function() {
			var pickAppWidget = pickAppTemplate({
				appTypes: appTypes,
				strings: strings,
				basicUrl: basicUrl,
				imageBase: imageBase
			});

			return pickAppWidget;
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
