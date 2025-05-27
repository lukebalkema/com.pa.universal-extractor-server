var newBuild = {
    "/pa/units/universal/universal_metal_extractor/universal_metal_extractor.json": ["utility", 6,{ row: 1, column: 0 }],
    "/pa/units/universal/universal_metal_extractor_adv/universal_metal_extractor_adv.json": ["combat", 1, {row: 0, column: 1}],
    }
    if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
    }