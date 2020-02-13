import styled, { css } from 'styled-components'

export const Col = styled.div`
	@media screen and (min-width: 600px) {
		grid-column: span ${props => (props.nspan ? props.nspan : props.nspan - 2)};
	}
	@media screen and (min-width: 768px) {
		grid-column: span ${props => (props.nspan ? props.nspan : props.nspan - 2)};
	}
	@media screen and (min-width: 1024px) {
		grid-column: span ${props => (props.nspan ? props.nspan : props.nspan - 2)};
	}
	@media screen and (min-width: 1200px) {
		grid-column: span ${props => (props.nspan ? props.nspan : props.nspan - 2)};
	}
	@media screen and (min-width: 1440px) {
		grid-column: span ${props => (props.nspan ? props.nspan : props.nspan - 2)};
	}
`

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: ${props => (props.gutter ? props.gutter : 0)};
	@media screen and (min-width: 600px) {
		grid-template-columns: repeat(
			${props => (props.tracks < 18 ? props.tracks - 9 : props.tracks - 12)},
			1fr
		);
	}
	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(
			${props => (props.tracks < 18 ? props.tracks - 6 : props.tracks - 9)},
			1fr
		);
	}
	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(
			${props => (props.tracks < 18 ? props.tracks - 3 : props.tracks - 6)},
			1fr
		);
	}
	@media screen and (min-width: 1200px) {
		grid-template-columns: repeat(
			${props => (props.tracks < 18 ? props.tracks : props.tracks - 3)},
			1fr
		);
	}
	@media screen and (min-width: 1440px) {
		grid-template-columns: repeat(
			${props => (props.tracks ? props.tracks : 12)},
			1fr
		);
	}

	/* 12 columns */
	${props =>
		props.tracks === 12 &&
		css`
			@media screen and (min-width: 600px) {
				grid-template-columns: repeat(
					${props => props.tracks && props.tracks - 6},
					1fr
				);
			}
			@media screen and (min-width: 768px) {
				grid-template-columns: repeat(
					${props => props.tracks && props.tracks - 3},
					1fr
				);
			}
			@media screen and (min-width: 1024px) {
				grid-template-columns: repeat(
					${props => props.tracks && props.tracks - 3},
					1fr
				);
			}
			@media screen and (min-width: 1200px) {
				grid-template-columns: repeat(
					${props => props.tracks && props.tracks},
					1fr
				);
			}
			@media screen and (min-width: 1440px) {
				grid-template-columns: repeat(
					${props => props.tracks && props.tracks},
					1fr
				);
			}
		`}
	${props =>
		props.auto &&
		css`
			grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		`}
`

export const CustomRow = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: ${props => props.gutter};

	@media screen and (min-width: 780px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(${props => props.tracks || 3}, 1fr);
	}
`

export const CustomCol = styled.div`
	grid-column: span 1;
	@media screen and (min-width: 780px) {
		grid-column: span 1;
	}
	@media screen and (min-width: 1024px) {
		grid-column: span ${props => props.nspan};
	}
`
