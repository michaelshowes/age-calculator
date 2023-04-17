import styled from 'styled-components';
import { ReactComponent as Arrow } from '../assets/icon-arrow.svg';

export default function Submit() {
	return (
		<StyledSubmit>
			<hr />
			<button>
				<Arrow />
			</button>
		</StyledSubmit>
	);
}

const StyledSubmit = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	margin: 32px 0;
	isolation: isolate;

	hr {
		position: absolute;
		top: 50%;
		width: 100%;
		border: 1px solid #dcdcdc;
		z-index: -1;
		opacity: 0.6;
	}

	button {
		cursor: pointer;
		background: #854dff;
		width: 62px;
		height: 62px;
		border: 0;
		border-radius: 50%;
		transition: 0.2s ease-in-out;

		&:hover {
			background: black;
		}

		svg {
			width: 24px;
			height: 24px;

			g {
				stroke-width: 3;
			}
		}
	}

	@media (min-width: 800px) {
		button {
			width: 96px;
			height: 96px;

			svg {
				width: 44px;
				height: 44px;

				g {
					stroke-width: 2;
				}
			}
		}
	}

	@media (min-width: 800px) {
		justify-content: flex-end;
	}
`;
