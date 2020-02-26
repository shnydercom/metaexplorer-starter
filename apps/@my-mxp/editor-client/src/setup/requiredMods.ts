import { IModSpec, changeMainAppItpt, SingleModStateKeysDict, BlueprintConfig, addBlueprintToRetriever } from '@metaexplorer/core';
import { MOD_MATERIALDESIGN_ID, initMaterialDesignMod } from '@metaexplorer-mods/material-design';
import { MOD_USERITPT_ID, initUSERITPTClientMod } from '@metaexplorer-mods/useritpt';
import { MOD_ITPTEDITOR_ID, initItptEditorMod } from '@metaexplorer-mods/itpt-editor';
import { isProduction } from '@metaexplorer/core';
import { MOD_MY_MXP_ID, initMod } from '@my-mxp/ui-mod';


const editorItptJSON = require('./../editor-config.json');

const startItpt = "my-mxp/v1/editor";

const startItptJSON = require('./../editor-start.json');

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
		initFn: () => initUSERITPTClientMod(isProduction),
		dependencies: []
	}
	);
	modSpecs.push({
		id: MOD_ITPTEDITOR_ID,
		initFn: () => initItptEditorMod(!isProduction),
		dependencies: []
	}
	);
	modSpecs.push({
		id: "editorinitialization",
		initFn: () => {
			let startItptCfg: BlueprintConfig = startItptJSON;
			let editorItptCfg: BlueprintConfig = editorItptJSON;
			addBlueprintToRetriever(editorItptCfg, "default");
			addBlueprintToRetriever(startItptCfg, "default");
			changeMainAppItpt(startItpt, []);
			return new Promise((resolve, reject) => {
				resolve({
					id: "editorinitialization",
					name: "editorinitialization",
					state: SingleModStateKeysDict.readyToUse
				})
			});
		},
		dependencies: []
	}
	);

	return modSpecs;
}
