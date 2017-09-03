module.exports = {
	plugins: [
		require('precss'),
		require('autoprefixer'),
		require('cssnano')({
			preset: [
				'default',
				{
					discardComments: {
						removeAll: true
					}
				}
			]
		})
	]
};
