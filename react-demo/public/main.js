/* Failed to obfuscate: JAVA_UPPER_CASE */
bck2brwsr.register({
  'magic' : 'kaf\u010do',
  'classpath' : [
    'lib/emul-0.31-rt.js',
    'lib/netbeans-html4j.js',
    'lib/api.js',
    'lib/net.java.html.boot-1.7.js',
    'lib/net.java.html.json-1.7.js',
    'lib/javafx.beaninfo-0.6.js',
    'lib/javafx.base-8.60.11.js',
    'lib/net.java.html-1.7.js'
  ]
}, function(exports) {
  var vm = {};
  function link(n, assign) {
    function replaceAll(s, o, n) {
      var pos = 0;
      for (;;) {
         var indx = s.indexOf(o, pos);
         if (indx === -1) {
           return s;
         }
         pos = indx + n.length;
         s = s.substring(0, indx) + n + s.substring(indx + o.length);
      }
    }
    return function() {
      var no_ = replaceAll(n, '_', '_1');
      var cls = replaceAll(no_, '/', '_');
      var dot = replaceAll(n, '/', '.');
      exports.loadClass(dot);
      assign(exports[cls]);
      return exports[cls](arguments);
    };
  };

  var invoker = {};
  function registerClass(vm, name, fn) {
    if (!vm[name]) vm[name] = fn;
    return vm[name];
  }
vm.java_lang_Object = link('java/lang/Object', function(f) { vm.java_lang_Object =  f; });
vm.java_lang_Class = link('java/lang/Class', function(f) { vm.java_lang_Class =  f; });
vm.java_lang_ArithmeticException = link('java/lang/ArithmeticException', function(f) { vm.java_lang_ArithmeticException =  f; });

function cz_xelfi_demo_react4jdemo_BrowserMain() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_BrowserMain;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.main__V_3Ljava_lang_String_2 = function(lcA0) {
(refs_cz_xelfi_demo_react4jdemo_OnPageLoad || (refs_cz_xelfi_demo_react4jdemo_OnPageLoad = vm.cz_xelfi_demo_react4jdemo_OnPageLoad(false)))['main__V_3Ljava_lang_String_2'](lcA0);
return;

};
c['main__V_3Ljava_lang_String_2'] = m;

    m.access = 137;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_BrowserMainfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_BrowserMain', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_BrowserMainfillInstOf });
    cz_xelfi_demo_react4jdemo_BrowserMainfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/BrowserMain';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_OnPageLoad;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_BrowserMain = registerClass(exports,'cz_xelfi_demo_react4jdemo_BrowserMain',cz_xelfi_demo_react4jdemo_BrowserMain);

vm.cz_xelfi_demo_react4jdemo_OnPageLoad = link('cz/xelfi/demo/react4jdemo/OnPageLoad', function(f) { vm.cz_xelfi_demo_react4jdemo_OnPageLoad =  f; });

function java_util_function_Consumer() {
  var m;
  var CLS = java_util_function_Consumer;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.accept__VLjava_lang_Object_2 = function(lcA1) {
};
c['accept__VLjava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function java_util_function_ConsumerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_java_util_function_Consumer', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: java_util_function_ConsumerfillInstOf });
    java_util_function_ConsumerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'java/util/function/Consumer';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1537;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/FunctionalInterface;" : {

}

    };
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_util_function_Consumer = registerClass(exports,'java_util_function_Consumer',java_util_function_Consumer);

vm.java_lang_FunctionalInterface = link('java/lang/FunctionalInterface', function(f) { vm.java_lang_FunctionalInterface =  f; });
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQoNCg==');
});