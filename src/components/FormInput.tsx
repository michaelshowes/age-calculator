import styled from 'styled-components';

type Props = {
	label: string;
	errorMsg: string | null;
	pattern: any;
	required?: boolean;
	setField: (e: any) => void;
};

export default function FormInput({
	label,
	setField,
	errorMsg,
	pattern,
	required
}: Props) {
	return (
		<StyledInput>
			<label>{label}</label>
			<input
				type='text'
				id={label.toLowerCase()}
				name={label.toLowerCase()}
				pattern={pattern}
				onChange={(e) => setField(e.target.value)}
				required={required}
			/>
			<span>{errorMsg}</span>
		</StyledInput>
	);
}

const StyledInput = styled.fieldset`
	position: relative;
	width: 100%;
	min-width: 88px;
	max-width: 160px;
	border: 0;

	&:invalid {
		label {
			color: #ff5959;
		}

		input {
			outline: 2px solid #ff5959;

			&:focus {
				outline: 2px solid #ff5959;
			}
		}

		span {
			display: block;
		}
	}

	label {
		display: block;
		color: #716f6f;
		margin-bottom: 4px;
		text-transform: uppercase;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.25em;
	}

	input {
		width: 100%;
		padding: 12px 16px;
		font-size: 1.25rem;
		font-weight: 700;
		line-height: 30px;
		letter-spacing: 0.1em;
		border: 1px solid #dcdcdc;
		border-radius: 8px;
		outline: 0;

		&:focus {
			outline: 2px solid #854dff;
		}

		@media (min-width: 600px) {
			input {
				font-size: 2rem;
				line-height: 48px;
				padding: 12px 24px;
			}
		}
	}

	span {
		position: absolute;
		bottom: -36px;
		left: 0;
		display: none;
		color: #ff5959;
		font-size: 0.6875rem;
		font-style: italic;

		@media (min-width: 484px) {
			bottom: -25px;
		}

		@media (min-width: 800px) {
			bottom: -30px;
			font-size: 0.875rem;
		}
	}
`;
