import './style.scss';
import Vue from 'vue';

new Vue({
	el: '#app',
	components: {
		'movie-list': {
			template: `<div id="movie-list">
						<div v-for="movie in movies" class="movie">{{ movie.title }}</div>	
					</div>`,
			data: function(){
				return {
					movies: [
						{ title: 'Pulp fiction 1'},
						{ title: 'Pulp fiction 2'},
						{ title: 'Pulp fiction 3'},
						{ title: 'Pulp fiction 4'},
					]
				};
			}
		},
		'movie-filter': {
			template: `<div id="movie-filter">
				<h2>Filter results</h2>
			</div>`	
		}
	}
});