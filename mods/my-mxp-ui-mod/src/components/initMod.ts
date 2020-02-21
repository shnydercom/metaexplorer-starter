import { IModStatus, appItptRetrFn, SingleModStateKeysDict, ITPT_TAG_ATOMIC } from "@metaexplorer/core";
import { NPSRatingWrappedME, MY_MXP_NPS_RATING_TYPE } from "./npsratingcomponent/mewrapper";

export const MOD_MY_MXP_ID = "MY_MXP";
export const MOD_MY_MXP_NAME = "MY_MXP Mod";

export function initMY_MXPMod(): Promise<IModStatus> {
	const appIntRetr = appItptRetrFn();
	const rv: Promise<IModStatus> = new Promise((resolve, reject) => {
		appIntRetr.addItpt(MY_MXP_NPS_RATING_TYPE, NPSRatingWrappedME, "cRud", [ITPT_TAG_ATOMIC]);
		resolve({ id: MOD_MY_MXP_ID, name: MOD_MY_MXP_NAME, state: SingleModStateKeysDict.readyToUse, errorMsg: null });
	});
	return rv;
}
