module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,19,45,153,219,149,236,58,14,67,19,234,143,178,40,241,17,203,93,147,127,26,131,77,156,143,130,187,202,0,45,211,16,77,169,255,171,236,191,202,249,171,250,233,243,233,115,244,9,125,174,62,79,159,212,167,244,17,175,196,107,241,90,188,22,175,197,107,241,90,188,22,175,197,107,241,90,188,17,111,196,27,241,70,188,17,111,196,27,241,70,188,17,111,230,175,127,63,125,62,125,142,62,161,207,213,231,233,147,250,148,62,173,143,120,159,120,159,120,159,120,159,120,159,120,159,120,159,120,159,120,159,120,159,120,71,188,35,222,17,239,136,119,196,59,226,29,241,142,120,71,188,35,94,136,23,226,133,120,33,94,136,23,226,133,120,33,94,136,23,226,93,241,174,120,87,188,43,222,21,239,138,119,197,187,226,93,241,174,120,79,188,39,222,19,239,137,247,196,123,226,61,241,158,120,79,188,39,94,138,151,226,165,120,41,94,138,151,226,165,120,41,158,158,71,235,121,180,158,71,235,121,180,158,71,235,121,180,158,71,235,121,180,158,71,235,121,180,158,71,235,121,124,159,46,34,72,160,128,6,56,161,43,9,190,191,239,234,254,5,9,20,208,128,40,87,73,16,64,81,26,4,1,92,0,69,160,8,20,129,34,80,92,20,23,197,69,113,81,92,20,23,197,69,113,81,92,20,23,197,67,241,80,60,20,15,197,67,193,192,47,3,191,12,252,50,240,203,192,47,3,191,59,240,68,145,40,18,69,162,72,20,137,34,81,36,138,130,92,240,10,94,65,41,40,100,232,113,221,199,117,31,215,125,92,247,113,221,199,117,31,215,125,92,247,113,221,199,117,31,215,77,185,77,176,127,5,112,129,7,36,80,64,3,210,166,108,39,64,113,80,28,20,7,5,185,79,114,159,228,62,201,125,146,251,36,247,73,238,147,92,21,105,42,210,84,12,183,24,110,49,220,98,184,197,112,139,65,22,131,44,6,89,12,178,72,78,145,156,34,37,204,230,143,169,252,49,151,63,38,243,199,108,254,152,66,31,94,254,48,243,135,155,63,236,252,225,231,15,67,127,56,250,195,210,31,158,254,48,245,135,171,63,108,253,225,235,15,99,127,56,251,195,218,31,222,254,48,247,135,187,63,236,253,225,239,15,131,127,56,252,195,226,31,30,255,48,249,135,203,191,129,60,144,7,242,64,30,200,3,121,32,15,228,89,50,183,53,186,173,243,83,254,4,251,215,8,148,63,193,7,28,32,128,11,60,65,113,182,56,91,156,45,206,214,158,72,128,80,69,168,34,84,67,110,200,13,185,33,55,228,134,220,144,27,222,192,27,120,3,79,101,237,124,154,31,130,6,68,9,149,47,193,3,18,208,217,208,189,9,2,224,108,114,34,247,68,3,200,24,110,48,220,96,184,193,112,163,32,51,230,96,204,193,152,131,49,7,99,14,198,28,140,57,24,115,48,230,96,204,193,152,131,49,71,67,102,224,193,192,131,129,95,149,89,129,200,76,246,195,100,63,76,246,115,185,163,59,124,157,253,154,64,1,13,40,202,83,169,22,4,112,129,2,26,224,236,7,240,80,30,15,133,121,116,152,71,2,41,152,31,135,169,113,152,26,135,169,113,152,26,135,169,113,152,6,2,206,50,150,140,253,77,225,243,114,130,148,36,41,73,114,144,220,81,114,71,201,29,149,204,122,152,61,135,217,115,152,61,135,217,115,152,61,135,217,115,152,61,130,2,164,101,10,29,166,208,97,246,28,102,143,0,30,169,227,37,118,120,163,28,94,41,135,119,202,161,232,30,42,238,161,228,158,38,247,77,238,155,220,55,185,111,189,7,5,200,72,123,51,180,38,167,141,75,134,180,15,169,27,149,17,129,174,54,154,111,241,251,45,20,208,192,8,244,170,19,92,224,1,80,62,206,126,156,61,156,85,165,9,204,31,56,91,0,89,86,137,79,15,84,176,127,37,80,64,3,210,126,42,0,130,3,4,0,153,97,168,80,2,240,46,188,199,215,199,215,66,33,99,134,102,29,32,217,81,254,4,124,205,253,122,129,7,36,80,128,180,7,237,89,109,65,102,144,135,65,42,219,0,188,230,107,243,117,80,200,102,17,242,144,64,50,108,27,216,86,112,128,0,46,240,128,4,26,144,236,202,157,129,189,3,123,11,46,32,222,37,137,188,253,130,183,95,240,158,9,222,51,129,89,5,15,72,160,128,6,56,75,174,30,185,122,164,233,93,120,228,234,145,171,71,174,30,185,122,15,158,172,23,143,251,125,220,111,106,110,5,46,14,92,44,104,64,228,36,40,166,22,40,114,202,157,2,120,100,60,25,90,50,180,36,197,153,240,200,51,102,13,124,26,248,84,144,64,1,13,72,65,189,15,234,125,208,145,5,45,89,224,231,192,207,65,87,22,180,101,65,45,14,106,113,96,76,193,254,37,10,22,13,44,170,228,46,92,224,1,9,64,97,124,20,238,160,112,7,133,59,40,220,65,225,14,10,119,80,184,131,194,29,20,238,160,112,11,80,144,156,97,144,195,32,7,51,12,102,152,230,183,230,183,38,10,163,159,222,19,68,97,244,195,232,135,209,15,142,24,28,49,140,126,48,195,112,11,131,25,102,239,3,71,140,28,33,67,252,128,15,56,64,0,23,120,64,2,5,52,128,226,67,241,161,248,80,124,40,62,20,31,138,15,197,135,226,67,241,161,56,40,14,138,131,226,160,56,40,14,138,131,226,160,56,40,228,131,203,68,188,76,68,193,7,28,32,128,11,60,32,129,2,80,92,20,15,197,67,241,80,60,20,15,197,67,241,80,60,20,15,69,67,105,40,13,165,161,12,1,134,0,195,217,225,196,236,9,180,36,236,144,176,67,194,152,236,151,201,46,184,192,3,160,144,161,67,134,14,25,58,220,224,225,6,15,55,120,14,148,128,18,80,2,74,16,37,136,18,68,9,20,129,130,68,28,110,235,112,91,135,219,58,220,22,94,187,120,237,226,181,55,122,80,130,2,90,16,11,156,80,18,31,190,122,248,42,121,200,201,67,78,94,254,249,219,223,138,223,106,127,187,192,3,18,40,160,129,17,52,138,70,209,40,26,69,163,104,20,141,162,81,52,138,70,49,40,6,197,160,24,20,131,98,80,12,138,65,49,40,148,221,252,126,128,158,86,242,180,146,167,165,247,158,100,244,222,201,235,56,121,29,39,175,227,164,247,78,122,239,164,247,78,122,239,164,247,78,122,239,164,247,78,122,239,164,207,78,250,236,164,207,78,250,236,164,207,78,250,236,164,207,78,250,236,164,207,78,250,236,164,254,37,245,79,37,39,129,2,26,224,55,18,241,72,196,35,17,143,68,60,18,241,72,196,35,17,143,68,60,18,241,72,196,35,17,143,68,60,18,161,39,0,232,107,18,47,137,151,196,75,226,37,241,138,91,40,110,161,238,126,189,192,3,18,40,160,1,5,224,205,158,188,212,147,151,122,242,82,79,94,234,201,75,61,121,169,11,32,115,71,188,217,147,98,153,52,199,201,235,61,41,155,73,217,76,202,102,82,54,147,178,153,148,205,164,87,78,106,103,82,59,147,94,57,89,250,38,107,223,100,241,155,172,126,147,229,111,178,254,77,22,192,201,202,87,221,199,1,246,175,11,60,64,10,42,97,82,9,147,74,152,84,194,164,18,38,149,48,113,108,174,99,169,132,2,2,112,73,202,161,0,5,151,28,46,57,92,114,88,115,83,110,138,114,83,148,155,162,220,20,229,166,40,55,69,185,41,202,77,81,110,234,119,225,93,120,23,30,11,122,102,64,49,3,138,25,80,204,128,98,6,20,51,160,126,123,13,22,246,204,128,162,44,21,101,169,40,75,69,89,42,202,82,81,150,138,178,84,148,165,162,44,21,101,169,40,75,69,89,42,202,82,97,244,162,120,20,197,67,144,64,1,13,72,75,45,41,106,73,81,75,4,1,160,248,80,124,40,62,20,31,10,110,255,112,251,135,219,63,220,254,225,246,105,142,139,230,184,104,142,139,190,184,232,139,139,190,184,232,139,5,23,120,0,100,182,41,104,142,139,230,184,232,50,138,46,163,232,50,138,46,163,232,50,138,46,163,232,50,4,40,216,177,160,213,40,90,141,162,183,144,147,245,23,235,193,98,61,88,172,7,139,245,96,209,239,22,235,193,162,233,45,154,222,162,233,45,154,222,162,233,45,214,131,197,122,176,88,15,22,235,193,162,17,46,26,225,162,133,16,160,8,20,129,34,80,4,138,64,193,67,166,153,40,154,9,1,10,158,86,242,180,146,167,149,60,45,214,151,2,20,60,173,228,105,37,79,43,121,90,201,211,74,146,72,119,45,128,92,187,145,194,206,9,91,49,220,175,128,77,16,118,105,232,175,154,254,170,175,207,178,19,194,86,205,101,175,230,178,89,67,94,4,40,216,175,185,108,216,92,118,108,104,198,4,40,216,180,185,236,218,92,182,109,46,251,54,247,236,70,11,10,182,110,46,123,55,108,94,52,237,91,211,190,53,155,23,205,230,69,179,121,209,108,94,244,110,94,124,172,76,192,187,200,166,8,119,255,125,212,23,240,45,230,162,127,239,69,182,74,118,245,237,229,183,215,223,94,128,123,5,238,37,184,215,224,95,237,38,75,237,46,203,46,200,189,34,247,146,220,107,114,47,202,189,42,255,168,60,224,106,115,181,185,218,92,109,173,182,86,91,171,173,213,214,106,53,89,191,67,63,12,126,139,103,49,22,239,34,156,221,145,57,188,22,148,41,122,26,97,47,242,142,205,125,105,99,73,144,119,109,237,91,184,120,13,239,114,227,238,122,227,238,10,67,72,59,34,220,95,104,72,132,185,8,159,133,197,221,149,133,80,179,8,68,181,13,70,108,135,17,219,98,8,99,241,46,190,197,213,206,106,103,181,52,30,177,157,71,108,235,177,11,141,187,43,13,16,237,246,17,177,141,68,108,39,17,219,74,196,246,18,177,205,132,176,23,55,218,221,104,119,163,221,213,238,29,157,189,163,179,119,116,246,142,206,222,209,185,171,165,205,82,178,207,98,44,222,197,183,152,139,181,216,139,203,223,145,196,142,36,118,36,177,35,137,29,73,236,72,98,71,18,59,146,216,145,196,142,36,118,36,177,35,137,29,73,108,222,98,243,22,155,183,216,188,221,85,221,85,221,235,95,114,177,22,123,145,43,210,6,128,223,226,89,92,237,91,237,91,45,221,98,176,66,7,207,98,44,222,197,183,104,78,45,246,34,241,89,228,220,93,229,128,171,173,213,214,106,123,249,251,148,223,62,229,220,145,231,254,146,251,196,115,159,120,237,19,175,205,115,109,158,107,125,88,244,150,66,253,238,142,221,45,187,123,118,55,237,238,218,221,182,187,111,119,227,238,166,125,187,118,21,196,109,85,120,55,130,111,209,191,212,98,47,210,191,176,145,4,126,139,103,49,22,87,27,171,141,213,198,106,99,181,177,218,183,191,191,253,253,237,239,219,89,253,114,99,230,198,164,21,121,219,198,189,237,227,146,57,165,198,136,246,176,183,63,236,109,16,251,163,109,18,158,197,94,220,223,117,119,224,158,125,123,150,94,168,121,209,130,180,8,188,52,192,88,220,254,163,183,227,232,61,75,147,54,236,151,128,203,156,101,206,50,103,91,149,217,94,101,182,89,25,119,43,110,87,182,95,249,109,195,242,219,142,37,247,151,220,95,184,187,97,151,30,220,102,133,209,14,123,245,224,158,221,30,169,183,73,234,237,146,122,219,36,118,89,64,234,225,176,26,218,195,241,33,124,184,62,60,31,102,15,91,172,231,123,22,60,11,158,5,207,130,244,183,252,247,205,242,45,194,58,148,15,190,108,58,102,57,102,89,87,214,149,117,101,93,89,87,214,237,222,251,208,195,236,225,243,225,248,176,81,98,95,6,19,249,239,219,253,35,134,114,183,135,207,135,227,67,248,240,143,242,124,72,31,202,135,246,97,246,80,142,82,142,82,142,82,142,82,142,82,142,82,142,82,142,82,142,82,142,210,142,210,142,210,142,210,142,210,142,210,142,210,142,210,142,210,142,210,142,50,142,50,142,50,142,50,142,50,142,50,142,50,142,50,142,50,142,50,27,133,255,3,237,225,243,225,248,16,62,92,31,158,15,233,67,249,208,62,56,202,231,40,159,163,124,142,242,57,202,231,40,159,163,124,142,242,57,202,231,40,159,163,28,71,57,142,114,28,229,56,202,113,148,227,40,199,81,142,163,28,71,57,142,18,142,18,142,18,142,18,142,18,142,18,142,18,142,18,142,18,142,18,142,114,29,229,58,202,117,148,235,40,215,81,174,163,92,71,185,142,114,29,229,58,202,115,148,231,40,207,81,158,163,60,71,121,142,242,28,229,57,202,115,148,231,40,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,206,204,255,254,15,229,127,199,222,254,31,0,0])))