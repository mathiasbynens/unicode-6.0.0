module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,19,45,88,75,150,237,56,8,219,208,29,132,159,129,181,188,211,251,223,70,75,168,6,193,85,193,34,150,236,0,55,255,94,253,222,251,189,254,189,249,189,253,245,247,107,251,181,255,58,126,157,191,174,95,191,95,247,175,231,215,251,155,239,55,246,27,255,77,252,38,127,83,191,121,191,233,223,204,111,246,183,223,207,214,113,5,174,196,85,184,30,174,198,53,184,246,231,223,135,203,112,57,174,192,149,184,10,215,195,213,184,6,23,230,25,230,25,230,25,230,25,230,25,230,25,230,24,230,24,230,24,230,56,230,56,230,56,230,20,124,133,251,15,247,30,254,127,152,15,94,14,86,14,78,14,70,14,62,14,54,14,46,14,38,14,30,14,22,14,14,14,6,142,245,59,214,239,88,187,99,221,142,53,7,214,27,88,107,96,157,129,53,6,214,23,88,91,96,77,97,133,171,113,237,47,176,142,112,220,115,220,115,220,11,204,9,224,2,184,0,46,128,75,220,75,220,75,220,75,220,75,220,43,220,43,220,43,220,3,135,0,135,0,135,0,135,0,135,0,135,0,135,0,135,0,135,0,135,0,135,192,150,4,54,36,176,29,129,109,8,112,8,112,8,112,136,197,61,236,65,128,71,96,15,130,60,160,125,130,75,66,251,132,238,9,62,9,62,9,205,19,156,18,58,39,56,37,56,37,116,78,104,156,208,55,161,109,130,87,130,87,58,238,129,87,6,98,4,238,129,91,6,238,7,98,4,226,131,95,130,91,130,79,22,238,131,75,62,204,125,152,139,99,150,56,100,137,35,150,56,96,137,227,149,56,92,137,189,72,236,69,98,47,18,123,145,224,145,224,145,224,145,216,139,4,135,196,249,41,172,189,176,15,133,181,23,214,94,88,123,97,221,133,189,40,172,189,112,62,10,235,46,172,187,176,238,194,186,203,113,207,113,15,235,46,172,187,176,31,133,53,23,246,163,176,31,133,245,22,246,163,176,230,194,126,20,246,163,176,31,133,245,23,246,163,176,31,5,14,133,253,40,236,71,97,15,10,107,47,172,189,176,15,133,61,40,236,65,97,253,133,125,40,112,40,112,40,112,40,112,40,112,24,190,49,124,95,112,111,177,254,197,218,23,231,125,63,254,63,191,197,250,23,231,124,161,253,130,195,66,255,5,143,197,185,90,163,31,175,21,248,44,206,215,130,211,98,47,22,188,22,251,177,224,182,56,107,11,126,235,152,135,125,89,112,92,236,205,130,231,98,111,22,92,23,251,179,224,187,216,163,133,230,11,205,23,235,94,172,109,177,222,229,218,176,222,197,122,23,154,47,52,95,156,255,229,59,251,65,120,24,167,73,26,188,207,159,241,95,172,20,166,105,56,15,11,132,161,3,75,132,225,100,231,20,39,194,57,207,111,222,194,4,131,6,17,65,68,16,17,68,4,17,65,68,16,17,68,4,17,73,68,18,145,68,36,17,73,68,18,145,68,36,17,73,68,18,81,68,20,17,69,68,17,81,68,20,17,69,68,17,81,68,20,17,143,136,71,196,35,226,17,241,136,120,68,60,34,30,17,143,136,71,68,19,129,35,97,134,61,130,113,154,164,121,52,152,103,164,106,100,105,36,104,228,102,164,101,100,100,36,99,228,97,164,96,92,189,113,225,198,53,219,59,67,47,31,110,124,174,241,145,214,116,52,29,77,71,211,49,116,12,29,67,199,208,49,116,48,45,95,94,190,164,124,25,249,210,49,115,177,49,17,27,179,176,49,5,27,243,175,49,249,26,51,175,49,237,26,243,174,49,241,26,179,174,49,229,194,4,77,209,208,193,93,117,178,116,178,116,178,116,178,116,178,116,178,116,178,116,178,116,178,116,178,116,178,116,110,10,243,183,49,129,27,51,184,49,133,27,115,184,49,137,27,179,184,49,141,27,243,184,49,145,27,51,185,49,149,27,115,185,49,153,27,179,185,49,157,27,243,185,49,161,27,51,186,49,165,27,115,186,49,169,27,179,186,49,173,27,243,186,49,177,27,51,187,49,181,195,208,65,230,65,230,193,227,29,36,200,164,14,99,52,156,194,99,203,4,15,83,52,156,204,99,203,100,15,67,4,233,7,143,45,19,63,12,17,20,34,120,108,89,4,96,136,160,36,193,99,203,130,0,67,4,197,9,30,91,22,7,24,34,40,83,240,216,178,80,192,16,65,193,130,199,150,69,3,134,8,74,23,60,182,44,32,73,117,97,154,134,121,29,176,164,206,48,70,195,28,207,36,77,197,97,152,234,15,198,132,77,237,97,136,104,34,152,188,185,11,48,68,52,17,76,228,220,15,24,34,152,211,189,137,96,102,247,33,130,249,221,135,8,102,121,159,43,39,68,12,17,204,248,62,68,48,239,251,18,193,236,239,40,99,253,16,5,198,105,146,230,209,160,31,121,75,199,210,177,116,44,29,216,223,110,236,47,140,211,36,13,91,152,143,14,163,195,232,48,58,140,14,163,195,233,112,58,156,14,167,195,233,8,58,130,142,160,35,232,8,58,146,142,164,35,233,72,58,146,142,162,163,232,40,58,138,142,162,227,209,241,232,120,116,60,58,30,29,108,186,154,61,87,179,229,234,235,184,216,112,53,153,55,153,55,153,55,153,55,153,55,153,55,153,55,153,55,153,55,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,89,14,89,14,89,14,89,14,89,14,89,14,89,14,89,14,89,14,89,14,89,14,89,14,89,14,89,14,89,14,89,14,89,14,89,14,89,14,89,14,89,178,70,54,139,36,12,29,100,57,100,57,100,57,100,57,100,57,100,57,100,185,100,201,114,218,172,167,205,98,218,172,166,205,114,10,67,7,89,178,146,54,203,104,179,134,54,11,104,179,122,54,75,103,179,110,246,114,127,89,53,155,37,19,106,158,41,26,78,193,203,9,195,121,120,57,123,73,122,241,114,66,112,254,245,238,47,98,241,246,192,16,251,136,37,183,101,215,188,215,55,55,177,100,185,67,4,169,238,16,65,110,187,247,23,177,75,44,89,238,18,123,84,151,93,55,184,193,240,47,16,132,49,26,167,65,31,206,50,59,172,176,195,226,58,172,171,195,122,57,172,151,195,122,57,172,151,195,122,57,172,151,195,122,57,172,151,195,186,5,99,52,78,131,121,172,81,48,244,226,8,192,32,40,235,17,12,189,216,110,24,68,97,61,130,161,183,25,165,25,165,57,143,63,13,140,63,14,88,133,96,16,42,33,221,176,43,132,1,34,31,255,133,126,48,73,67,7,142,202,176,65,28,118,135,48,116,52,29,77,71,51,10,35,179,71,28,54,137,195,46,17,134,81,160,36,12,97,75,239,114,242,222,20,196,99,151,8,99,52,112,176,105,51,149,23,99,182,51,85,25,99,190,51,21,27,99,198,51,213,28,115,85,248,43,186,204,122,166,10,100,204,123,166,66,100,204,124,166,122,100,174,248,87,144,153,253,76,213,201,152,255,76,69,202,152,1,77,181,202,152,3,77,37,203,152,5,77,149,203,152,7,77,5,204,152,9,77,117,12,246,176,87,200,125,15,187,135,221,189,134,227,58,142,207,206,94,227,241,197,217,235,63,190,58,123,109,200,215,103,213,166,28,214,14,251,100,15,251,14,251,212,187,220,252,83,38,78,147,56,53,226,212,136,83,35,78,141,56,29,226,184,199,113,137,213,223,23,243,88,196,173,63,86,189,208,53,67,183,218,188,117,230,173,48,111,109,121,171,226,79,20,218,243,218,121,237,188,174,70,234,188,215,124,229,117,95,121,237,87,94,255,149,215,128,229,117,96,121,45,88,170,7,83,19,246,215,133,157,87,125,216,53,98,121,157,88,94,43,150,117,222,58,111,157,247,84,202,83,41,159,90,184,243,222,249,201,59,57,121,103,38,79,159,60,101,242,148,201,59,27,121,167,34,239,60,228,168,255,59,239,41,150,183,155,197,31,108,94,87,172,235,10,117,93,145,174,191,186,126,229,252,10,115,93,81,174,43,200,213,42,248,231,189,34,92,87,128,235,138,111,93,225,173,81,43,112,222,43,182,181,231,221,243,238,149,253,239,154,132,239,26,132,239,154,3,151,189,246,192,111,78,220,156,80,19,113,222,56,111,156,55,207,155,231,205,243,230,53,10,35,171,86,225,26,139,91,67,223,26,250,214,208,183,134,185,167,207,61,157,245,140,246,238,155,154,139,243,218,121,237,188,247,211,117,238,199,235,220,207,215,185,53,207,173,121,110,205,115,107,158,80,83,114,222,91,243,220,154,231,214,60,183,230,185,53,207,173,153,133,143,173,203,121,235,188,165,102,230,188,215,90,205,237,212,220,78,205,117,72,115,221,209,92,103,52,183,35,163,182,72,45,145,218,33,181,66,215,247,204,30,234,20,216,99,183,199,110,77,119,230,122,163,239,247,138,31,33,104,243,108,157,125,103,251,236,156,93,90,205,71,158,167,245,179,135,245,195,250,97,253,176,126,88,63,172,31,54,14,27,135,141,195,198,97,227,176,113,216,56,108,28,22,26,190,199,19,75,107,103,253,108,156,205,179,117,246,157,237,179,66,45,109,31,182,15,219,135,237,195,246,97,251,176,125,216,62,108,31,182,15,59,135,157,195,206,97,231,176,115,216,57,236,28,118,14,59,135,157,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,239,61,221,185,84,133,65,255,93,202,194,96,26,92,67,104,72,13,165,65,191,199,248,251,138,131,162,152,162,184,162,184,162,184,162,184,162,184,162,184,162,184,162,184,162,184,162,184,162,132,162,132,162,132,162,132,162,60,249,158,124,79,190,247,231,211,19,158,158,240,244,132,167,39,60,61,225,233,9,173,40,173,40,173,40,173,40,173,40,173,40,173,40,173,40,173,40,173,40,163,40,163,40,163,40,163,40,163,40,87,53,119,165,231,74,207,149,158,107,127,190,167,161,53,140,134,123,194,74,207,149,158,43,61,87,122,174,244,92,233,185,210,115,165,231,74,207,149,158,43,61,87,122,174,244,92,233,185,161,40,161,40,161,40,161,40,210,115,37,228,74,200,149,116,43,177,86,98,109,255,249,244,88,201,179,146,103,165,203,74,151,149,46,251,167,203,40,244,8,174,95,255,203,142,2,191,245,239,87,252,119,95,108,56,232,3,128,201,231,159,6,211,224,26,66,67,106,40,13,138,226,138,226,138,226,138,18,138,18,138,18,138,18,138,18,138,18,138,18,138,18,138,18,138,18,138,146,138,146,138,242,228,123,242,181,110,182,66,183,66,183,66,183,130,181,0,45,192,40,216,8,55,194,141,112,35,220,104,45,35,248,8,254,167,217,10,190,130,223,151,132,207,36,150,73,44,147,74,38,149,76,42,153,84,50,201,99,146,199,36,143,73,30,147,60,38,93,76,18,152,36,48,73,96,146,224,190,17,113,208,131,82,0,73,96,146,192,250,239,166,158,222,122,186,4,49,9,98,18,196,36,136,73,16,147,32,38,65,76,130,176,113,191,65,81,164,139,73,23,147,46,38,93,76,186,216,159,46,171,40,171,40,171,40,171,40,123,81,92,42,233,187,17,134,167,225,207,55,26,238,9,46,177,92,98,233,203,18,134,208,160,40,58,75,250,214,132,65,81,36,164,75,72,125,125,194,160,40,18,210,37,164,190,71,97,80,148,84,148,84,148,84,148,84,20,233,233,210,83,159,156,62,151,158,250,246,244,185,244,212,71,168,207,165,167,190,70,125,46,61,245,89,234,115,233,169,239,83,159,75,79,125,168,250,92,122,234,139,213,231,210,83,159,174,62,151,158,250,134,245,249,159,158,250,140,119,125,191,127,161,239,121,215,249,99,144,158,33,61,67,122,134,244,12,233,25,210,51,164,103,72,207,144,158,33,61,67,122,134,244,12,233,25,210,51,164,103,72,207,144,158,33,61,67,122,134,244,12,233,25,210,243,62,113,113,80,148,82,148,82,20,233,25,210,51,164,103,204,159,79,79,144,158,33,61,67,122,134,244,12,233,25,210,51,164,103,72,207,144,158,33,61,67,122,134,244,12,233,25,210,51,164,103,74,207,148,158,249,247,161,244,11,13,169,225,162,164,244,76,233,153,210,51,227,207,247,52,180,134,209,160,39,72,207,148,158,41,61,83,122,166,244,76,233,153,210,51,165,103,74,207,148,158,41,61,83,122,166,244,76,233,121,63,91,56,40,74,41,74,41,138,52,75,105,150,210,44,165,89,74,179,148,102,41,205,82,154,165,52,75,105,150,210,44,165,89,73,179,146,102,37,205,74,154,149,52,43,105,86,250,220,92,95,107,24,13,138,98,138,98,138,98,138,34,9,74,18,148,36,40,73,80,146,160,36,65,73,130,146,4,37,9,74,18,148,36,40,73,80,165,40,165,40,79,81,158,162,60,69,121,138,242,20,229,41,202,83,148,167,40,42,82,165,34,85,247,157,250,123,127,223,212,197,246,137,237,19,219,39,182,79,108,159,216,62,177,125,98,251,44,52,40,138,41,138,106,248,83,13,127,170,225,79,53,252,169,44,61,149,165,167,26,254,84,157,158,242,238,83,222,125,202,187,79,121,247,41,79,60,177,125,98,251,196,246,137,237,19,219,39,182,239,253,1,244,216,63,182,170,204,79,101,233,169,44,61,149,165,167,178,244,148,70,159,210,232,83,26,125,74,163,79,175,253,211,107,255,244,218,63,189,246,79,175,253,211,107,255,244,218,183,216,182,216,182,216,182,216,182,216,182,216,182,255,1,90,195,104,184,199,182,178,98,43,43,182,222,226,214,91,220,122,139,91,111,113,235,45,110,189,197,173,183,184,245,22,183,222,226,214,91,220,122,139,91,111,113,235,45,238,158,255,254,7,145,53,233,171,106,31,0,0])))