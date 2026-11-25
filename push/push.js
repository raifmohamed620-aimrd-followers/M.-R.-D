(function(){
if(location.search.indexOf("pushtest=1")<0)return;
var s=document.createElement("script");
s.src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js";
s.defer=true;
document.head.appendChild(s);
window.OneSignalDeferred=window.OneSignalDeferred||[];
OneSignalDeferred.push(async function(OneSignal){
await OneSignal.init({appId:"803ec053-3d28-4d12-a86e-51917c52ea28",serviceWorkerPath:"M.-R.-D/push/onesignal/OneSignalSDKWorker.js",serviceWorkerParam:{scope:"/M.-R.-D/push/onesignal/"},autoResubscribe:true,notifyButton:{enable:false},promptOptions:{}});
if(OneSignal.Notifications.permission)return;
var c=document.createElement("div");
c.setAttribute("dir","rtl");
c.style.cssText="position:fixed;left:12px;right:12px;bottom:12px;z-index:99999;background:#111;color:#f5d27a;border:1px solid #c9a227;border-radius:14px;padding:14px;font-family:inherit;box-shadow:0 4px 20px rgba(0,0,0,.5)";
var p=document.createElement("div");
p.textContent="تحب يوصلك إشعار لما أسعار الخدمات تتغيّر أو ينزل تحديث جديد؟ تقدر تلغيه في أي وقت.";
p.style.marginBottom="10px";
var a=document.createElement("button");
a.type="button";a.textContent="تفعيل";
a.style.cssText="background:#c9a227;color:#000;border:0;border-radius:10px;padding:8px 16px;margin-left:8px;font-weight:700";
var b=document.createElement("button");
b.type="button";b.textContent="مش دلوقتي";
b.style.cssText="background:transparent;color:#f5d27a;border:1px solid #c9a227;border-radius:10px;padding:8px 16px";
a.onclick=function(){c.remove();OneSignal.Notifications.requestPermission()};
b.onclick=function(){c.remove()};
c.appendChild(p);c.appendChild(a);c.appendChild(b);
document.body.appendChild(c);
});
})();
