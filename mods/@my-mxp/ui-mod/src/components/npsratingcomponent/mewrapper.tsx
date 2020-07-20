import { ldBlueprint, BlueprintConfig, IBlueprintItpt, ILDOptions, LDDict, UserDefDict, initLDLocalState, LDConnectedState, LDConnectedDispatch, LDOwnProps, LDLocalState, gdsfpLD, ownKVLs, KVL } from '@metaexplorer/core';
import { Component } from 'react';
import NPSRatingComponent from '.';
import React from 'react';

export const MY_MXP_NPS_RATING_NAME = "my-mxp/nps-rating-input";

export const MY_MXP_NPS_RATING_TYPE = "my-mxp/nps-rating-type";

const inKeys: string[] = [LDDict.description, UserDefDict.inputData];

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
	]
}

@ldBlueprint(bpCfg)
export class NPSRatingWrappedME extends Component<LDConnectedState & LDConnectedDispatch & LDOwnProps, LDLocalState>
	implements IBlueprintItpt {
	static getDerivedStateFromProps(
		nextProps: LDConnectedState & LDConnectedDispatch & LDOwnProps,
		prevState: LDLocalState): null | LDLocalState {
		let rvLD = gdsfpLD(
			nextProps, prevState, inKeys, inKeys, MY_MXP_NPS_RATING_TYPE);
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
	ownKVLs: KVL[];
	constructor(props: any) {
		super(props);
		this.cfg = (this.constructor["cfg"] as BlueprintConfig);
		const ldState = initLDLocalState(this.cfg, props, inKeys,
		inKeys);
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