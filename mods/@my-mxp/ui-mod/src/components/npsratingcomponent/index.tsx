import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/styles';

const NPSRatingSlider = withStyles({/*
	// here you can adjust your own styles, for an example uncomment the rest:
  root: {
		color: '#01424f',
		height: 8,
		background: 'linear-gradient(to left, #3ac627 0%,#fff200 68%,#ff0000 100%)'
  },
  thumb: {
		marginTop: "-2px",
  },
  active: {},
  valueLabel: {
  },
  track: {
    height: 8,
		borderRadius: 4,
		opacity: 0
		//background: 'linear-gradient(to right, #3ac627 0%,#fff200 68%,#ff0000 100%)'
	},
	trackInverted: {
		//opacity: 0
		//background: 'linear-gradient(to right, #3ac627 0%,#fff200 68%,#ff0000 100%)'
	},
  rail: {
    height: 8,
		borderRadius: 4,
		background: 'linear-gradient(to left, #3ac627 0%,#fff200 68%,#ff0000 100%)'
  },*/
})(Slider);

export interface NPSRatingComponentProps {
	text: string;
	defaultValue?: number;
	value?: number;
	onChange?: (event: React.ChangeEvent<{}>, value: number | number[]) => void;
}

export const NPSRatingComponent = (props: NPSRatingComponentProps) => {
	return (<div style={{ display: "flex", flexDirection: "column" }}>
		<p style={{ width: "15em" }}>{props.text}</p>
		<p style={{ width: "15em" }}>
			<NPSRatingSlider
				onChange={props.onChange}
				defaultValue={props.defaultValue ? props.defaultValue : 5}
				value={props.value}
				aria-labelledby="discrete-slider"
				valueLabelDisplay="auto"
				track="inverted"
				step={1}
				min={0}
				max={10}
			/>
		</p>
	</div>)
}

export default NPSRatingComponent;