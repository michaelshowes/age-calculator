import styled from 'styled-components';
import Submit from './components/Submit';
import Results from './components/Results';
import calculateAge from './utils/calculateAge';
import { useState } from 'react';
import FormInput from './components/FormInput';

type FormData = {
	years: number | null;
	months: number | null;
	days: number | null;
};

export default function App() {
	const [day, setDay] = useState<number | null>(null);
	const [month, setMonth] = useState<number | null>(null);
	const [year, setYear] = useState<number | null>(null);
	const [age, setAge] = useState<FormData>({
		years: null,
		months: null,
		days: null
	});

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setAge(calculateAge(day!, month!, year!));
	}

	return (
		<StyledApp>
			<div>
				<form onSubmit={handleSubmit}>
					<div>
						<FormInput
							label='Day'
							errorMsg={'Must be a valid day'}
							pattern={'[1-9]|[1-2][0-9]|3[0-1]'}
							setField={setDay}
						/>
						<FormInput
							label='Month'
							errorMsg={'Must be a valid month'}
							pattern={'[1-9]|1[0-2]'}
							setField={setMonth}
						/>
						<FormInput
							label='Year'
							errorMsg={'Must be in the past'}
							pattern={`[1-2]\\d{3}|${new Date().getFullYear()}`}
							setField={setYear}
						/>
					</div>
					<Submit />
				</form>
				<Results age={age} />
			</div>
		</StyledApp>
	);
}

const StyledApp = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	padding: 0 16px;

	> * {
		background-color: white;
		width: 100%;
		max-width: 840px;
		padding: 48px 24px;
		border-radius: 24px 24px 100px 24px;
	}

	@media (min-width: 600px) {
		> * {
			border-radius: 24px 24px 200px 24px;
			padding: 56px;
		}
	}

	form {
		> div {
			display: flex;
			column-gap: 16px;
			width: 100%;

			@media (min-width: 600px) {
				column-gap: 32px;
			}
		}
	}
`;
