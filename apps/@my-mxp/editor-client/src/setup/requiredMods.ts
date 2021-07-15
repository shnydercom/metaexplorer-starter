import { IModSpec, changeMainAppItpt, SingleModStateKeysDict, BlueprintConfig, addBlueprintToRetriever } from '@metaexplorer/core';
import { MOD_MATERIALDESIGN_ID, initMaterialDesignMod } from '@metaexplorer-mods/material-design';
import { MOD_USERITPT_ID, initUSERITPTClientMod } from '@metaexplorer-mods/useritpt';
import { MOD_ITPTEDITOR_ID, initItptEditorMod } from '@metaexplorer-mods/itpt-editor';
import { MOD_QRCODEGENSCAN_ID, initQRCODEGENClientMod } from '@metaexplorer-mods/qr-code-genscan';
import { MOD_MY_MXP_ID, initMod } from '@my-mxp/ui-mod';


const editorItptJSON = require('./../editor-config.json');

const startItpt = "metaexplorer.io/v1/custom-editor-you-are-using";


export function setupRequiredMods(): IModSpec[] {
	//mod initialization functions
	const modSpecs: IModSpec[] = [];

	modSpecs.push({
		id: MOD_MATERIALDESIGN_ID,
		initFn: () => initMaterialDesignMod(),
		dependencies: []
	}
	);
	modSpecs.push({
		id: MOD_MY_MXP_ID,
		initFn: () => initMod(),
		dependencies: []
	}
	);
	modSpecs.push({
		id: MOD_USERITPT_ID,
		initFn: () => initUSERITPTClientMod(false),
		dependencies: [MOD_QRCODEGENSCAN_ID]
	}
	);
	modSpecs.push({
		id: MOD_QRCODEGENSCAN_ID,
		initFn: () => initQRCODEGENClientMod(),
		dependencies: []
	}
	);
	modSpecs.push({
		id: MOD_ITPTEDITOR_ID,
		initFn: () => initItptEditorMod({
					currrentlyEditing: "yourdomain/demo/index"
				}),
		dependencies: ["editorinitialization"]
	}
	);
	modSpecs.push({
		id: "editorinitialization",
		initFn: () => {
			let editorItptCfg: BlueprintConfig = editorItptJSON;
			addBlueprintToRetriever(editorItptCfg, "default");
			changeMainAppItpt(startItpt, []);
			return new Promise((resolve, reject) => {
				resolve({
					id: "editorinitialization",
					name: "editorinitialization",
					state: SingleModStateKeysDict.readyToUse
				})
			});
		},
		dependencies: [MOD_USERITPT_ID]
	}
	);

	return modSpecs;
}
