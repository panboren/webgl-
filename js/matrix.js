function translate(x,y,z) {
   return new Float32Array([
       1.0,0.0,0.0,0.0,
       0.0,1.0,0.0,0.0,
       0.0,0.0,1.0,0.0,
       x,y,z,1.0,
   ]);
}

function rotote(angle) {
    let sinB=Math.sin(Math.PI*angle/180.0);
    let conB=Math.cos(Math.PI*angle/180.0);
    return new Float32Array([
        conB,sinB,0.0,0.0,
        -sinB,conB,0.0,0.0,
        0.0,0.0,1.0,0.0,
        0.0,0.0,0.0,1.0,
    ]);
}
function scale(x,y,z) {
    return new Float32Array([
        x,0.0,0.0,0.0,
        0.0,y,0.0,0.0,
        0.0,0.0,z,0.0,
        0.0,0.0,0.0,1.0,
    ]);
}






























































