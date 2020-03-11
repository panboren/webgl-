function init(gl,VERTEX_SHADER,FRAG_SHADER){
    //创建顶点着色器
    let vertex = gl.createShader(gl.VERTEX_SHADER);
    //创建片源着色器
    let frag = gl.createShader(gl.FRAGMENT_SHADER);
    //指定顶点着色器和片元着色器对象
    gl.shaderSource(vertex, VERTEX_SHADER);
    gl.shaderSource(frag, FRAG_SHADER);
    //编译顶点和片元着色器
    gl.compileShader(vertex);
    gl.compileShader(frag);
    //创建程序对象
    let program = gl.createProgram();
    //分配着色器对象
    gl.attachShader(program, vertex);
    gl.attachShader(program, frag);
    //链接程序对象
    gl.linkProgram(program);
    //告诉webgl使用对象
    gl.useProgram(program);
     return program;
}

function bufferInit(gl,dataVertices,attr,program) {
    //创建buffer
    let buffer=gl.createBuffer();
    //绑定buffer 目标
    gl.bindBuffer(gl.ARRAY_BUFFER,buffer);

    //向缓冲区buffer写入数据
    gl.bufferData(gl.ARRAY_BUFFER,dataVertices,gl.STATIC_DRAW);

    //获取 attribute
    let a_pos = gl.getAttribLocation(program, attr);
    //向缓冲区对象分配给a_pos对象   2 代表放置顶点信息dataVertices 两个数为一组
    gl.vertexAttribPointer(a_pos,2,gl.FLOAT,false,0,0);
    //开启attribute对象
    gl.enableVertexAttribArray(a_pos);

}