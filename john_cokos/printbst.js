export function print(){
    var logtree = function(A){
    for(var i = 0; i < A.length; i++)
        A[i] = A[i].join("");
    A = A.join("\n");
    if(typeof $ != "undefined")
        $("#a").html(A);
    console.log(A);
    return A;
},
bintree = function(n, A, offset, lvl){
    if(typeof offset == "undefined") offset = 0;
    if(typeof lvl == "undefined") lvl = 0;
    var width = 3 * Math.pow(2, n) - 1,
        height = Math.ceil(width / 2),
        mid = Math.floor(width / 2),
        half = Math.ceil(height / 2),
        nsub = Math.pow(2, lvl),
        lim = offset + half - 1,
        l = "/",
        r = "\\";
    if(typeof A == "undefined"){
        A = [];
        for(var i = 0; i < height; i++){
            a = [];
            for(var j = 0; j < width; j++) a.push(" ");
            A[i] = a;
        }
    }
    for(var i = offset, inc = 0; i <= lim; i++){
        if(i == lim){
            l = 1;
            r = 0;
        }
        var a = 0, j = 0;
        for(var j = 0; j < nsub; j++){
            A[i][mid - inc + a - 1] = l;
            A[i][mid + inc + a + 1] = r;
            a += width + 1;
        }
        inc++;
    }
    if(n > 1)
        bintree(n - 1, A, offset + height / 2, ++lvl);
    return A;
};
logtree(bintree(4));
}