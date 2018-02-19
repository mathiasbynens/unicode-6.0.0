module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,19,93,217,219,178,236,166,21,133,225,119,217,215,185,88,192,68,160,75,9,129,19,59,231,56,7,219,201,99,228,253,163,42,235,235,42,229,130,93,67,181,197,175,65,211,115,104,210,235,151,111,199,183,223,124,59,239,49,238,113,221,99,222,99,221,227,187,123,252,246,30,191,187,199,247,247,248,225,30,191,191,199,31,238,241,199,123,252,233,30,127,190,199,95,238,241,215,123,252,237,30,63,222,227,239,247,248,199,61,254,121,143,127,221,227,167,123,252,124,143,127,255,247,235,235,172,143,24,95,68,34,50,81,136,32,62,179,54,162,17,157,216,137,131,56,137,65,92,196,36,214,35,46,126,46,126,46,126,46,126,46,126,46,126,46,126,46,54,46,54,46,54,46,54,46,54,46,54,46,54,174,199,70,250,250,34,50,17,196,70,116,226,32,6,241,0,83,194,73,56,9,39,225,36,156,132,147,112,18,78,198,201,56,25,39,227,100,156,140,147,113,50,78,193,41,56,5,167,224,148,157,56,137,139,240,249,68,34,10,81,137,70,224,4,63,193,79,240,83,249,169,252,84,126,42,63,213,186,42,78,197,169,56,27,206,134,179,225,108,56,27,206,134,179,225,108,56,13,167,225,52,156,134,211,112,154,5,54,31,84,243,65,53,31,84,247,65,117,192,14,216,1,187,79,172,3,118,14,59,114,231,176,35,239,172,238,30,177,219,139,221,35,118,143,216,61,98,103,126,183,246,157,231,29,249,64,62,120,62,0,15,192,3,240,224,249,0,60,88,61,0,79,14,79,192,147,85,65,148,78,192,147,195,19,80,254,36,249,147,196,78,18,59,73,218,36,105,147,132,76,146,45,73,164,36,73,146,4,72,186,0,229,70,18,23,73,56,164,233,99,153,86,49,25,155,62,150,201,207,228,103,90,197,196,89,108,44,156,133,179,112,22,63,11,112,1,46,192,245,0,179,176,202,194,42,11,171,44,172,178,176,202,194,42,11,171,44,172,178,176,202,194,42,11,171,44,172,178,176,202,194,42,11,171,44,172,178,176,202,194,42,11,171,44,172,178,176,202,194,42,11,171,44,172,178,176,202,194,42,23,55,139,166,44,154,114,49,75,52,101,209,148,195,211,101,84,14,54,130,13,25,149,101,84,150,81,197,172,34,28,138,112,40,50,161,244,143,232,196,78,28,196,32,144,213,114,81,194,101,71,86,203,69,45,151,157,13,69,93,20,117,81,212,101,247,208,221,67,247,147,240,116,245,94,118,54,20,126,81,248,229,224,231,96,67,2,148,131,13,81,80,68,65,57,216,144,9,229,96,227,96,67,119,81,84,101,241,198,47,202,179,168,202,226,181,94,188,214,139,183,121,241,18,47,202,179,40,207,162,60,139,242,44,202,179,40,207,162,60,139,242,44,202,179,44,28,117,90,148,103,89,140,41,207,178,172,84,121,150,229,227,93,31,224,179,210,80,167,241,149,136,76,20,34,136,74,108,68,35,58,177,19,7,113,18,131,184,136,73,240,163,222,35,241,163,240,35,241,35,1,34,241,35,10,34,241,35,19,34,241,35,28,34,241,35,37,34,241,35,46,34,241,35,55,34,243,35,64,34,243,35,73,34,243,35,82,34,243,35,91,34,243,35,100,34,243,35,109,34,243,35,118,34,243,163,169,8,77,69,104,42,66,83,17,154,138,208,84,132,166,34,52,21,33,55,66,110,132,166,34,4,72,104,42,162,225,52,156,134,211,113,68,74,136,148,16,41,161,43,8,73,18,2,36,228,70,136,139,144,18,33,28,66,38,132,40,8,61,64,72,128,80,248,161,222,67,153,135,30,32,244,0,113,226,120,245,199,137,115,226,120,227,199,137,227,213,31,39,142,115,74,56,167,132,227,73,232,10,66,87,16,206,32,161,25,8,205,64,72,155,112,172,8,167,137,144,54,33,109,66,218,132,180,9,105,19,210,38,164,77,72,155,144,54,33,109,66,218,132,180,9,105,19,210,38,52,3,33,109,66,51,16,122,128,16,50,161,7,8,33,83,101,75,21,41,85,146,84,1,82,229,70,21,23,85,74,84,225,80,101,66,21,5,85,2,84,133,95,213,123,85,230,85,117,87,69,93,213,114,85,194,85,229,86,5,91,75,34,220,83,10,225,230,82,137,207,172,70,176,225,192,82,181,7,85,123,80,11,99,250,132,170,79,168,206,50,53,88,213,57,212,224,71,11,81,181,16,85,51,80,181,16,213,121,167,234,37,170,131,79,213,84,212,224,71,119,81,131,31,109,70,13,126,156,137,106,229,199,225,168,86,126,156,146,106,229,199,113,169,62,167,137,251,84,250,69,36,34,19,133,8,162,18,27,241,225,116,98,39,14,226,36,6,113,17,147,88,143,56,249,57,249,57,249,57,249,57,249,57,249,57,249,57,249,57,249,57,249,57,249,57,249,57,249,57,249,57,249,57,249,25,252,12,126,6,63,131,159,193,207,19,50,247,33,224,139,200,68,16,27,209,137,131,24,196,99,99,38,156,132,147,112,18,78,194,73,56,9,39,225,100,156,140,147,113,50,78,198,201,56,25,39,227,20,156,130,83,112,10,78,193,41,56,5,167,224,4,78,224,4,78,224,4,78,224,4,78,224,84,156,138,83,113,42,78,197,169,56,21,167,226,108,56,27,206,134,179,225,108,56,27,206,134,179,225,52,156,134,211,112,26,78,195,105,56,13,167,225,116,156,142,211,113,58,78,199,233,56,29,167,227,236,56,59,206,142,179,155,245,52,255,183,48,75,38,76,81,48,37,192,84,248,83,189,79,101,62,85,247,84,212,83,45,79,37,60,85,238,84,176,83,157,78,229,57,85,229,84,140,83,13,78,165,55,85,220,28,56,3,103,224,12,156,129,115,225,92,56,23,206,133,115,225,92,56,23,206,133,51,113,38,206,196,153,56,19,103,226,76,156,137,179,112,22,206,194,89,56,11,103,225,44,156,231,181,158,150,36,89,79,171,127,139,131,56,137,65,92,196,103,250,147,117,75,146,172,132,35,82,86,194,145,45,43,225,200,141,149,205,18,32,43,155,37,73,86,254,204,242,244,236,233,114,99,21,28,1,178,10,142,36,89,5,71,164,172,130,35,55,86,224,8,144,21,56,146,100,5,78,117,115,117,79,253,252,23,178,4,88,155,155,69,193,218,204,146,9,107,51,93,56,172,13,71,117,175,231,119,191,91,100,162,16,65,84,98,35,26,193,79,231,71,20,172,206,143,76,88,157,31,225,176,58,63,82,98,237,252,136,139,181,243,35,55,214,206,207,206,207,206,207,206,207,206,143,144,89,66,102,237,252,236,252,136,157,181,243,35,127,150,158,100,9,162,165,39,89,18,105,233,73,150,104,90,122,146,37,163,150,158,100,9,171,165,39,89,82,107,233,73,150,248,90,122,146,37,190,150,14,100,201,177,165,223,88,114,108,233,55,150,64,91,250,141,37,217,150,28,91,90,136,37,208,214,0,20,104,107,0,74,182,53,0,69,220,146,90,235,114,179,248,90,151,155,37,210,154,238,17,77,107,126,238,1,148,72,107,113,40,154,214,226,80,52,173,5,40,163,214,2,124,194,42,251,3,68,246,119,135,91,156,143,120,122,137,236,247,249,91,36,226,243,95,133,8,162,18,200,91,35,58,177,19,30,186,121,232,198,216,83,167,217,207,251,183,88,143,120,138,49,59,132,222,162,17,157,216,137,131,56,137,65,92,196,36,158,71,56,177,102,39,214,91,100,194,211,159,239,70,118,134,189,5,63,131,159,193,207,224,103,240,51,248,25,252,12,126,6,63,207,239,108,121,60,141,235,45,18,145,137,66,4,81,137,141,104,68,39,118,226,32,78,98,16,23,49,9,126,18,63,137,159,196,79,226,39,241,147,248,73,252,36,126,18,63,137,159,196,79,226,39,241,147,248,73,252,36,126,50,63,153,159,204,79,230,39,243,147,249,241,229,31,153,159,204,79,230,71,93,12,117,49,50,63,153,159,204,143,74,25,10,100,40,144,161,64,134,114,24,170,96,248,242,15,223,249,177,125,128,22,216,144,27,114,179,138,230,230,230,230,238,230,238,230,238,233,221,146,187,149,118,11,236,214,213,1,119,156,29,103,199,217,113,118,156,29,103,199,217,113,14,156,3,231,192,57,112,14,156,3,231,192,57,112,78,156,19,231,196,17,5,67,2,12,133,63,212,251,80,230,67,117,15,69,61,212,242,80,194,67,229,14,5,59,212,233,80,158,227,194,185,112,46,156,11,231,194,185,112,46,156,11,103,226,76,156,233,43,49,127,253,74,28,219,115,52,187,69,38,130,216,136,78,28,196,32,230,35,42,78,197,169,56,21,167,226,84,156,138,83,113,54,156,13,103,195,217,112,54,156,13,103,195,233,166,119,211,187,233,221,244,110,122,55,189,127,166,179,177,227,236,56,59,206,243,21,61,218,19,5,183,8,226,243,95,157,56,136,65,60,143,104,197,244,98,122,49,189,152,94,76,47,166,23,211,109,92,179,113,205,198,53,27,215,108,92,179,113,205,198,53,27,215,108,92,179,113,205,198,53,27,215,108,92,179,113,205,198,53,27,215,108,92,179,113,205,198,53,27,215,108,92,179,113,205,198,181,13,231,249,3,250,45,78,226,34,220,99,151,155,93,110,118,185,217,229,214,77,239,166,219,211,118,124,132,233,135,233,135,233,79,110,172,243,121,69,222,34,17,153,40,68,16,149,216,30,145,220,147,220,147,220,147,62,247,252,26,221,119,23,150,136,76,20,34,136,74,108,196,103,122,39,118,226,32,78,98,16,23,49,137,245,136,231,103,159,91,240,83,248,41,252,20,126,10,63,133,159,194,79,225,167,240,243,124,159,175,254,149,238,127,181,31,159,203,244,190,204,239,203,242,190,140,247,101,125,95,110,239,203,246,190,236,239,203,253,125,249,127,38,207,247,229,120,95,94,239,203,249,190,92,175,203,244,94,111,122,175,55,189,215,155,222,235,77,239,245,166,247,122,211,123,189,233,189,222,244,94,111,122,175,55,189,215,155,222,235,77,239,245,166,247,122,211,123,189,233,189,222,252,94,111,126,175,55,191,215,155,223,235,205,239,245,230,247,122,243,123,189,119,9,252,231,127,179,17,237,134,45,39,0,0])))