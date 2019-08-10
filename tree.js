function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

function generateBST(arr){
    function gene(node, index){
        var left = 2*index+1;
        var right = 2*index+2;
        if(left<=arr.length && arr[left] != null){
            node.left = new TreeNode(arr[left]);
            gene(node.left,left)
        }
        if(right<=arr.length && arr[right] != null){
            node.right = new TreeNode(arr[right]);
            gene(node.right,right);
        }
    }
    var root = new TreeNode(arr[0]);
    gene(root,0)

    return root;
};

var group = {
    generateBST:generateBST
}

module.exports = group;
