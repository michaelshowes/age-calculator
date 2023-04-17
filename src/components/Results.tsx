import styled from 'styled-components';

type Props = {
	age: {
		years: number | null;
		months: number | null;
		days: number | null;
	};
};

export default function Results({ age }: Props) {
	return (
		<StyledResults>
			<div>
				<span>{age?.years || age?.years === 0 ? age.years : '--'}</span> years
			</div>
			<div>
				<span>{age?.months || age?.months === 0 ? age.months : '--'}</span>{' '}
				months
			</div>
			<div>
				<span>{age?.days || age?.days === 0 ? age.days : '--'}</span> days
			</div>
		</StyledResults>
	);
}

const StyledResults = styled.div`
	font-size: 3.5rem;
	font-weight: 800;
	font-style: italic;
	line-height: 62px;

	span {
		color: #854dff;
	}

	@media (min-width: 600px) {
		font-size: 5rem;
		line-height: 5.5rem;
	}

	@media (min-width: 800px) {
		font-size: 6.5rem;
		line-height: 115px;
	}
`;
