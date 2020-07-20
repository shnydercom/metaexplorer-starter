const fs = require('fs');
import path from 'path';
import { copyDir, mkdir } from '@metaexplorer/editor-dev-server/lib/scripts/copydir';

const devNocodeFolder = 'dev-srv-nocode';
export const DYN_USER_CSS_FOLDER = "styles";

if (!fs.existsSync(path.resolve(devNocodeFolder))) {
	mkdir(devNocodeFolder);
	mkdir(devNocodeFolder + "/blocks");
	mkdir(devNocodeFolder + "/" + DYN_USER_CSS_FOLDER);

	//copy nocode to devNocodeFolder
	const nocodePath = process.env.NOCODE_BLOCKS_PATH ? process.env.NOCODE_BLOCKS_PATH : '../../nocode/metaexplorer.io/blocks';
	copyDir(path.resolve(nocodePath.trim()), path.resolve(devNocodeFolder, "blocks"));
}
