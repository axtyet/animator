
## 奇点阅读去广告脚本



const version = 'V1.0.0';


var obj=JSON.parse($response.body);const propertiesToDelete=["ads2","adSource2","third"];for(const prop of propertiesToDelete)obj.data?.[prop]&&(obj.data[prop]={});$done({body:JSON.stringify(obj)});
