function Tree(tree) {
  var txt=JSON.stringify(tree);
  this.data=JSON.parse(txt);
  function newnode(path, ws, callback) {
      var nowtree = this.data;
      var nowtreeP = this.print;
      path.split('.', function(foldername) {
        var nexttree;
        var nexttreeP;
        nowtree.forEach(function(node) {
          if (node.text == foldername) {
            nexttree = node.children;
          }
        });
        nowtreeP.forEach(function(node) {
          if (node.text == foldername) {
            nexttreeP = node.children;
          }
        });
        nowtree = nexttree;
        nowtreeP = nexttreeP;
      });
      var newnode;
      if (ws.isFolder == 1)
      {
        newnode = {
          text: ws.filename,
          children: []
        }
        nowtree.children.push(newnode);
        nowtreeP.children.push(newnode);
      }
      else{
        newnode = {
          text: ws.filename,
          fid: ws.id,
        }
        /*find by id */
      }
     
      callback();
    }
}
module.exports = Tree;