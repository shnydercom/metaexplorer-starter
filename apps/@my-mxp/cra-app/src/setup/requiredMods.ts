import { IModSpec, SingleModStateKeysDict, changeMainAppItpt } from '@metaexplorer/core';
import { MOD_MATERIALDESIGN_ID, initMaterialDesignMod } from '@metaexplorer-mods/material-design';
import { MOD_USERITPT_ID, initUSERITPTClientMod } from '@metaexplorer-mods/useritpt';
import { MOD_QRCODEGENSCAN_ID, initQRCODEGENClientMod } from '@metaexplorer-mods/qr-code-genscan';
import { MOD_MY_MXP_ID, initMod } from '@my-mxp/ui-mod';

export function setupRequiredMods(): IModSpec[] {
	//mod initialization functions
	const modSpecs: IModSpec[] = [];

	modSpecs.push({
		id: MOD_MATERIALDESIGN_ID,
		initFn: () => initMaterialDesignMod(),
		dependencies: []
	}
	)
	;
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
	//the final app is also a mod
	const MOD_NAME = "my-mxp-init-name";
	const MOD_ID = "my-mxp-init-id"
	modSpecs.push({
		id: MOD_ID,
		initFn: () => {
			const startItpt = "yourdomain/demo/index";
			changeMainAppItpt(startItpt, []);
			return new Promise((resolve, reject) => {
				resolve({
					id: MOD_ID,
					name: MOD_NAME,
					state: SingleModStateKeysDict.readyToUse
				})
			});
		},
		dependencies: [MOD_USERITPT_ID]
	}
	);
	return modSpecs;
}
