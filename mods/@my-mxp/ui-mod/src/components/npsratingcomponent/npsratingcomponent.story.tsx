import React from "react";
import { storiesOf } from "@storybook/react";
import { changeMainAppItpt, AppRoot, rootSetup, appItptRetrFn, ITPT_TAG_ATOMIC, LDDict, UserDefDict } from "@metaexplorer/core";
import { MY_MXP_NPS_RATING_NAME, MY_MXP_NPS_RATING_TYPE, NPSRatingWrappedME } from "./mewrapper";

import NPSRatingComponent from "./index";

const testText = "this is just a test";
const stories = storiesOf('material design components', module);

rootSetup([]);
const appIntRetr = appItptRetrFn();
appIntRetr.addItpt(MY_MXP_NPS_RATING_TYPE, NPSRatingWrappedME, "cRud", [ITPT_TAG_ATOMIC]);


stories.add(
	"NPSRatingComponent normal",
	() => (<><NPSRatingComponent text={testText} /> </>)
)

stories.add("NPSRatingComponent metaexplorer", () => {
	changeMainAppItpt(
		MY_MXP_NPS_RATING_NAME,
		[
			{
				key: LDDict.description,
				value: "How likely are you going to recommend us on a scale of 1 to 10?",
				ldType: LDDict.Text
			},
			{
				key: UserDefDict.inputData,
				value: 7,
				ldType: LDDict.Double
			},
		]);
	return (<AppRoot />)
});