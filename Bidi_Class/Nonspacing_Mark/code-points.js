module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,19,45,152,91,150,237,170,14,67,59,84,31,11,76,252,104,203,25,183,255,221,184,154,214,254,136,168,149,72,142,3,2,67,253,87,217,127,149,243,87,245,211,117,116,93,93,161,235,233,250,116,165,174,210,37,94,137,215,226,181,120,45,94,139,215,226,181,120,45,94,139,215,226,181,120,35,222,136,55,226,141,120,35,222,136,55,226,141,120,35,222,204,95,255,126,186,142,174,171,43,116,61,93,159,174,212,85,186,90,151,120,71,188,35,222,17,239,136,119,196,59,226,29,241,142,120,71,188,35,222,21,239,138,119,197,187,226,93,241,174,120,87,188,43,222,21,239,138,23,226,133,120,33,94,136,23,226,133,120,33,94,136,23,226,133,120,79,188,39,222,19,239,137,247,196,123,226,61,241,158,120,79,188,39,222,39,222,39,222,39,222,39,222,39,222,39,222,39,222,39,222,39,222,39,94,138,151,226,165,120,41,94,138,151,226,165,120,41,158,198,163,53,30,173,241,104,141,71,107,60,90,227,209,26,143,214,120,180,198,163,53,30,173,241,104,141,199,57,122,137,32,129,2,26,224,129,222,36,56,127,231,233,251,5,9,20,208,128,40,79,157,32,128,162,110,16,4,240,0,20,129,34,80,4,138,64,241,80,60,20,15,197,67,241,80,60,20,15,197,67,241,80,60,20,31,138,15,197,135,226,67,241,161,32,241,71,226,143,196,31,137,63,18,127,36,254,54,241,68,145,40,18,69,162,72,20,137,34,81,36,138,130,92,240,10,94,65,41,40,244,208,199,123,63,222,251,241,222,143,247,126,188,247,227,189,31,239,253,120,239,199,123,63,222,251,241,222,148,219,4,251,87,0,15,248,128,4,10,104,64,218,148,237,4,40,46,138,139,226,162,160,239,147,190,79,250,62,233,251,164,239,147,190,79,250,62,233,171,162,155,138,110,42,210,45,210,45,210,45,210,45,210,45,146,44,146,44,146,44,146,44,58,167,232,156,162,75,152,205,135,169,124,152,203,135,201,124,152,205,135,41,116,240,242,193,204,7,55,31,236,124,240,243,193,208,7,71,31,44,125,240,244,193,212,7,87,31,108,125,240,245,193,216,7,103,31,172,125,240,246,193,220,7,119,31,236,125,240,247,193,224,7,135,31,44,126,240,248,193,228,7,151,159,129,60,144,7,242,64,30,200,3,121,32,15,228,89,50,159,53,250,172,251,83,255,9,246,175,17,168,255,4,7,184,64,0,15,248,4,197,211,226,105,241,180,120,90,251,32,1,66,21,161,138,80,13,185,33,55,228,134,220,144,27,114,67,110,120,3,111,224,13,60,45,107,247,104,126,8,26,16,37,180,124,9,62,64,218,208,103,9,184,151,60,37,171,32,171,32,171,32,171,40,158,146,90,144,90,144,70,240,242,232,253,89,64,3,4,32,131,32,131,167,245,82,160,0,204,218,251,72,232,105,93,21,52,32,242,167,165,85,192,95,244,213,71,95,97,239,139,189,47,142,189,184,243,226,206,139,19,5,60,160,255,50,246,158,226,229,227,1,233,38,233,38,93,151,228,146,228,82,178,202,197,172,23,179,94,204,122,49,171,160,0,241,112,172,128,7,124,17,69,226,178,98,95,150,178,203,26,118,155,143,110,250,190,233,251,86,77,185,77,239,14,95,57,154,121,2,5,24,89,52,126,170,8,241,211,84,139,163,225,22,124,128,30,104,77,3,2,224,193,219,123,5,52,48,130,143,159,31,63,53,20,2,69,185,202,47,148,32,160,167,87,253,39,16,57,148,129,224,1,31,32,202,211,208,6,75,105,176,148,6,29,43,104,64,138,239,241,147,52,82,131,18,116,98,208,137,130,6,68,73,40,244,169,0,158,58,76,0,143,212,146,212,242,131,71,86,153,240,52,90,193,140,15,230,121,208,147,130,4,10,104,64,10,102,124,48,227,131,154,28,20,229,160,199,131,30,15,234,114,80,152,131,217,24,204,198,160,139,5,251,151,40,163,97,20,60,224,3,18,216,7,13,72,203,132,13,38,108,48,97,131,9,27,76,216,96,194,6,19,54,152,171,2,200,116,241,144,213,144,213,20,188,130,215,220,107,238,53,1,72,119,122,31,16,128,116,135,116,135,116,103,136,50,40,72,119,24,143,33,231,97,60,102,19,103,200,70,67,246,126,178,188,224,0,23,8,224,1,31,144,64,1,13,160,56,40,14,138,131,226,160,56,40,14,138,131,226,160,56,40,14,138,139,226,162,184,40,46,138,139,226,162,184,40,46,138,139,66,3,255,142,134,251,225,206,135,59,31,238,124,184,243,225,206,135,59,31,238,124,71,171,173,0,242,7,239,131,247,65,249,160,52,63,213,77,239,12,188,129,167,105,255,46,223,113,249,142,203,119,92,190,227,146,198,189,60,8,30,200,132,218,5,40,40,3,250,24,208,199,128,126,163,46,17,20,208,130,88,224,129,124,250,49,130,31,35,152,116,103,210,157,249,219,159,197,207,218,159,15,248,128,4,74,208,252,165,193,75,86,204,100,197,76,86,204,100,197,20,160,24,20,3,111,80,104,4,5,82,156,31,32,255,37,123,154,228,243,181,52,73,198,14,37,89,235,146,29,74,178,27,73,118,35,201,6,35,217,66,36,91,136,100,11,145,89,128,150,245,44,117,187,224,1,31,144,64,1,13,136,71,233,77,170,110,178,134,37,43,151,128,167,132,98,249,74,166,95,82,112,147,130,155,76,196,100,190,37,243,45,169,176,201,134,57,217,49,39,91,230,100,207,156,108,154,147,93,115,214,230,34,183,231,104,120,4,251,215,3,164,96,10,37,179,39,41,119,201,20,74,166,80,50,0,201,236,17,104,191,140,255,10,255,21,254,43,252,87,248,175,240,95,225,191,194,127,133,255,234,247,224,61,120,236,229,25,163,98,140,138,49,42,106,94,81,243,10,99,22,158,20,124,128,222,129,9,5,60,144,105,10,75,9,246,175,7,124,64,2,5,52,32,217,37,161,75,66,212,50,65,1,122,26,188,141,210,38,184,0,20,78,14,84,186,162,210,21,149,174,168,116,69,165,43,42,93,81,233,4,40,56,62,176,12,23,203,176,0,50,71,8,205,251,191,210,84,6,244,148,189,89,177,55,43,246,102,197,222,172,168,116,197,222,172,216,155,21,123,179,98,111,86,84,191,162,250,21,123,179,98,111,86,236,205,138,189,89,81,17,139,138,88,44,230,2,20,129,34,80,4,138,64,17,40,232,108,150,245,98,89,23,160,160,79,147,62,205,135,226,161,120,40,232,226,252,80,208,207,73,63,39,253,156,31,10,186,142,50,43,128,92,123,8,225,20,194,49,137,186,223,212,125,1,39,17,142,74,143,179,210,227,176,244,56,45,61,142,75,239,236,185,5,5,39,166,199,145,233,113,102,122,28,154,30,167,166,199,177,233,113,110,122,28,156,30,39,167,119,247,168,131,130,195,211,227,244,196,241,161,169,121,77,205,107,142,15,205,241,161,57,62,52,199,135,222,227,131,150,175,88,124,139,28,75,248,230,115,152,126,224,183,152,139,190,223,139,28,86,118,255,235,13,176,119,192,222,2,123,15,236,77,176,119,193,167,246,152,83,123,206,217,45,177,247,196,222,20,123,87,236,109,177,247,197,135,130,9,174,54,87,155,171,205,213,214,106,107,181,181,218,90,109,173,86,147,230,220,96,171,46,60,139,119,49,22,223,34,156,61,19,93,14,69,234,41,74,140,176,23,89,131,115,87,103,140,8,178,72,87,228,162,152,177,53,40,182,234,196,150,24,237,34,191,69,113,226,82,191,226,234,189,96,44,250,206,183,184,156,141,115,41,54,66,34,104,111,184,120,22,87,251,86,251,86,187,241,175,227,191,213,190,213,82,134,244,185,119,49,22,223,226,183,152,139,181,216,139,203,223,76,98,51,137,205,36,54,147,216,76,98,51,137,205,36,54,147,216,76,98,51,137,205,132,57,254,118,195,245,118,199,165,37,126,57,111,51,124,155,225,219,12,223,102,200,81,82,103,212,60,139,254,59,22,223,226,183,152,139,240,191,250,45,46,167,150,211,196,252,6,78,254,195,94,132,95,236,35,132,177,8,191,118,140,138,2,43,212,125,111,41,188,147,216,109,131,38,62,117,239,99,45,6,191,69,223,169,197,94,28,80,142,2,207,226,93,140,197,213,198,106,99,181,177,218,88,109,172,246,219,251,223,222,255,246,254,183,247,115,99,230,198,164,84,37,46,82,17,164,192,246,86,216,222,18,219,71,11,9,120,23,123,113,239,235,27,193,125,250,237,83,205,65,240,45,82,144,88,11,41,80,91,161,122,239,80,227,133,103,241,46,46,103,182,168,205,214,183,217,218,54,91,220,198,213,205,229,109,235,27,249,8,183,204,229,222,225,43,134,255,247,128,119,49,22,223,98,45,50,139,135,45,213,54,207,205,183,77,250,102,250,102,254,187,153,110,202,141,229,187,10,204,217,101,64,141,117,101,93,89,87,214,149,117,101,221,254,239,101,216,118,109,115,220,92,55,27,37,118,41,82,243,239,215,251,35,134,190,111,155,227,230,186,9,55,255,40,159,155,116,83,110,218,205,108,83,142,82,142,82,142,82,142,82,142,82,142,82,142,82,142,82,142,82,142,210,142,210,142,210,142,210,142,210,142,210,142,210,142,210,142,210,142,210,142,50,142,50,142,50,142,50,142,50,142,50,142,50,142,50,142,50,142,50,27,133,255,3,110,115,220,92,55,225,230,185,249,220,164,155,114,211,110,28,229,56,202,113,148,227,40,199,81,142,163,28,71,57,142,114,28,229,56,202,113,148,235,40,215,81,174,163,92,71,185,142,114,29,229,58,202,117,148,235,40,215,81,194,81,194,81,194,81,194,81,194,81,194,81,194,81,194,81,194,81,194,81,158,163,60,71,121,142,242,28,229,57,202,115,148,231,40,207,81,158,163,60,71,249,28,229,115,148,207,81,62,71,249,28,229,115,148,207,81,62,71,249,28,229,115,20,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,199,222,29,123,119,236,221,177,119,103,230,127,255,7,70,47,158,144,254,25,0,0])))