import { ldBlueprint, BlueprintConfig, IBlueprintItpt, ILDOptions, IKvStore, LDDict, UserDefDict, initLDLocalState, LDConnectedState, LDConnectedDispatch, LDOwnProps, LDLocalState, gdsfpLD } from '@metaexplorer/core';
import { Component } from 'react';
import NPSRatingComponent from '.';
import React from 'react';

export const MY_MXP_NPS_RATING_NAME = "my-mxp/nps-rating-input";

export const MY_MXP_NPS_RATING_TYPE = "my-mxp/nps-rating-type";

const interpretableKeys: string[] = [LDDict.description, UserDefDict.inputData];

const bpCfg: BlueprintConfig = {
	crudSkills: "cRud",
	interpretableKeys,
	nameSelf: MY_MXP_NPS_RATING_NAME,
	canInterpretType: MY_MXP_NPS_RATING_TYPE,
	subItptOf: null,
	initialKvStores: [
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
	]
}

@ldBlueprint(bpCfg)
export class NPSRatingWrappedME extends Component<LDConnectedState & LDConnectedDispatch & LDOwnProps, LDLocalState>
	implements IBlueprintItpt {
	static getDerivedStateFromProps(
		nextProps: LDConnectedState & LDConnectedDispatch & LDOwnProps,
		prevState: LDLocalState): null | LDLocalState {
		let rvLD = gdsfpLD(
			nextProps, prevState, interpretableKeys, interpretableKeys, MY_MXP_NPS_RATING_TYPE);
		if (!rvLD) {
			return null;
		}
		let rvNew = {
			...prevState,
			...rvLD
		};
		return {
			...rvNew
		};
	}
	cfg: BlueprintConfig;
	consumeLDOptions: (ldOptions: ILDOptions) => any;
	initialKvStores: IKvStore[];
	constructor(props: any) {
		super(props);
		this.cfg = (this.constructor["cfg"] as BlueprintConfig);
		const ldState = initLDLocalState(this.cfg, props, interpretableKeys,
		interpretableKeys);
		this.state = {
			...ldState,
		};
	}
	render() {
		const {localValues} = this.state;
		const description = localValues.get(LDDict.description);
		const inputData = localValues.get(UserDefDict.inputData);
		return (<NPSRatingComponent text={description} defaultValue={inputData} />)
	}
}