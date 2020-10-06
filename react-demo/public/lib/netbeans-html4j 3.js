/* Failed to obfuscate: JAVA_UPPER_CASE */
bck2brwsr.register({
  'magic' : 'kaf\u010do'
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

function cz_xelfi_demo_react4jdemo_LikeButton$LikeState() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeButton$LikeState;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_LikeStateBeanInfo(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._liked = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LikeButton$LikeState_liked'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LikeButton$LikeState_liked']; };
    m = CLS.cons__VZ = function(lcI1) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_LikeStateBeanInfo || (refs_cz_xelfi_demo_react4jdemo_LikeStateBeanInfo = cz_xelfi_demo_react4jdemo_LikeStateBeanInfo(false))).constructor.cons__V.call(lcA0);
lcA0['fld_cz_xelfi_demo_react4jdemo_LikeButton$LikeState_liked'] = lcI1;
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeButton$LikeStatefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeButton$LikeState', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeButton$LikeStatefillInstOf });
    cz_xelfi_demo_react4jdemo_LikeButton$LikeStatefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeButton$LikeState';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_LikeStateBeanInfo;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_LikeButton$LikeState_liked'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeButton$LikeState = cz_xelfi_demo_react4jdemo_LikeButton$LikeState;


function cz_xelfi_demo_react4jdemo_LikeButton$LikeState() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeButton$LikeState;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_LikeStateBeanInfo(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._liked = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LikeButton$LikeState_liked'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LikeButton$LikeState_liked']; };
    m = CLS.cons__VZ = function(lcI1) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_LikeStateBeanInfo || (refs_cz_xelfi_demo_react4jdemo_LikeStateBeanInfo = cz_xelfi_demo_react4jdemo_LikeStateBeanInfo(false))).constructor.cons__V.call(lcA0);
lcA0['fld_cz_xelfi_demo_react4jdemo_LikeButton$LikeState_liked'] = lcI1;
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeButton$LikeStatefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeButton$LikeState', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeButton$LikeStatefillInstOf });
    cz_xelfi_demo_react4jdemo_LikeButton$LikeStatefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeButton$LikeState';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_LikeStateBeanInfo;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_LikeButton$LikeState_liked'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeButton$LikeState = cz_xelfi_demo_react4jdemo_LikeButton$LikeState;


function cz_xelfi_demo_react4jdemo_LikeStateBeanInfo() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeStateBeanInfo;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._info = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LikeStateBeanInfo_info'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LikeStateBeanInfo_info']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = (refs_com_dukescript_api_javafx_beans_FXBeanInfo || (refs_com_dukescript_api_javafx_beans_FXBeanInfo = vm.com_dukescript_api_javafx_beans_FXBeanInfo(false)))['newBuilder__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_Object_2'](lcA0);
var stA0 = invoker.build__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2(stA0);
return;

};
CLS['cons__V'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.getFXBeanInfo__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_cz_xelfi_demo_react4jdemo_LikeStateBeanInfo_info']) !== null) { gt = 39; break IF; }
if (lcA0 !== null && !lcA0['$instOf_cz_xelfi_demo_react4jdemo_LikeButton$LikeState']) vm.java_lang_Class(false).castEx(lcA0, 'cz.xelfi.demo.react4jdemo.LikeButton$LikeState');
var lcA1 = lcA0;
var stA0 = (refs_com_dukescript_api_javafx_beans_FXBeanInfo || (refs_com_dukescript_api_javafx_beans_FXBeanInfo = vm.com_dukescript_api_javafx_beans_FXBeanInfo(false)))['newBuilder__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_Object_2'](lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = "liked";var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA1['fld_cz_xelfi_demo_react4jdemo_LikeButton$LikeState_liked']);
var stA0 = invoker.constant__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = invoker.build__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2(lcA2);
stA0['fld_cz_xelfi_demo_react4jdemo_LikeStateBeanInfo_info'] = stA1;
    }
    X_39: for (;;) { IF: if (gt <= 39) {

return lcA0['fld_cz_xelfi_demo_react4jdemo_LikeStateBeanInfo_info'];

    }
}}
};
c['getFXBeanInfo__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeStateBeanInfofillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeStateBeanInfo', { value : true });
      vm.com_dukescript_api_javafx_beans_FXBeanInfo$Provider(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeStateBeanInfofillInstOf });
    cz_xelfi_demo_react4jdemo_LikeStateBeanInfofillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeStateBeanInfo';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.com_dukescript_api_javafx_beans_FXBeanInfo$Provider(false).constructor.$class
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_com_dukescript_api_javafx_beans_FXBeanInfo;
    var refs_java_lang_Boolean;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_LikeStateBeanInfo_info'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeStateBeanInfo = cz_xelfi_demo_react4jdemo_LikeStateBeanInfo;

vm.com_dukescript_api_javafx_beans_FXBeanInfo$Provider = link('com/dukescript/api/javafx/beans/FXBeanInfo$Provider', function(f) { vm.com_dukescript_api_javafx_beans_FXBeanInfo$Provider =  f; });
vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });
vm.com_dukescript_api_javafx_beans_FXBeanInfo = link('com/dukescript/api/javafx/beans/FXBeanInfo', function(f) { vm.com_dukescript_api_javafx_beans_FXBeanInfo =  f; });

function cz_xelfi_demo_react4jdemo_TicTacToe2$Square() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2$Square;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._className = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square_className'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square_className']; };
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
