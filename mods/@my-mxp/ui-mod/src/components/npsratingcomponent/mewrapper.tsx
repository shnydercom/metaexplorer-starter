import { ldBlueprint, BlueprintConfig, IBlueprintItpt, ILDOptions, LDDict, UserDefDict, initLDLocalState, LDConnectedState, LDConnectedDispatch, LDOwnProps, LDLocalState, gdsfpLD, KVL } from '@metaexplorer/core';
import { Component } from 'react';
import NPSRatingComponent from '.';
import React from 'react';

export interface NPSRatingState {
	internalValue: number;
}

export const MY_MXP_NPS_RATING_NAME = "my-mxp/nps-rating-input";

export const MY_MXP_NPS_RATING_TYPE = "my-mxp/nps-rating-type";

const inKeys: string[] = [LDDict.description, UserDefDict.inputData];

const OUTPUT_KV: KVL = {
	key: UserDefDict.outputData,
	value: undefined,
	ldType: LDDict.Double
}

const bpCfg: BlueprintConfig = {
	crudSkills: "cRud",
	inKeys,
	nameSelf: MY_MXP_NPS_RATING_NAME,
	canInterpretType: MY_MXP_NPS_RATING_TYPE,
	subItptOf: null,
	ownKVLs: [
		{
			key: LDDict.description,
			value: undefined,
			ldType: LDDict.Text
		},
		{
			key: UserDefDict.inputData,
			value: undefined,
			ldType: LDDict.Double
		},
		OUTPUT_KV
	]
}

@ldBlueprint(bpCfg)
export class NPSRatingWrappedME extends Component<LDConnectedState & LDConnectedDispatch & LDOwnProps, LDLocalState & NPSRatingState>
	implements IBlueprintItpt {
	static getDerivedStateFromProps(
		nextProps: LDConnectedState & LDConnectedDispatch & LDOwnProps,
		prevState: LDLocalState & NPSRatingState): null | LDLocalState & NPSRatingState {
		let rvLD = gdsfpLD(
			nextProps, prevState,
			[], [...inKeys, UserDefDict.outputKVMapKey],
			MY_MXP_NPS_RATING_TYPE);
		if (!rvLD) {
			return null;
		}
		const rvLDInputValue = rvLD.localValues.get(UserDefDict.inputData);
		//this checks if the value has been changed from inside or outside the component
		const internalValue = (
			prevState.internalValue !== undefined &&
			prevState.internalValue !== null &&
			prevState.localValues.get(UserDefDict.inputData) !== rvLDInputValue
		)
			? rvLDInputValue
			: prevState.internalValue;
		let rvNew = {
			...prevState,
			...rvLD,
			internalValue
		};
		return {
			...rvNew
		};
	}
	cfg: BlueprintConfig;
	consumeLDOptions: (ldOptions: ILDOptions) => any;
	ownKVLs: KVL[];
	constructor(props: any) {
		super(props);
		this.cfg = (this.constructor["cfg"] as BlueprintConfig);
		const ldState = initLDLocalState(this.cfg, props,
			[], [...inKeys, UserDefDict.outputKVMapKey]);
		const internalValue = ldState.localValues.get(UserDefDict.inputData);
		this.state = {
			...ldState,
			internalValue
		};
	}

	handleChange = (evt, evtval: number) => {
		const outputKV = { ...OUTPUT_KV, value: evtval };
		const outputKVMap = this.state.localValues.get(UserDefDict.outputKVMapKey);
		if (!outputKVMap) return;
		const newState = { ...this.state };
		newState.internalValue = evtval;
		this.setState(newState, () =>
			this.props.dispatchKvOutput([outputKV], this.props.ldTokenString, outputKVMap));
	}

	render() {
		const { localValues, internalValue } = this.state;
		const description = localValues.get(LDDict.description);
		//const inputData = localValues.get(UserDefDict.inputData);
		return (<NPSRatingComponent text={description} value={internalValue} onChange={this.handleChange} />)
	}
}