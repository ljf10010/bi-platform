define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$each),e=b.list,f=(b.item,b.$index,c.$escape),g="";return g+='<div class="con-tab">\r\n    <!--<span class="item">静止时间</span>-->\r\n    <span class="item">动态时间</span>\r\n</div>\r\n<div class="con-tab-content">\r\n    ',d(e,function(a){g+="\r\n    ","D"==a.type&&(g+='\r\n    <div class="item j-item" data-type="D">\r\n        <div class="title">日粒度设置</div>\r\n        <div class="content">\r\n            <input type="text" name="singleDateSetting" value="',g+=f(a.defaultSelectedVal),g+='"/>\r\n            <select>\r\n                <option value="D">日</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    '),g+="\r\n\r\n    ","W"==a.type&&(g+='\r\n    <div class="item j-item" data-type="W">\r\n        <div class="title">周粒度设置</div>\r\n        <div class="content">\r\n            <input type="text" name="singleDateSetting" value="',g+=f(a.defaultSelectedVal),g+='"/>\r\n            <select>\r\n                <option value="D"',"D"==a.defaultSelectedUnit&&(g+=" selected"),g+='>日</option>\r\n                <option value="W"',"W"==a.defaultSelectedUnit&&(g+=" selected"),g+=">周</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    "),g+="\r\n\r\n    ","M"==a.type&&(g+='\r\n    <div class="item j-item" data-type="M">\r\n        <div class="title">月粒度设置</div>\r\n        <div class="content">\r\n            <input type="text" name="singleDateSetting" value="',g+=f(a.defaultSelectedVal),g+='"/>\r\n            <select>\r\n                <option value="D"',"D"==a.defaultSelectedUnit&&(g+=" selected"),g+='>日</option>\r\n                <option value="W"',"W"==a.defaultSelectedUnit&&(g+=" selected"),g+='>周</option>\r\n                <option value="M"',"M"==a.defaultSelectedUnit&&(g+=" selected"),g+=">月</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    "),g+="\r\n\r\n    ","Q"==a.type&&(g+='\r\n    <div class="item j-item" data-type="Q">\r\n        <div class="title">季粒度设置</div>\r\n        <div class="content">\r\n            <input type="text" name="singleDateSetting" value="',g+=f(a.defaultSelectedVal),g+='"/>\r\n            <select>\r\n                <option value="D"',"D"==a.defaultSelectedUnit&&(g+=" selected"),g+='>日</option>\r\n                <option value="W"',"W"==a.defaultSelectedUnit&&(g+=" selected"),g+='>周</option>\r\n                <option value="M"',"M"==a.defaultSelectedUnit&&(g+=" selected"),g+='>月</option>\r\n                <option value="Q"',"Q"==a.defaultSelectedUnit&&(g+=" selected"),g+=">季</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    "),g+="\r\n\r\n    ","Y"==a.type&&(g+='\r\n    <div class="item j-item" data-type="Y">\r\n        <div class="title">季粒度设置</div>\r\n        <div class="content">\r\n            <input type="text" name="singleDateSetting" value="',g+=f(a.defaultSelectedVal),g+='"/>\r\n            <select>\r\n                <option value="D"',"D"==a.defaultSelectedUnit&&(g+=" selected"),g+='>日</option>\r\n                <option value="W"',"W"==a.defaultSelectedUnit&&(g+=" selected"),g+='>周</option>\r\n                <option value="M"',"M"==a.defaultSelectedUnit&&(g+=" selected"),g+='>月</option>\r\n                <option value="Q"',"Q"==a.defaultSelectedUnit&&(g+=" selected"),g+='>季</option>\r\n                <option value="Y"',"Y"==a.defaultSelectedUnit&&(g+=" selected"),g+=">年</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    "),g+="\r\n    "}),g+="\r\n</div>"}return{render:b}});