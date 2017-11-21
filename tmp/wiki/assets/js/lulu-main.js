$(function () {

	/* highlight.js */
	(function () {
		prepare();
		initialize();
		highlight();
		function initialize() {
			hljs.configure({
				useBR: false
			});
		}
		function prepare() {
			$('.full_hr + pre').addClass('nohighlight');
		}
		function highlight() {
			$('.lulu-article > pre').each(function (i, block) {
				hljs.highlightBlock(block);
			});
		}
	})();

	/* lulu-header__search */
	(function () {
		const searchForm = $('.lulu-header__search__form');
		const searchQuery = $('.lulu-header__search__form__query');

		searchQuery.blur(function () {
			const query = searchQuery.val();
			if (! query) return;
			searchForm.submit();
		});

		searchForm.submit(function () {
			const query = searchQuery.val();
			if (! query) return false;
			return true;
		});

	})();

});
