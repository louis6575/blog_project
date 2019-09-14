KindEditor.ready(function(K) {
                K.create('textarea[name=content]',{
                    width: '50%',
                    height:'600px',
                    uploadJson: '/admin/upload/kindeditor'
                });
        });