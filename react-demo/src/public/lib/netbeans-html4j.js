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
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square_className'] = "square";
invoker.setState__VLjava_lang_Object_2(lcA0,null);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderSquare__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0;var stA1 = invoker.state__Ljava_lang_Object_2(lcA0);
if ((stA1) !== null) { gt = 12; break IF; }
var stA1 = null;{ gt = 22; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stA1 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA1 !== null && !stA1['$instOf_java_lang_Character']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Character');
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var stA2 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1(false))).lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_TicTacToe2$Square_2(lcA0);
var stA0 = stA0.renderSquare__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2(stA1, stA2);
return stA0;

    }
}}}
};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.lambda$render$0__VLcz_xelfi_demo_react4jdemo_TicTacToe2$Square_2 = function(lcA0) {
var stA0 = lcA0;var stA1 = (refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false)))['valueOf__Ljava_lang_Character_2C']((88));
invoker.setState__VLjava_lang_Object_2(stA0,stA1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2$SquarefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2$Square', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2$SquarefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2$SquarefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2$Square';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1;
    var refs_java_lang_Character;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square_className'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2$Square = cz_xelfi_demo_react4jdemo_TicTacToe2$Square;

vm.java_lang_Character = link('java/lang/Character', function(f) { vm.java_lang_Character =  f; });

function cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arg$1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1_arg$1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1_arg$1']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe2$Square_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1_arg$1'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square = cz_xelfi_demo_react4jdemo_TicTacToe2$Square(false))).lambda$render$0__VLcz_xelfi_demo_react4jdemo_TicTacToe2$Square_2(lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1_arg$1']);
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_TicTacToe2$Square_2 = function(lcA0) {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1;
c.constructor.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe2$Square_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2$Square$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1_arg$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1;

vm.java_lang_Runnable = link('java/lang/Runnable', function(f) { vm.java_lang_Runnable =  f; });
vm.net_java_html_react_React$Component = link('net/java/html/react/React$Component', function(f) { vm.net_java_html_react_React$Component =  f; });

function cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_CodeComponent;
(refs_cz_xelfi_demo_react4jdemo_CodeComponent || (refs_cz_xelfi_demo_react4jdemo_CodeComponent = cz_xelfi_demo_react4jdemo_CodeComponent(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/CodeComponent$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_CodeComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1 = cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1;

vm.net_java_html_react_React$ComponentFactory = link('net/java/html/react/React$ComponentFactory', function(f) { vm.net_java_html_react_React$ComponentFactory =  f; });

function cz_xelfi_demo_react4jdemo_CodeComponent() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_CodeComponent;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_CLAZZ'] = null;
  m = c._CLAZZ = function (v) {  if (arguments.length == 1) CLS['fld_CLAZZ'] = v; return CLS['fld_CLAZZ']; };
  CLS['fld_WORDS'] = null;
  m = c._WORDS = function (v) {  if (arguments.length == 1) CLS['fld_WORDS'] = v; return CLS['fld_WORDS']; };
  CLS['fld_$$fn$$homePageUrl_1'] = null;
  m = c._$$fn$$homePageUrl_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$homePageUrl_1'] = v; return CLS['fld_$$fn$$homePageUrl_1']; };
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
var stA0 = invoker.as__Ljava_lang_Object_2Ljava_lang_Class_2(lcA1,(refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(stA0, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA2.getUrl__Ljava_lang_String_2();
stA0.loadCode__VLjava_lang_String_2Lcz_xelfi_demo_react4jdemo_CodeComponent_2(stA1, lcA0);
invoker.setState__VLjava_lang_Object_2(lcA0,lcA2);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.loadCode__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2Lcz_xelfi_demo_react4jdemo_CodeComponent_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA1,"/*");
if ((stI0) == 0) { gt = 29; break IF; }
var stI0 = invoker.indexOf__ILjava_lang_String_2(lcA1,"*/");
var lcI3 = stI0;
if ((lcI3) == (-1)) { gt = 29; break IF; }
var stA0 = invoker.substring__Ljava_lang_String_2I(lcA1,(((lcI3) + (2)) | 0));
var lcA1 = stA0;
    }
    X_29: for (;;) { IF: if (gt <= 29) {

var stA0 = lcA2;var stA1 = lcA0.clone__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2();
var stA1 = stA1.withCode__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2(lcA1);
invoker.setState__VLjava_lang_Object_2(stA0,stA1);
return;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.loadCodeFailed__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_Throwable_2Lcz_xelfi_demo_react4jdemo_CodeComponent_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getUrl__Ljava_lang_String_2();
var stI0 = invoker.startsWith__ZLjava_lang_String_2(stA0,"https://raw.githubusercontent.com/jtulach/netbeans-html4j/react4jdemo/src/main/java/cz/xelfi/demo/react4jdemo/");
if ((stI0) == 0) { gt = 23; break IF; }
var stA0 = lcA0;var stA1 = invoker.getMessage__Ljava_lang_String_2(lcA1);
stA0.setUrl__VLjava_lang_String_2(stA1);
{ gt = 58; break IF; }
    }
    X_23: for (;;) { IF: if (gt <= 23) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"https://raw.githubusercontent.com/jtulach/netbeans-html4j/react4jdemo/src/main/java/cz/xelfi/demo/react4jdemo/");
var stA2 = lcA0.getName__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setUrl__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = lcA0.getUrl__Ljava_lang_String_2();
stA0.loadCode__VLjava_lang_String_2Lcz_xelfi_demo_react4jdemo_CodeComponent_2(stA1, lcA2);
    }
    X_58: for (;;) { IF: if (gt <= 58) {

invoker.setState__VLjava_lang_Object_2(lcA2,lcA0);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(stA0, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var stA0 = stA0.getCode__Ljava_lang_String_2();
if ((stA0) !== null) { gt = 61; break IF; }
var stA0 = "div";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA5);
var stA5 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA5,"Loading ");
var stA6 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA6 !== null && !stA6['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(stA6, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var stA6 = stA6.getUrl__Ljava_lang_String_2();
var stA5 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA5,stA6);
var stA5 = invoker.toString__Ljava_lang_String_2(stA5);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA5);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
var lcA1 = stA0;
{ gt = 81; break IF; }
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stA0 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(stA0, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var stA0 = stA0.getCode__Ljava_lang_String_2();
var stA1 = (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['emptyMap__Ljava_util_Map_2']();
var stA2 = (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['emptySet__Ljava_util_Set_2']();
var stA0 = c.boldJavaKeywords__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_util_Map_2Ljava_util_Set_2(stA0, stA1, stA2);
var lcA1 = stA0;
    }
    X_81: for (;;) { IF: if (gt <= 81) {

var stA0 = "div";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 2);
var stA3 = stA2;var stI4 = 0;var stA5 = "table";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "width");
Array.at(stA6, 1, "100%");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA8 = stA7;var stI9 = 0;var stA10 = "tr";var stA11 = null;var stA12 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA13 = stA12;var stI14 = 0;var stA15 = "td";var stA16 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA16, 0, "align");
Array.at(stA16, 1, "center");
var stA16 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA16);
var stA17 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA18 = stA17;var stI19 = 0;var stA20 = "a";var stA21 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 4);
Array.at(stA21, 0, "target");
Array.at(stA21, 1, "_blank");
Array.at(stA21, 2, "href");
var stA22 = stA21;var stI23 = 3;var stA24 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA24);
var stA24 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA24,"https://github.com/jtulach/netbeans-html4j/blob/react4jdemo/src/main/java/cz/xelfi/demo/react4jdemo/");
var stA25 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA25 !== null && !stA25['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(stA25, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var stA25 = stA25.getName__Ljava_lang_String_2();
var stA24 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA24,stA25);
var stA24 = invoker.toString__Ljava_lang_String_2(stA24);
Array.at(stA22, stI23, stA24);
var stA21 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA21);
var stA22 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA23 = stA22;var stI24 = 0;var stA25 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA25 !== null && !stA25['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(stA25, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var stA25 = stA25.getName__Ljava_lang_String_2();
var stA25 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA25);
Array.at(stA23, stI24, stA25);
var stA20 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA20, stA21, stA22);
Array.at(stA18, stI19, stA20);
var stA15 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA15, stA16, stA17);
Array.at(stA13, stI14, stA15);
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, stA12);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
Array.at(stA2, 1, lcA1);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

    }
}}}
};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.homePageUrl__Ljava_lang_String_2 = function() {
  var r = (function() {
return window.location.href;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.loadCode__VLjava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {var stA0 = new vm.java_net_URL;
var stA1 = stA0;var stA2 = new vm.java_net_URL;
var stA3 = stA2;var stA4 = c.homePageUrl__Ljava_lang_String_2();
(refs_java_net_URL || (refs_java_net_URL = vm.java_net_URL(false))).constructor['cons__VLjava_lang_String_2'].call(stA3, stA4);
(refs_java_net_URL || (refs_java_net_URL = vm.java_net_URL(false))).constructor['cons__VLjava_net_URL_2Ljava_lang_String_2'].call(stA1, stA2, lcA0);
var lcA1 = stA0;
var stA0 = c._CLAZZ();var stA1 = new cz_xelfi_demo_react4jdemo_LoadingUrl;
(refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.toExternalForm__Ljava_lang_String_2(lcA1);
var stA1 = stA1.withUrl__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2(stA2);
var stA1 = stA1.withName__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2(lcA0);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
var lcA2 = stA0;
(refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['render__VLnet_java_html_react_React$Element_2Ljava_lang_String_2'](lcA2, "codecontainer");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_net_MalformedURLException']) {var stA0 = e;{ gt = 57; break IF; }}
throw e;
}{ gt = 62; break IF; }
    }
    X_57: for (;;) { IF: if (gt <= 57) {
var lcA1 = stA0;
invoker.printStackTrace__V(lcA1);
    }
    X_62: for (;;) { IF: if (gt <= 62) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.boldJavaKeywords__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_util_Map_2Ljava_util_Set_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var lcI4 = 0;
var stA0 = invoker.matcher__Ljava_util_regex_Matcher_2Ljava_lang_CharSequence_2(c._WORDS(),lcA0);
var lcA5 = stA0;
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stI0 = invoker.find__Z(lcA5);
if ((stI0) == 0) { gt = 1979; break IF; }
var stI0 = invoker.start__I(lcA5);
if ((stI0) <= (lcI4)) { gt = 59; break IF; }
var stA0 = lcA3;var stA1 = lcA0;var stI2 = lcI4;var stI3 = invoker.start__I(lcA5);
var stA1 = invoker.substring__Ljava_lang_String_2II(stA1,stI2, stI3);
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.end__I(lcA5);
var lcI4 = stI0;
var stA0 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var lcA7 = stA0;
var lcI8 = -1;
var stI0 = invoker.hashCode__I(lcA7);
switch (stI0) {
  case -1888027236: { gt = 1374; break IF; }
  case -1466596076: { gt = 1248; break IF; }
  case -1408208058: { gt = 533; break IF; }
  case -1325958191: { gt = 726; break IF; }
  case -1305664359: { gt = 780; break IF; }
  case -1184795739: { gt = 942; break IF; }
  case -1052618729: { gt = 1032; break IF; }
  case -977423767: { gt = 1122; break IF; }
  case -934396624: { gt = 1140; break IF; }
  case -915384400: { gt = 924; break IF; }
  case -892481938: { gt = 1176; break IF; }
  case -889473228: { gt = 1230; break IF; }
  case -874432947: { gt = 1302; break IF; }
  case -853259901: { gt = 816; break IF; }
  case -807062458: { gt = 1068; break IF; }
  case -608539730: { gt = 1104; break IF; }
  case -567202649: { gt = 672; break IF; }
  case -314497661: { gt = 1086; break IF; }
  case 3211: { gt = 708; break IF; }
  case 3357: { gt = 906; break IF; }
  case 101577: { gt = 852; break IF; }
  case 104431: { gt = 978; break IF; }
  case 108960: { gt = 1050; break IF; }
  case 115131: { gt = 1338; break IF; }
  case 3039496: { gt = 584; break IF; }
  case 3046192: { gt = 601; break IF; }
  case 3052374: { gt = 888; break IF; }
  case 3116345: { gt = 744; break IF; }
  case 3118337: { gt = 762; break IF; }
  case 3178851: { gt = 870; break IF; }
  case 3327612: { gt = 1014; break IF; }
  case 3392903: { gt = 1446; break IF; }
  case 3559070: { gt = 1266; break IF; }
  case 3569038: { gt = 1410; break IF; }
  case 3625364: { gt = 1356; break IF; }
  case 64711720: { gt = 550; break IF; }
  case 94001407: { gt = 567; break IF; }
  case 94432955: { gt = 618; break IF; }
  case 94742904: { gt = 636; break IF; }
  case 94844771: { gt = 654; break IF; }
  case 97196323: { gt = 1428; break IF; }
  case 97436022: { gt = 798; break IF; }
  case 97526364: { gt = 834; break IF; }
  case 109413500: { gt = 1158; break IF; }
  case 109801339: { gt = 1212; break IF; }
  case 110339814: { gt = 1284; break IF; }
  case 113101617: { gt = 1392; break IF; }
  case 502623545: { gt = 996; break IF; }
  case 902025516: { gt = 960; break IF; }
  case 1052746378: { gt = 1320; break IF; }
  case 1544803905: { gt = 690; break IF; }
  case 1732898850: { gt = 516; break IF; }
  case 1794694483: { gt = 1194; break IF; }
  default: { gt = 1461; break IF; }
}
    }
    X_516: for (;;) { IF: if (gt <= 516) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"abstract");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = 0;
{ gt = 1461; break IF; }
    }
    X_533: for (;;) { IF: if (gt <= 533) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"assert");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = 1;
{ gt = 1461; break IF; }
    }
    X_550: for (;;) { IF: if (gt <= 550) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"boolean");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = 2;
{ gt = 1461; break IF; }
    }
    X_567: for (;;) { IF: if (gt <= 567) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"break");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = 3;
{ gt = 1461; break IF; }
    }
    X_584: for (;;) { IF: if (gt <= 584) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"byte");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = 4;
{ gt = 1461; break IF; }
    }
    X_601: for (;;) { IF: if (gt <= 601) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"case");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = 5;
{ gt = 1461; break IF; }
    }
    X_618: for (;;) { IF: if (gt <= 618) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"catch");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (6);
{ gt = 1461; break IF; }
    }
    X_636: for (;;) { IF: if (gt <= 636) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"class");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (7);
{ gt = 1461; break IF; }
    }
    X_654: for (;;) { IF: if (gt <= 654) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"const");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (8);
{ gt = 1461; break IF; }
    }
    X_672: for (;;) { IF: if (gt <= 672) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"continue");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (9);
{ gt = 1461; break IF; }
    }
    X_690: for (;;) { IF: if (gt <= 690) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"default");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (10);
{ gt = 1461; break IF; }
    }
    X_708: for (;;) { IF: if (gt <= 708) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"do");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (11);
{ gt = 1461; break IF; }
    }
    X_726: for (;;) { IF: if (gt <= 726) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"double");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (12);
{ gt = 1461; break IF; }
    }
    X_744: for (;;) { IF: if (gt <= 744) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"else");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (13);
{ gt = 1461; break IF; }
    }
    X_762: for (;;) { IF: if (gt <= 762) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"enum");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (14);
{ gt = 1461; break IF; }
    }
    X_780: for (;;) { IF: if (gt <= 780) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"extends");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (15);
{ gt = 1461; break IF; }
    }
    X_798: for (;;) { IF: if (gt <= 798) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"final");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (16);
{ gt = 1461; break IF; }
    }
    X_816: for (;;) { IF: if (gt <= 816) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"finally");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (17);
{ gt = 1461; break IF; }
    }
    X_834: for (;;) { IF: if (gt <= 834) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"float");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (18);
{ gt = 1461; break IF; }
    }
    X_852: for (;;) { IF: if (gt <= 852) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"for");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (19);
{ gt = 1461; break IF; }
    }
    X_870: for (;;) { IF: if (gt <= 870) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"goto");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (20);
{ gt = 1461; break IF; }
    }
    X_888: for (;;) { IF: if (gt <= 888) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"char");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (21);
{ gt = 1461; break IF; }
    }
    X_906: for (;;) { IF: if (gt <= 906) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"if");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (22);
{ gt = 1461; break IF; }
    }
    X_924: for (;;) { IF: if (gt <= 924) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"implements");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (23);
{ gt = 1461; break IF; }
    }
    X_942: for (;;) { IF: if (gt <= 942) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"import");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (24);
{ gt = 1461; break IF; }
    }
    X_960: for (;;) { IF: if (gt <= 960) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"instanceof");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (25);
{ gt = 1461; break IF; }
    }
    X_978: for (;;) { IF: if (gt <= 978) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"int");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (26);
{ gt = 1461; break IF; }
    }
    X_996: for (;;) { IF: if (gt <= 996) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"interface");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (27);
{ gt = 1461; break IF; }
    }
    X_1014: for (;;) { IF: if (gt <= 1014) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"long");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (28);
{ gt = 1461; break IF; }
    }
    X_1032: for (;;) { IF: if (gt <= 1032) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"native");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (29);
{ gt = 1461; break IF; }
    }
    X_1050: for (;;) { IF: if (gt <= 1050) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"new");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (30);
{ gt = 1461; break IF; }
    }
    X_1068: for (;;) { IF: if (gt <= 1068) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"package");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (31);
{ gt = 1461; break IF; }
    }
    X_1086: for (;;) { IF: if (gt <= 1086) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"private");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (32);
{ gt = 1461; break IF; }
    }
    X_1104: for (;;) { IF: if (gt <= 1104) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"protected");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (33);
{ gt = 1461; break IF; }
    }
    X_1122: for (;;) { IF: if (gt <= 1122) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"public");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (34);
{ gt = 1461; break IF; }
    }
    X_1140: for (;;) { IF: if (gt <= 1140) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"return");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (35);
{ gt = 1461; break IF; }
    }
    X_1158: for (;;) { IF: if (gt <= 1158) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"short");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (36);
{ gt = 1461; break IF; }
    }
    X_1176: for (;;) { IF: if (gt <= 1176) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"static");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (37);
{ gt = 1461; break IF; }
    }
    X_1194: for (;;) { IF: if (gt <= 1194) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"strictfp");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (38);
{ gt = 1461; break IF; }
    }
    X_1212: for (;;) { IF: if (gt <= 1212) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"super");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (39);
{ gt = 1461; break IF; }
    }
    X_1230: for (;;) { IF: if (gt <= 1230) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"switch");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (40);
{ gt = 1461; break IF; }
    }
    X_1248: for (;;) { IF: if (gt <= 1248) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"synchronized");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (41);
{ gt = 1461; break IF; }
    }
    X_1266: for (;;) { IF: if (gt <= 1266) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"this");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (42);
{ gt = 1461; break IF; }
    }
    X_1284: for (;;) { IF: if (gt <= 1284) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"throw");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (43);
{ gt = 1461; break IF; }
    }
    X_1302: for (;;) { IF: if (gt <= 1302) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"throws");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (44);
{ gt = 1461; break IF; }
    }
    X_1320: for (;;) { IF: if (gt <= 1320) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"transient");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (45);
{ gt = 1461; break IF; }
    }
    X_1338: for (;;) { IF: if (gt <= 1338) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"try");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (46);
{ gt = 1461; break IF; }
    }
    X_1356: for (;;) { IF: if (gt <= 1356) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"void");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (47);
{ gt = 1461; break IF; }
    }
    X_1374: for (;;) { IF: if (gt <= 1374) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"volatile");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (48);
{ gt = 1461; break IF; }
    }
    X_1392: for (;;) { IF: if (gt <= 1392) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"while");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (49);
{ gt = 1461; break IF; }
    }
    X_1410: for (;;) { IF: if (gt <= 1410) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"true");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (50);
{ gt = 1461; break IF; }
    }
    X_1428: for (;;) { IF: if (gt <= 1428) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"false");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (51);
{ gt = 1461; break IF; }
    }
    X_1446: for (;;) { IF: if (gt <= 1446) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"null");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (52);
    }
    X_1461: for (;;) { IF: if (gt <= 1461) {

switch (lcI8) {
  case 0:{ gt = 1688; break IF; }
  case 1:{ gt = 1688; break IF; }
  case 2:{ gt = 1688; break IF; }
  case 3:{ gt = 1688; break IF; }
  case 4:{ gt = 1688; break IF; }
  case 5:{ gt = 1688; break IF; }
  case 6:{ gt = 1688; break IF; }
  case 7:{ gt = 1688; break IF; }
  case 8:{ gt = 1688; break IF; }
  case 9:{ gt = 1688; break IF; }
  case 10:{ gt = 1688; break IF; }
  case 11:{ gt = 1688; break IF; }
  case 12:{ gt = 1688; break IF; }
  case 13:{ gt = 1688; break IF; }
  case 14:{ gt = 1688; break IF; }
  case 15:{ gt = 1688; break IF; }
  case 16:{ gt = 1688; break IF; }
  case 17:{ gt = 1688; break IF; }
  case 18:{ gt = 1688; break IF; }
  case 19:{ gt = 1688; break IF; }
  case 20:{ gt = 1688; break IF; }
  case 21:{ gt = 1688; break IF; }
  case 22:{ gt = 1688; break IF; }
  case 23:{ gt = 1688; break IF; }
  case 24:{ gt = 1688; break IF; }
  case 25:{ gt = 1688; break IF; }
  case 26:{ gt = 1688; break IF; }
  case 27:{ gt = 1688; break IF; }
  case 28:{ gt = 1688; break IF; }
  case 29:{ gt = 1688; break IF; }
  case 30:{ gt = 1688; break IF; }
  case 31:{ gt = 1688; break IF; }
  case 32:{ gt = 1688; break IF; }
  case 33:{ gt = 1688; break IF; }
  case 34:{ gt = 1688; break IF; }
  case 35:{ gt = 1688; break IF; }
  case 36:{ gt = 1688; break IF; }
  case 37:{ gt = 1688; break IF; }
  case 38:{ gt = 1688; break IF; }
  case 39:{ gt = 1688; break IF; }
  case 40:{ gt = 1688; break IF; }
  case 41:{ gt = 1688; break IF; }
  case 42:{ gt = 1688; break IF; }
  case 43:{ gt = 1688; break IF; }
  case 44:{ gt = 1688; break IF; }
  case 45:{ gt = 1688; break IF; }
  case 46:{ gt = 1688; break IF; }
  case 47:{ gt = 1688; break IF; }
  case 48:{ gt = 1688; break IF; }
  case 49:{ gt = 1688; break IF; }
  case 50:{ gt = 1688; break IF; }
  case 51:{ gt = 1688; break IF; }
  case 52:{ gt = 1688; break IF; }
  default: { gt = 1716; break IF; }
}
    }
    X_1688: for (;;) { IF: if (gt <= 1688) {

var stA0 = "b";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA5);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
var lcA6 = stA0;
{ gt = 1967; break IF; }
    }
    X_1716: for (;;) { IF: if (gt <= 1716) {

var stA0 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stI0 = invoker.startsWith__ZLjava_lang_String_2(stA0,"//");
if ((stI0) == 0) { gt = 1774; break IF; }
var stA0 = "em";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stI6 = 0;var stA7 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stI7 = invoker.length__I(stA7);
var stA5 = invoker.substring__Ljava_lang_String_2II(stA5,stI6, (((stI7) - (1)) | 0));
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA5);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
var lcA6 = stA0;
{ gt = 1967; break IF; }
    }
    X_1774: for (;;) { IF: if (gt <= 1774) {

var stA0 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stI0 = invoker.startsWith__ZLjava_lang_String_2(stA0,"\"");
if ((stI0) == 0) { gt = 1817; break IF; }
var stA0 = "em";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA5);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
var lcA6 = stA0;
{ gt = 1967; break IF; }
    }
    X_1817: for (;;) { IF: if (gt <= 1817) {

var stA0 = lcA1;var stA1 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA9 = stA0;
if ((lcA9) !== null) { gt = 1916; break IF; }
var stA0 = "java.lang";var stA1 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stA0 = c.tryLoad__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stA1);
var lcA9 = stA0;
if ((lcA9) !== null) { gt = 1916; break IF; }
if ((lcA2) === null) { gt = 1916; break IF; }
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA2);
var lcA10 = stA0;
    }
    X_1870: for (;;) { IF: if (gt <= 1870) {

var stI0 = invoker.hasNext__Z(lcA10);
if ((stI0) == 0) { gt = 1916; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA10);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA11 = stA0;
var stA0 = lcA11;var stA1 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stA0 = c.tryLoad__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stA1);
var lcA9 = stA0;
if ((lcA9) === null) { gt = 1913; break IF; }
{ gt = 1916; break IF; }
    }
    X_1913: for (;;) { IF: if (gt <= 1913) {
{ gt = 0; continue X_1870; }
    }
    X_1916: for (;;) { IF: if (gt <= 1916) {

if ((lcA9) !== null) { gt = 1935; break IF; }
var stA0 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA0);
var lcA6 = stA0;
{ gt = 1967; break IF; }
    }
    X_1935: for (;;) { IF: if (gt <= 1935) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"{@link ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA9);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"}");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA0);
var lcA6 = stA0;
    }
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
    X_1967: for (;;) { IF: if (gt <= 1967) {

var stI0 = invoker.add__ZLjava_lang_Object_2(lcA3,lcA6);
{ gt = 20; continue X_0; }
    }
    X_1979: for (;;) { IF: if (gt <= 1979) {

var stI0 = lcI4;var stI1 = invoker.length__I(lcA0);
if ((stI0) >= (stI1)) { gt = 2004; break IF; }
var stA0 = lcA3;var stA1 = invoker.substring__Ljava_lang_String_2I(lcA0,lcI4);
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
    }
    X_2004: for (;;) { IF: if (gt <= 2004) {

var stA0 = "pre";var stA1 = null;var stA2 = lcA3;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA2 = invoker.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(stA2,stA3);
if (stA2 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA2, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(stA2, '');
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.tryLoad__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcA1) {
return null;

};
    m.access = 10;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = "CodeComponent";var stA1 = (refs_cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1 = cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
c._CLAZZ(stA0);
var stA0 = (refs_java_util_regex_Pattern || (refs_java_util_regex_Pattern = vm.java_util_regex_Pattern(false)))['compile__Ljava_util_regex_Pattern_2Ljava_lang_String_2']("(\\w+)|(//.*)\n|(\"[^\"]*\")");
c._WORDS(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_CodeComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_CodeComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_CodeComponentfillInstOf });
    cz_xelfi_demo_react4jdemo_CodeComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/CodeComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_net_java_html_react_React$Component;
    var refs_cz_xelfi_demo_react4jdemo_LoadingUrl;
    var refs_java_lang_StringBuilder;
    var refs_net_java_html_react_React;
    var refs_java_util_Collections;
    var refs_java_net_URL;
    var refs_java_util_ArrayList;
    var refs_cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1;
    var refs_java_util_regex_Pattern;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_CodeComponent = cz_xelfi_demo_react4jdemo_CodeComponent;

vm.java_util_regex_Pattern = link('java/util/regex/Pattern', function(f) { vm.java_util_regex_Pattern =  f; });
vm.net_java_html_react_React$Element = link('net/java/html/react/React$Element', function(f) { vm.net_java_html_react_React$Element =  f; });
vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });
vm.java_net_MalformedURLException = link('java/net/MalformedURLException', function(f) { vm.java_net_MalformedURLException =  f; });
vm.java_net_URL = link('java/net/URL', function(f) { vm.java_net_URL =  f; });
vm.java_util_Collections = link('java/util/Collections', function(f) { vm.java_util_Collections =  f; });
vm.net_java_html_react_React = link('net/java/html/react/React', function(f) { vm.net_java_html_react_React =  f; });
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });

function cz_xelfi_demo_react4jdemo_LoadingUrl() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LoadingUrl;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto']; };
  m = c._prop_name = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name']; };
  m = c._prop_url = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url']; };
  m = c._prop_code = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_cz_xelfi_demo_react4jdemo_CodeComponent || (refs_cz_xelfi_demo_react4jdemo_CodeComponent = cz_xelfi_demo_react4jdemo_CodeComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'],"name");
return lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'];

};
c['getName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto']);
var lcA2 = lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'],"name", lcA2, lcA1);
return;

    }
}}
};
c['setName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.withName__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.setName__VLjava_lang_String_2(lcA1);
return lcA0;

};
c['withName__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getUrl__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'],"url");
return lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'];

};
c['getUrl__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setUrl__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto']);
var lcA2 = lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'],"url", lcA2, lcA1);
return;

    }
}}
};
c['setUrl__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.withUrl__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.setUrl__VLjava_lang_String_2(lcA1);
return lcA0;

};
c['withUrl__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCode__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'],"code");
return lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'];

};
c['getCode__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCode__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto']);
var lcA2 = lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'],"code", lcA2, lcA1);
return;

    }
}}
};
c['setCode__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.withCode__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.setCode__VLjava_lang_String_2(lcA1);
return lcA0;

};
c['withCode__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadCode__VLjava_lang_String_2Lcz_xelfi_demo_react4jdemo_CodeComponent_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'];var stI1 = 0;var stA2 = null;var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA1);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"");
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
var stA4 = null;var stA5 = null;var stA6 = null;var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA7, 0, lcA2);
invoker.loadJSONWithHeaders__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stI1, stA2, stA3, stA4, stA5, stA6, stA7);
return;

};
c['loadCode__VLjava_lang_String_2Lcz_xelfi_demo_react4jdemo_CodeComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 3);
var lcA3 = stA0;
var stA0 = lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 3);
Array.at(stA2, 0, "name");
Array.at(stA2, 1, "url");
Array.at(stA2, 2, "code");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'] = (lcA3[2] || Array.at(lcA3, 2));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 14; break IF; }
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
var stA0 = lcA0;{ gt = 33; break IF; }
    }
    X_14: for (;;) { IF: if (gt <= 14) {

if ((lcA0) !== null) { gt = 25; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
{ gt = 33; break IF; }
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, lcA0);
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return stA0;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(123));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"name");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"url");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getUrl__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"code");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCode__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto']);
var stA0 = c.clone__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_LoadingUrl;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getName__Ljava_lang_String_2();
stA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getUrl__Ljava_lang_String_2();
stA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getCode__Ljava_lang_String_2();
stA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'] = stA1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "Please specify targetId=\"\" in your @Model annotation");
{ var stA0 = stA0; throw stA0; }

};
    m.access = 2;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA0)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA1 != null && lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'], lcA2['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'], lcA2['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'], lcA2['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

return 1;

    }
}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'], lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lcz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2 = function(lcA0) {
return lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_LoadingUrl$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType;
(refs_cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType = cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType(false))).constructor.cons__VLcz_xelfi_demo_react4jdemo_LoadingUrl$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LoadingUrlfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LoadingUrlfillInstOf });
    cz_xelfi_demo_react4jdemo_LoadingUrlfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LoadingUrl';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_CodeComponent;
    var refs_java_lang_StringBuilder;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_IllegalStateException;
    var refs_cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LoadingUrl = registerClass(exports,'cz_xelfi_demo_react4jdemo_LoadingUrl',cz_xelfi_demo_react4jdemo_LoadingUrl);

vm.java_lang_Cloneable = link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable =  f; });

function cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).constructor.$class, (refs_cz_xelfi_demo_react4jdemo_CodeComponent || (refs_cz_xelfi_demo_react4jdemo_CodeComponent = cz_xelfi_demo_react4jdemo_CodeComponent(false))).constructor.$class, 3, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"name", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"url", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"code", 2, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 28; break IF; }
  case 1:{ gt = 45; break IF; }
  case 2:{ gt = 62; break IF; }
  default: { gt = 79; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = lcA1;var stA1 = (refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).access$100__Lcz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setName__VLjava_lang_String_2(stA1);
return;
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stA0 = lcA1;var stA1 = (refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).access$100__Lcz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setUrl__VLjava_lang_String_2(stA1);
return;
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stA0 = lcA1;var stA1 = (refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).access$100__Lcz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCode__VLjava_lang_String_2(stA1);
return;
    }
    X_79: for (;;) { IF: if (gt <= 79) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 28; break IF; }
  case 1:{ gt = 33; break IF; }
  case 2:{ gt = 38; break IF; }
  default: { gt = 43; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = lcA1.getName__Ljava_lang_String_2();
return stA0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stA0 = lcA1.getUrl__Ljava_lang_String_2();
return stA0;
    }
    X_38: for (;;) { IF: if (gt <= 38) {

var stA0 = lcA1.getCode__Ljava_lang_String_2();
return stA0;
    }
    X_43: for (;;) { IF: if (gt <= 43) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var stA0 = (refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 103; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

if ((lcI3) != (2)) { gt = 46; break IF; }
if (lcA4 !== null && !lcA4['$instOf_java_lang_Exception']) vm.java_lang_Class(false).castEx(lcA4, 'java.lang.Exception');
var lcA6 = lcA4;
if ((lcA5[0] || Array.at(lcA5, 0)) !== null && !(lcA5[0] || Array.at(lcA5, 0))['$instOf_cz_xelfi_demo_react4jdemo_CodeComponent']) vm.java_lang_Class(false).castEx((lcA5[0] || Array.at(lcA5, 0)), 'cz.xelfi.demo.react4jdemo.CodeComponent');
(refs_cz_xelfi_demo_react4jdemo_CodeComponent || (refs_cz_xelfi_demo_react4jdemo_CodeComponent = cz_xelfi_demo_react4jdemo_CodeComponent(false))).loadCodeFailed__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_Throwable_2Lcz_xelfi_demo_react4jdemo_CodeComponent_2(lcA1, lcA6, (lcA5[0] || Array.at(lcA5, 0)));
return;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

if ((lcI3) != (1)) { gt = 103; break IF; }
if (lcA4 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA4, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA4, '');
var lcA6 = lcA4;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 1);
Array.at(stA0, 0, null);
var lcA7 = stA0;
var stA0 = (refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).access$100__Lcz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType_2();
var stA1 = (refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2(lcA1);
var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(stA1);
invoker.copyJSON__VLnet_java_html_BrwsrCtx_2_3Ljava_lang_Object_2Ljava_lang_Class_2_3Ljava_lang_Object_2(stA0,stA1, lcA6, (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA7);
if ((lcA5[0] || Array.at(lcA5, 0)) !== null && !(lcA5[0] || Array.at(lcA5, 0))['$instOf_cz_xelfi_demo_react4jdemo_CodeComponent']) vm.java_lang_Class(false).castEx((lcA5[0] || Array.at(lcA5, 0)), 'cz.xelfi.demo.react4jdemo.CodeComponent');
(refs_cz_xelfi_demo_react4jdemo_CodeComponent || (refs_cz_xelfi_demo_react4jdemo_CodeComponent = cz_xelfi_demo_react4jdemo_CodeComponent(false))).loadCode__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2Lcz_xelfi_demo_react4jdemo_CodeComponent_2(lcA1, (lcA7[0] || Array.at(lcA7, 0)), (lcA5[0] || Array.at(lcA5, 0)));
return;
    }
    X_103: for (;;) { IF: if (gt <= 103) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"index: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," type: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.read__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_LoadingUrl;
(refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_LoadingUrl$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).access$400__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
lcA0.onMessage__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
lcA0.onChange__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var stA0 = lcA0.cloneTo__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
lcA0.call__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
lcA0.setValue__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_LoadingUrl$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaTypefillInstOf });
    cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LoadingUrl$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_LoadingUrl;
    var refs_cz_xelfi_demo_react4jdemo_CodeComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_UnsupportedOperationException;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType = cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType;

vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });
vm.java_lang_IllegalStateException = link('java/lang/IllegalStateException', function(f) { vm.java_lang_IllegalStateException =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });

function cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_cz_xelfi_demo_react4jdemo_LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeState = cz_xelfi_demo_react4jdemo_LikeState(false))).constructor.$class, (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX || (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX(false))).constructor.$class, 1, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"liked", 0, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLcz_xelfi_demo_react4jdemo_LikeState_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 40; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = lcA1;var stA1 = (refs_cz_xelfi_demo_react4jdemo_LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeState = cz_xelfi_demo_react4jdemo_LikeState(false))).access$100__Lcz_xelfi_demo_react4jdemo_LikeState$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setLiked__VZ(stI1);
return;
    }
    X_40: for (;;) { IF: if (gt <= 40) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_LikeState_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 28; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stI0 = lcA1.isLiked__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_28: for (;;) { IF: if (gt <= 28) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLcz_xelfi_demo_react4jdemo_LikeState_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LikeState');
var stA0 = (refs_cz_xelfi_demo_react4jdemo_LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeState = cz_xelfi_demo_react4jdemo_LikeState(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lcz_xelfi_demo_react4jdemo_LikeState_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLcz_xelfi_demo_react4jdemo_LikeState_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLcz_xelfi_demo_react4jdemo_LikeState_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"index: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," type: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.read__Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_LikeState;
(refs_cz_xelfi_demo_react4jdemo_LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeState = cz_xelfi_demo_react4jdemo_LikeState(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_LikeState$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lcz_xelfi_demo_react4jdemo_LikeState_2Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_cz_xelfi_demo_react4jdemo_LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeState = cz_xelfi_demo_react4jdemo_LikeState(false))).access$400__Lcz_xelfi_demo_react4jdemo_LikeState_2Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LikeState');
lcA0.onMessage__VLcz_xelfi_demo_react4jdemo_LikeState_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LikeState');
lcA0.onChange__VLcz_xelfi_demo_react4jdemo_LikeState_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LikeState');
var stA0 = lcA0.cloneTo__Lcz_xelfi_demo_react4jdemo_LikeState_2Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LikeState');
lcA0.call__VLcz_xelfi_demo_react4jdemo_LikeState_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LikeState');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_LikeState_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LikeState');
lcA0.setValue__VLcz_xelfi_demo_react4jdemo_LikeState_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_LikeState$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeState$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeState$Html4JavaTypefillInstOf });
    cz_xelfi_demo_react4jdemo_LikeState$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeState$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_LikeState;
    var refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_Boolean;
    var refs_java_lang_UnsupportedOperationException;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType = cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType;


function cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
var stA0 = lcA0;var stA1 = new cz_xelfi_demo_react4jdemo_LikeState;
(refs_cz_xelfi_demo_react4jdemo_LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeState = cz_xelfi_demo_react4jdemo_LikeState(false))).constructor.cons__VZ.call(stA1, 0);
invoker.setState__VLjava_lang_Object_2(stA0,stA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.doLike__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = new cz_xelfi_demo_react4jdemo_LikeState;
(refs_cz_xelfi_demo_react4jdemo_LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeState = cz_xelfi_demo_react4jdemo_LikeState(false))).constructor.cons__VZ.call(stA1, 1);
invoker.setState__VLjava_lang_Object_2(stA0,stA1);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.renderReply__Lnet_java_html_react_React$Element_2 = function() {
};
c['renderReply__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(stA0, 'cz.xelfi.demo.react4jdemo.LikeState');
var stI0 = stA0.isLiked__Z();
if ((stI0) == 0) { gt = 18; break IF; }
var stA0 = invoker.renderReply__Lnet_java_html_react_React$Element_2(lcA0);
return stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {
var stA0 = new cz_xelfi_demo_react4jdemo_ButtonState;
(refs_cz_xelfi_demo_react4jdemo_ButtonState || (refs_cz_xelfi_demo_react4jdemo_ButtonState = cz_xelfi_demo_react4jdemo_ButtonState(false))).constructor.cons__V.call(stA0);
var lcA1 = stA0;
lcA1.connect__VLcz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX_2(lcA0);
var stA0 = "button";var stA1 = lcA1;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("Like");
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

    }
}}
};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.onPageLoad__V = function() {
var stA0 = "LikeButton";var stA1 = (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1 = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
(refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['render__VLjava_lang_String_2Ljava_lang_String_2']("LikeButton", "like_button_container");
return;

};
c['onPageLoad__V'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFXfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFXfillInstOf });
    cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFXfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeButtonNoJavaFX';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
    var refs_cz_xelfi_demo_react4jdemo_LikeState;
    var refs_cz_xelfi_demo_react4jdemo_ButtonState;
    var refs_net_java_html_react_React;
    var refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX = registerClass(exports,'cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX',cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX);


function cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX;
(refs_cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX || (refs_cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX = cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeButtonNoJavaFX$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1 = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1;


function cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX || (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderReply__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = "div";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("You like React for Java! Continue to the   ");
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 1;var stA5 = "a";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "href");
Array.at(stA6, 1, "ttt1.html");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("tutorial");
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 2;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("...");
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
c['renderReply__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 20;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFXfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFXfillInstOf });
    cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFXfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/ReactLikeButtonNoJavaFX';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX = cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX;


function cz_xelfi_demo_react4jdemo_ButtonState() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_ButtonState;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._instance = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_ButtonState_instance'] = v; return this['fld_cz_xelfi_demo_react4jdemo_ButtonState_instance']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_ButtonState_proto'] = v; return this['fld_cz_xelfi_demo_react4jdemo_ButtonState_proto']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl || (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.connect__VLcz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0['fld_cz_xelfi_demo_react4jdemo_ButtonState_proto'];var stI1 = 1;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA2, 0, lcA1);
invoker.runInBrowser__VI_3Ljava_lang_Object_2(stA0,stI1, stA2);
return;

};
c['connect__VLcz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = new cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl;
(refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl || (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl(false))).constructor.cons__V.call(stA1);
stA0['fld_cz_xelfi_demo_react4jdemo_ButtonState_instance'] = stA1;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_cz_xelfi_demo_react4jdemo_ButtonState_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
var lcA3 = stA0;
var stA0 = lcA0['fld_cz_xelfi_demo_react4jdemo_ButtonState_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 14; break IF; }
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
var stA0 = lcA0;{ gt = 33; break IF; }
    }
    X_14: for (;;) { IF: if (gt <= 14) {

if ((lcA0) !== null) { gt = 25; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
{ gt = 33; break IF; }
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, lcA0);
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return stA0;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(123));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lcz_xelfi_demo_react4jdemo_ButtonState_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_cz_xelfi_demo_react4jdemo_ButtonState_proto']);
var stA0 = c.clone__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lcz_xelfi_demo_react4jdemo_ButtonState_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_ButtonState;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lcz_xelfi_demo_react4jdemo_ButtonState_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "Please specify targetId=\"\" in your @Model annotation");
{ var stA0 = stA0; throw stA0; }

};
    m.access = 2;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA0)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA1 != null && lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.ButtonState');
var lcA2 = lcA1;
return 1;

    }
}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lcz_xelfi_demo_react4jdemo_ButtonState_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lcz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl_2Lcz_xelfi_demo_react4jdemo_ButtonState_2 = function(lcA0) {
return lcA0['fld_cz_xelfi_demo_react4jdemo_ButtonState_instance'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lcz_xelfi_demo_react4jdemo_ButtonState_2 = function(lcA0) {
return lcA0['fld_cz_xelfi_demo_react4jdemo_ButtonState_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_ButtonState$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType;
(refs_cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType || (refs_cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType = cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType(false))).constructor.cons__VLcz_xelfi_demo_react4jdemo_ButtonState$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_ButtonStatefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_ButtonState', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_ButtonStatefillInstOf });
    cz_xelfi_demo_react4jdemo_ButtonStatefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/ButtonState';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_IllegalStateException;
    var refs_cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_ButtonState_instance'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_ButtonState_proto'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_ButtonState = registerClass(exports,'cz_xelfi_demo_react4jdemo_ButtonState',cz_xelfi_demo_react4jdemo_ButtonState);


function cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_cz_xelfi_demo_react4jdemo_ButtonState || (refs_cz_xelfi_demo_react4jdemo_ButtonState = cz_xelfi_demo_react4jdemo_ButtonState(false))).constructor.$class, (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl || (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl(false))).constructor.$class, 0, 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"onClick", 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLcz_xelfi_demo_react4jdemo_ButtonState_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_ButtonState_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLcz_xelfi_demo_react4jdemo_ButtonState_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 28; break IF; }
  case 1: { gt = 36; break IF; }
  default: { gt = 58; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = (refs_cz_xelfi_demo_react4jdemo_ButtonState || (refs_cz_xelfi_demo_react4jdemo_ButtonState = cz_xelfi_demo_react4jdemo_ButtonState(false))).access$100__Lcz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl_2Lcz_xelfi_demo_react4jdemo_ButtonState_2(lcA1);
stA0.onClick__V();
return;
    }
    X_36: for (;;) { IF: if (gt <= 36) {

if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA3, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA3, '');
var lcA5 = lcA3;
var stA0 = (refs_cz_xelfi_demo_react4jdemo_ButtonState || (refs_cz_xelfi_demo_react4jdemo_ButtonState = cz_xelfi_demo_react4jdemo_ButtonState(false))).access$100__Lcz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl_2Lcz_xelfi_demo_react4jdemo_ButtonState_2(lcA1);
if ((lcA5[0] || Array.at(lcA5, 0)) !== null && !(lcA5[0] || Array.at(lcA5, 0))['$instOf_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX']) vm.java_lang_Class(false).castEx((lcA5[0] || Array.at(lcA5, 0)), 'cz.xelfi.demo.react4jdemo.LikeButtonNoJavaFX');
stA0.connect__VLcz_xelfi_demo_react4jdemo_ButtonState_2Lcz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX_2(lcA1, (lcA5[0] || Array.at(lcA5, 0)));
return;
    }
    X_58: for (;;) { IF: if (gt <= 58) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.ButtonState');
var stA0 = (refs_cz_xelfi_demo_react4jdemo_ButtonState || (refs_cz_xelfi_demo_react4jdemo_ButtonState = cz_xelfi_demo_react4jdemo_ButtonState(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lcz_xelfi_demo_react4jdemo_ButtonState_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLcz_xelfi_demo_react4jdemo_ButtonState_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLcz_xelfi_demo_react4jdemo_ButtonState_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"index: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," type: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.read__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_ButtonState;
(refs_cz_xelfi_demo_react4jdemo_ButtonState || (refs_cz_xelfi_demo_react4jdemo_ButtonState = cz_xelfi_demo_react4jdemo_ButtonState(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_ButtonState$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_cz_xelfi_demo_react4jdemo_ButtonState || (refs_cz_xelfi_demo_react4jdemo_ButtonState = cz_xelfi_demo_react4jdemo_ButtonState(false))).access$400__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.ButtonState');
lcA0.onMessage__VLcz_xelfi_demo_react4jdemo_ButtonState_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.ButtonState');
lcA0.onChange__VLcz_xelfi_demo_react4jdemo_ButtonState_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.ButtonState');
var stA0 = lcA0.cloneTo__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.ButtonState');
lcA0.call__VLcz_xelfi_demo_react4jdemo_ButtonState_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.ButtonState');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_ButtonState_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.ButtonState');
lcA0.setValue__VLcz_xelfi_demo_react4jdemo_ButtonState_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_ButtonState$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaTypefillInstOf });
    cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/ButtonState$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_ButtonState;
    var refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_UnsupportedOperationException;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType = cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType;


function cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._ui = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl_ui'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl_ui']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.connect__VLcz_xelfi_demo_react4jdemo_ButtonState_2Lcz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl_ui'] = lcA2;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.onClick__V = function() {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl_ui'].doLike__V();
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrlfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrlfillInstOf });
    cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrlfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeButtonNoJavaFX$ButtonStateCntrl';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl_ui'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl;


function cz_xelfi_demo_react4jdemo_LikeState() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeState;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LikeState_proto'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LikeState_proto']; };
  m = c._prop_liked = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX || (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.isLiked__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_proto'],"liked");
return lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked'];

};
c['isLiked__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setLiked__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked'] = lcI1;
var stA0 = lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_proto'];var stA1 = "liked";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setLiked__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_cz_xelfi_demo_react4jdemo_LikeState_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VZ = function(lcI1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked'] = lcI1;
return;

};
CLS['cons__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
var lcA3 = stA0;
var stA0 = lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 1);
Array.at(stA2, 0, "liked");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
var stA0 = lcA0;if (((lcA3[0] || Array.at(lcA3, 0))) !== null) { gt = 39; break IF; }
var stI1 = 0;{ gt = 51; break IF; }
    }
    X_39: for (;;) { IF: if (gt <= 39) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[0] || Array.at(lcA3, 0)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_51: for (;;) { IF: if (gt <= 51) {
stA0['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked'] = stI1;
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 14; break IF; }
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
var stA0 = lcA0;{ gt = 33; break IF; }
    }
    X_14: for (;;) { IF: if (gt <= 14) {

if ((lcA0) !== null) { gt = 25; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
{ gt = 33; break IF; }
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, lcA0);
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return stA0;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(123));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"liked");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isLiked__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lcz_xelfi_demo_react4jdemo_LikeState_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_proto']);
var stA0 = c.clone__Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lcz_xelfi_demo_react4jdemo_LikeState_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_LikeState;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stI1 = lcA0.isLiked__Z();
stA0['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked'] = stI1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lcz_xelfi_demo_react4jdemo_LikeState_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "Please specify targetId=\"\" in your @Model annotation");
{ var stA0 = stA0; throw stA0; }

};
    m.access = 2;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA0)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA1 != null && lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LikeState');
var lcA2 = lcA1;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 46; break IF; }
return 0;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

return 1;

    }
}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lcz_xelfi_demo_react4jdemo_LikeState_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lcz_xelfi_demo_react4jdemo_LikeState$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lcz_xelfi_demo_react4jdemo_LikeState_2 = function(lcA0) {
return lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_LikeState$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lcz_xelfi_demo_react4jdemo_LikeState_2Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType;
(refs_cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType || (refs_cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType = cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType(false))).constructor.cons__VLcz_xelfi_demo_react4jdemo_LikeState$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeStatefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeState', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeStatefillInstOf });
    cz_xelfi_demo_react4jdemo_LikeStatefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeState';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_IllegalStateException;
    var refs_cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_LikeState_proto'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeState = registerClass(exports,'cz_xelfi_demo_react4jdemo_LikeState',cz_xelfi_demo_react4jdemo_LikeState);


function cz_xelfi_demo_react4jdemo_LoadingUrl$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LoadingUrl$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LoadingUrl$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LoadingUrl$1fillInstOf });
    cz_xelfi_demo_react4jdemo_LoadingUrl$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LoadingUrl$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LoadingUrl$1 = cz_xelfi_demo_react4jdemo_LoadingUrl$1;


function cz_xelfi_demo_react4jdemo_TicTacToe2Square() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2Square;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_TicTacToe2$Square(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square = cz_xelfi_demo_react4jdemo_TicTacToe2$Square(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderSquare__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe2Square$1;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1 = cz_xelfi_demo_react4jdemo_TicTacToe2Square$1(false))).constructor.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe2Square_2Ljava_lang_Runnable_2.call(stA0, lcA0, lcA2);
var stA0 = (refs_net_java_html_react_React4J || (refs_net_java_html_react_React4J = vm.net_java_html_react_React4J(false)))['wrapCallback__Ljava_lang_Object_2Lnet_java_html_react_React4J$Callback_2'](stA0);
var lcA3 = stA0;
var stA0 = "button";var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 4);
Array.at(stA1, 0, "className");
Array.at(stA1, 1, "square");
Array.at(stA1, 2, "onClick");
Array.at(stA1, 3, lcA3);
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](lcA1);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
    m.access = 20;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2SquarefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2Square', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2SquarefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2SquarefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2Square';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1;
    var refs_net_java_html_react_React4J;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2Square = cz_xelfi_demo_react4jdemo_TicTacToe2Square;

vm.net_java_html_react_React4J = link('net/java/html/react/React4J', function(f) { vm.net_java_html_react_React4J =  f; });

function cz_xelfi_demo_react4jdemo_TicTacToe2Square$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2Square$1;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React4J$Callback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$_callback1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_val$_callback1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_val$_callback1']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_this$0'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_this$0']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe2Square_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_this$0'] = lcA1;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_val$_callback1'] = lcA2;
(refs_net_java_html_react_React4J$Callback || (refs_net_java_html_react_React4J$Callback = vm.net_java_html_react_React4J$Callback(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.callback__V_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
invoker.run__V(lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_val$_callback1']);
return;

};
c['callback__V_3Ljava_lang_Object_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2Square$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2Square$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2Square$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2Square$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React4J$Callback;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_val$_callback1'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2Square$1 = cz_xelfi_demo_react4jdemo_TicTacToe2Square$1;

vm.net_java_html_react_React4J$Callback = link('net/java/html/react/React4J$Callback', function(f) { vm.net_java_html_react_React4J$Callback =  f; });

function cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_SquareBase(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._onClick = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_onClick'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_onClick']; };
  m = c._value = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_value'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_value']; };
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_SquareBase || (refs_cz_xelfi_demo_react4jdemo_SquareBase = cz_xelfi_demo_react4jdemo_SquareBase(false))).constructor.cons__V.call(lcA0);
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_value'] = lcA1;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_onClick'] = lcA2;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.onClick__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
(refs_cz_xelfi_demo_react4jdemo_JsUtils || (refs_cz_xelfi_demo_react4jdemo_JsUtils = cz_xelfi_demo_react4jdemo_JsUtils(false))).debugger__V();
if ((lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_onClick']) === null) { gt = 19; break IF; }
invoker.run__V(lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_onClick']);
    }
    X_19: for (;;) { IF: if (gt <= 19) {
return;

    }
}}
};
    m.access = 16;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquarePropsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquarePropsfillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquarePropsfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$Board$SquareProps';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_SquareBase;
    var refs_cz_xelfi_demo_react4jdemo_JsUtils;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_onClick'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_value'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps = cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps;


function cz_xelfi_demo_react4jdemo_JsUtils() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_JsUtils;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$$fn$$alert_1'] = null;
  m = c._$$fn$$alert_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$alert_1'] = v; return CLS['fld_$$fn$$alert_1']; };
  CLS['fld_$$fn$$debugger_2'] = null;
  m = c._$$fn$$debugger_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$debugger_2'] = v; return CLS['fld_$$fn$$debugger_2']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.alert__VLjava_lang_String_2 = function() {
  var r = (function(msg) {

  msg = vm.java_lang_Class(false).toJS(msg);alert(msg);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 9;
    m.cls = CLS;
    m = c.debugger__V = function() {
  var r = (function() {
debugger;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_JsUtilsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_JsUtils', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_JsUtilsfillInstOf });
    cz_xelfi_demo_react4jdemo_JsUtilsfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/JsUtils';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_JsUtils = cz_xelfi_demo_react4jdemo_JsUtils;


function cz_xelfi_demo_react4jdemo_SquareBase() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_SquareBase;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._info = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_SquareBase_info'] = v; return this['fld_cz_xelfi_demo_react4jdemo_SquareBase_info']; };
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

if ((lcA0['fld_cz_xelfi_demo_react4jdemo_SquareBase_info']) !== null) { gt = 54; break IF; }
if (lcA0 !== null && !lcA0['$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps']) vm.java_lang_Class(false).castEx(lcA0, 'cz.xelfi.demo.react4jdemo.TicTacToe3$Board$SquareProps');
var lcA1 = lcA0;
var stA0 = (refs_com_dukescript_api_javafx_beans_FXBeanInfo || (refs_com_dukescript_api_javafx_beans_FXBeanInfo = vm.com_dukescript_api_javafx_beans_FXBeanInfo(false)))['newBuilder__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_Object_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.constant__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Object_2(lcA2,"value", lcA1['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_value']);
var stA0 = lcA2;var stA1 = "onClick";var stA2 = lcA1;var stA3 = stA2;
var stA4 = invoker.getClass__Ljava_lang_Class_2(stA3);
var stA2 = (refs_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1 = cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1(false))).lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_2(stA2);
var stA0 = invoker.action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Runnable_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = invoker.build__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2(lcA2);
stA0['fld_cz_xelfi_demo_react4jdemo_SquareBase_info'] = stA1;
    }
    X_54: for (;;) { IF: if (gt <= 54) {

return lcA0['fld_cz_xelfi_demo_react4jdemo_SquareBase_info'];

    }
}}
};
c['getFXBeanInfo__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_SquareBasefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_SquareBase', { value : true });
      vm.com_dukescript_api_javafx_beans_FXBeanInfo$Provider(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_SquareBasefillInstOf });
    cz_xelfi_demo_react4jdemo_SquareBasefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/SquareBase';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.com_dukescript_api_javafx_beans_FXBeanInfo$Provider(false).constructor.$class
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_com_dukescript_api_javafx_beans_FXBeanInfo;
    var refs_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_SquareBase_info'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_SquareBase = cz_xelfi_demo_react4jdemo_SquareBase;


function cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arg$1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1_arg$1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1_arg$1']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1_arg$1'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1_arg$1'].onClick__V();
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_2 = function(lcA0) {
var stA0 = new cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1;
c.constructor.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/SquareBase$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1_arg$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1 = cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1;


function cz_xelfi_demo_react4jdemo_TicTacToe1$Board() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1$Board;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderBoard__Lnet_java_html_react_React$Element_2Ljava_lang_String_2 = function(lcA1) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.renderBoard__Lnet_java_html_react_React$Element_2Ljava_lang_String_2("Next player: X");
return stA0;

};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1$BoardfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1$Board', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1$BoardfillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1$BoardfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1$Board';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1$Board = cz_xelfi_demo_react4jdemo_TicTacToe1$Board;


function cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX;
(refs_cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX || (refs_cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX = cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeButtonNoJavaFX$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1 = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1;


function cz_xelfi_demo_react4jdemo_TicTacToe3$Game() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$Game;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = "div";var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA1, 0, "className");
Array.at(stA1, 1, "game");
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 2);
var stA3 = stA2;var stI4 = 0;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "game-board");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe3 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3 = cz_xelfi_demo_react4jdemo_TicTacToe3(false))).access$100__Ljava_lang_Object_2();
var stA11 = null;var stA12 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, stA12);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 1;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "game-info");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 2);
var stA8 = stA7;var stI9 = 0;var stA10 = "div";var stA11 = null;var stA12 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, stA12);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = "ol";var stA11 = null;var stA12 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, stA12);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$GamefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$Game', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$GamefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$GamefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$Game';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
    var refs_net_java_html_react_React;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$Game = cz_xelfi_demo_react4jdemo_TicTacToe3$Game;


function cz_xelfi_demo_react4jdemo_TicTacToe3() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_cSquare'] = null;
  m = c._cSquare = function (v) {  if (arguments.length == 1) CLS['fld_cSquare'] = v; return CLS['fld_cSquare']; };
  CLS['fld_cBoard'] = null;
  m = c._cBoard = function (v) {  if (arguments.length == 1) CLS['fld_cBoard'] = v; return CLS['fld_cBoard']; };
  CLS['fld_cGame'] = null;
  m = c._cGame = function (v) {  if (arguments.length == 1) CLS['fld_cGame'] = v; return CLS['fld_cGame']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.onPageLoad__V = function() {
var stA0 = "Square";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
c._cSquare(stA0);
var stA0 = "Board";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2 = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
c._cBoard(stA0);
var stA0 = "Game";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3 = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
c._cGame(stA0);
(refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['render__VLjava_lang_String_2Ljava_lang_String_2']("Game", "root");
return;

};
c['onPageLoad__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.access$000__Ljava_lang_Object_2 = function() {
return c._cSquare();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__Ljava_lang_Object_2 = function() {
return c._cBoard();

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1;
    var refs_net_java_html_react_React;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3 = registerClass(exports,'cz_xelfi_demo_react4jdemo_TicTacToe3',cz_xelfi_demo_react4jdemo_TicTacToe3);


function cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3$Game;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Game || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Game = cz_xelfi_demo_react4jdemo_TicTacToe3$Game(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$$Lambda$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Game;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3 = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3;


function cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3$Board;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board = cz_xelfi_demo_react4jdemo_TicTacToe3$Board(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$$Lambda$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2 = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2;


function cz_xelfi_demo_react4jdemo_TicTacToe3$Board() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$Board;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_winningLines'] = null;
  m = c._winningLines = function (v) {  if (arguments.length == 1) CLS['fld_winningLines'] = v; return CLS['fld_winningLines']; };
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
var stA0 = (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['nCopies__Ljava_util_List_2ILjava_lang_Object_2']((9), null);
var lcA2 = stA0;
var stA0 = lcA0;var stA1 = new cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState = cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState(false))).constructor.cons__VLjava_util_List_2Z.call(stA1, lcA2, 1);
invoker.setState__VLjava_lang_Object_2(stA0,stA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.handleClick__VI = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_ArrayList;
var stA1 = stA0;var stA2 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA2 !== null && !stA2['$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState']) vm.java_lang_Class(false).castEx(stA2, 'cz.xelfi.demo.react4jdemo.TicTacToe3$BoardState');
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__VLjava_util_Collection_2'].call(stA1, stA2['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_squares']);
var lcA2 = stA0;
var stA0 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState']) vm.java_lang_Class(false).castEx(stA0, 'cz.xelfi.demo.react4jdemo.TicTacToe3$BoardState');
if ((stA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_xIsNext']) == 0) { gt = 47; break IF; }
var stA0 = lcA2;var stI1 = lcI1;var stA2 = (refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false)))['valueOf__Ljava_lang_Character_2C']((88));
var stA0 = invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2(stA0,stI1, stA2);
{ gt = 60; break IF; }
    }
    X_47: for (;;) { IF: if (gt <= 47) {

var stA0 = lcA2;var stI1 = lcI1;var stA2 = (refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false)))['valueOf__Ljava_lang_Character_2C']((79));
var stA0 = invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2(stA0,stI1, stA2);
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = lcA0;var stA1 = new cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState;
var stA2 = stA1;var stA3 = lcA2;var stA4 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA4 !== null && !stA4['$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState']) vm.java_lang_Class(false).castEx(stA4, 'cz.xelfi.demo.react4jdemo.TicTacToe3$BoardState');
if ((stA4['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_xIsNext']) != 0) { gt = 83; break IF; }
var stI4 = 1;{ gt = 84; break IF; }
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var stI4 = 0;    }
    X_84: for (;;) { IF: if (gt <= 84) {
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState = cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState(false))).constructor.cons__VLjava_util_List_2Z.call(stA2, stA3, stI4);
invoker.setState__VLjava_lang_Object_2(stA0,stA1);
return;

    }
}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.renderSquare__Lnet_java_html_react_React$Element_2ZI = function(lcI1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState']) vm.java_lang_Class(false).castEx(stA0, 'cz.xelfi.demo.react4jdemo.TicTacToe3$BoardState');
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_squares'],lcI2);
if (stA0 !== null && !stA0['$instOf_java_lang_Character']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.Character');
var lcA3 = stA0;
if ((lcI1) != 0) { gt = 28; break IF; }
if ((lcA3) === null) { gt = 32; break IF; }
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = null;{ gt = 37; break IF; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stA0 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1(false))).lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_TicTacToe3$Board_2I(lcA0, lcI2);
    }
    X_37: for (;;) { IF: if (gt <= 37) {
var lcA4 = stA0;
var stA0 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe3 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3 = cz_xelfi_demo_react4jdemo_TicTacToe3(false))).access$000__Ljava_lang_Object_2();
var stA1 = new cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps;
var stA2 = stA1;if ((lcA3) !== null) { gt = 54; break IF; }
var stA3 = null;{ gt = 73; break IF; }
    }
    X_54: for (;;) { IF: if (gt <= 54) {
var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA3,lcA3);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
    }
    X_73: for (;;) { IF: if (gt <= 73) {

(refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps = cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_Runnable_2.call(stA2, stA3, lcA4);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

    }
}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.calculateWinner__Ljava_lang_Character_2Ljava_util_List_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI1 = 0;
    }
    X_2: for (;;) { IF: if (gt <= 2) {

if ((lcI1) >= ((c._winningLines()).length)) { gt = 88; break IF; }
var lcA2 = (c._winningLines()[lcI1] || Array.at(c._winningLines(), lcI1));
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA0,(lcA2[0] || Array.at(lcA2, 0)));
if (stA0 !== null && !stA0['$instOf_java_lang_Character']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.Character');
var lcA3 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA0,(lcA2[1] || Array.at(lcA2, 1)));
if (stA0 !== null && !stA0['$instOf_java_lang_Character']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.Character');
var lcA4 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA0,(lcA2[2] || Array.at(lcA2, 2)));
if (stA0 !== null && !stA0['$instOf_java_lang_Character']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.Character');
var lcA5 = stA0;
if ((lcA3) === null) { gt = 82; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA3,lcA4);
if ((stI0) == 0) { gt = 82; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA4,lcA5);
if ((stI0) == 0) { gt = 82; break IF; }
return lcA3;
    }
    X_82: for (;;) { IF: if (gt <= 82) {
lcI1++;
{ gt = 0; continue X_2; }
    }
    X_88: for (;;) { IF: if (gt <= 88) {

return null;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState']) vm.java_lang_Class(false).castEx(stA0, 'cz.xelfi.demo.react4jdemo.TicTacToe3$BoardState');
var stA0 = c.calculateWinner__Ljava_lang_Character_2Ljava_util_List_2(stA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_squares']);
var lcA1 = stA0;
if ((lcA1) === null) { gt = 22; break IF; }
var stI0 = 1;{ gt = 23; break IF; }
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var stI0 = 0;    }
    X_23: for (;;) { IF: if (gt <= 23) {
var lcI2 = stI0;
if ((lcA1) !== null) { gt = 73; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Next player: ");
var stA1 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA1 !== null && !stA1['$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState']) vm.java_lang_Class(false).castEx(stA1, 'cz.xelfi.demo.react4jdemo.TicTacToe3$BoardState');
if ((stA1['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_xIsNext']) == 0) { gt = 58; break IF; }
var stI1 = (88);{ gt = 60; break IF; }
    }
    X_58: for (;;) { IF: if (gt <= 58) {

var stI1 = (79);    }
    X_60: for (;;) { IF: if (gt <= 60) {
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,stI1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA0);
var lcA3 = stA0;
{ gt = 96; break IF; }
    }
    X_73: for (;;) { IF: if (gt <= 73) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Winner ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,lcA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA0);
var lcA3 = stA0;
    }
    X_96: for (;;) { IF: if (gt <= 96) {

var stA0 = "div";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 4);
var stA3 = stA2;var stI4 = 0;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "status");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
Array.at(stA7, 0, lcA3);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 1;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA8 = stA7;var stI9 = 0;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, 0);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, 1);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, 2);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 2;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA8 = stA7;var stI9 = 0;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, 3);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, 4);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, 5);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 3;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA8 = stA7;var stI9 = 0;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, (6));
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, (7));
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, (8));
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

    }
}}}}}}}
};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.lambda$renderSquare$0__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Board_2I = function(lcA0, lcI1) {
c.handleClick__VI.call(lcA0, lcI1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[[I', null, (8));
var stA1 = stA0;var stI2 = 0;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 3);
Array.at(stA3, 0, 0);
Array.at(stA3, 1, 1);
Array.at(stA3, 2, 2);
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 1;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 3);
Array.at(stA3, 0, 3);
Array.at(stA3, 1, 4);
Array.at(stA3, 2, 5);
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 2;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 3);
Array.at(stA3, 0, (6));
Array.at(stA3, 1, (7));
Array.at(stA3, 2, (8));
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 3;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 3);
Array.at(stA3, 0, 0);
Array.at(stA3, 1, 3);
Array.at(stA3, 2, (6));
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 4;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 3);
Array.at(stA3, 0, 1);
Array.at(stA3, 1, 4);
Array.at(stA3, 2, (7));
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 5;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 3);
Array.at(stA3, 0, 2);
Array.at(stA3, 1, 5);
Array.at(stA3, 2, (8));
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = (6);var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 3);
Array.at(stA3, 0, 0);
Array.at(stA3, 1, 4);
Array.at(stA3, 2, (8));
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = (7);var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 3);
Array.at(stA3, 0, 2);
Array.at(stA3, 1, 4);
Array.at(stA3, 2, (6));
Array.at(stA1, stI2, stA3);
c._winningLines(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$BoardfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$Board', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$BoardfillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$BoardfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$Board';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_net_java_html_react_React$Component;
    var refs_java_util_Collections;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState;
    var refs_java_util_ArrayList;
    var refs_java_lang_Character;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3;
    var refs_java_lang_StringBuilder;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$Board = cz_xelfi_demo_react4jdemo_TicTacToe3$Board;


function cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arg$1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$1']; };
  m = c._arg$2 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$2'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$2']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Board_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$1'] = lcA1;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$2'] = lcI2;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board = cz_xelfi_demo_react4jdemo_TicTacToe3$Board(false))).lambda$renderSquare$0__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Board_2I(lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$1'], lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$2']);
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_TicTacToe3$Board_2I = function(lcA0, lcI1) {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1;
c.constructor.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Board_2I.call(stA0, lcA0, lcI1);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$Board$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$1'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$2'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1;


function cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_BoardBase3(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._squares = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_squares'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_squares']; };
  m = c._xIsNext = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_xIsNext'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_xIsNext']; };
    m = CLS.cons__VLjava_util_List_2Z = function(lcA1, lcI2) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_BoardBase3 || (refs_cz_xelfi_demo_react4jdemo_BoardBase3 = cz_xelfi_demo_react4jdemo_BoardBase3(false))).constructor.cons__V.call(lcA0);
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_squares'] = lcA1;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_xIsNext'] = lcI2;
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$BoardStatefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$BoardStatefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$BoardStatefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$BoardState';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_BoardBase3;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_squares'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_xIsNext'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState = cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState;


function cz_xelfi_demo_react4jdemo_BoardBase3() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_BoardBase3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._info = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_BoardBase3_info'] = v; return this['fld_cz_xelfi_demo_react4jdemo_BoardBase3_info']; };
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

if ((lcA0['fld_cz_xelfi_demo_react4jdemo_BoardBase3_info']) !== null) { gt = 50; break IF; }
if (lcA0 !== null && !lcA0['$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState']) vm.java_lang_Class(false).castEx(lcA0, 'cz.xelfi.demo.react4jdemo.TicTacToe3$BoardState');
var lcA1 = lcA0;
var stA0 = (refs_com_dukescript_api_javafx_beans_FXBeanInfo || (refs_com_dukescript_api_javafx_beans_FXBeanInfo = vm.com_dukescript_api_javafx_beans_FXBeanInfo(false)))['newBuilder__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_Object_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.constant__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Object_2(lcA2,"squares", lcA1['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_squares']);
var stA0 = lcA2;var stA1 = "xIsNext";var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA1['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_xIsNext']);
var stA0 = invoker.constant__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = invoker.build__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2(lcA2);
stA0['fld_cz_xelfi_demo_react4jdemo_BoardBase3_info'] = stA1;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

return lcA0['fld_cz_xelfi_demo_react4jdemo_BoardBase3_info'];

    }
}}
};
c['getFXBeanInfo__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_BoardBase3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_BoardBase3', { value : true });
      vm.com_dukescript_api_javafx_beans_FXBeanInfo$Provider(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_BoardBase3fillInstOf });
    cz_xelfi_demo_react4jdemo_BoardBase3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/BoardBase3';
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
    this['fld_cz_xelfi_demo_react4jdemo_BoardBase3_info'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_BoardBase3 = cz_xelfi_demo_react4jdemo_BoardBase3;


function cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3Square;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3Square = cz_xelfi_demo_react4jdemo_TicTacToe3Square(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3Square;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1;


function cz_xelfi_demo_react4jdemo_TicTacToe3Square() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3Square;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_TicTacToe3$Square(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square = cz_xelfi_demo_react4jdemo_TicTacToe3$Square(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderButton__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3Square$1;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1 = cz_xelfi_demo_react4jdemo_TicTacToe3Square$1(false))).constructor.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe3Square_2Ljava_lang_Runnable_2.call(stA0, lcA0, lcA2);
var stA0 = (refs_net_java_html_react_React4J || (refs_net_java_html_react_React4J = vm.net_java_html_react_React4J(false)))['wrapCallback__Ljava_lang_Object_2Lnet_java_html_react_React4J$Callback_2'](stA0);
var lcA3 = stA0;
var stA0 = "button";var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 4);
Array.at(stA1, 0, "className");
Array.at(stA1, 1, "square");
Array.at(stA1, 2, "onClick");
Array.at(stA1, 3, lcA3);
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](lcA1);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
    m.access = 20;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3SquarefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3Square', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3SquarefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3SquarefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3Square';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1;
    var refs_net_java_html_react_React4J;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3Square = cz_xelfi_demo_react4jdemo_TicTacToe3Square;


function cz_xelfi_demo_react4jdemo_TicTacToe3Square$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3Square$1;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React4J$Callback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$_callback1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_val$_callback1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_val$_callback1']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_this$0'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_this$0']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe3Square_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_this$0'] = lcA1;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_val$_callback1'] = lcA2;
(refs_net_java_html_react_React4J$Callback || (refs_net_java_html_react_React4J$Callback = vm.net_java_html_react_React4J$Callback(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.callback__V_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
invoker.run__V(lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_val$_callback1']);
return;

};
c['callback__V_3Ljava_lang_Object_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3Square$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3Square$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3Square$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3Square$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React4J$Callback;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_val$_callback1'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3Square$1 = cz_xelfi_demo_react4jdemo_TicTacToe3Square$1;


function cz_xelfi_demo_react4jdemo_TicTacToe3$Square() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$Square;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._className = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square_className'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square_className']; };
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square_className'] = "square";
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderButton__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = invoker.getProperty__Ljava_lang_Object_2Ljava_lang_String_2(lcA0,"value");
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA1 = stA0;
var stA0 = lcA0;var stA1 = lcA1;var stA2 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1(false))).lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_TicTacToe3$Square_2(lcA0);
var stA0 = stA0.renderButton__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2(stA1, stA2);
return stA0;

};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.lambda$render$0__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Square_2 = function(lcA0) {
invoker.onEvent__VLjava_lang_String_2(lcA0,"onClick");
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$SquarefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$Square', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$SquarefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$SquarefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$Square';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square_className'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$Square = cz_xelfi_demo_react4jdemo_TicTacToe3$Square;


function cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arg$1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1_arg$1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1_arg$1']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Square_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1_arg$1'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square = cz_xelfi_demo_react4jdemo_TicTacToe3$Square(false))).lambda$render$0__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Square_2(lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1_arg$1']);
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_TicTacToe3$Square_2 = function(lcA0) {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1;
c.constructor.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Square_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$Square$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1_arg$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1;


function cz_xelfi_demo_react4jdemo_TicTacToe2$Board() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2$Board;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderSquare__Lnet_java_html_react_React$Element_2I = function(lcI1) {
  var  lcA0 = this;
var stA0 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe2 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2 = cz_xelfi_demo_react4jdemo_TicTacToe2(false))).access$000__Ljava_lang_Object_2();
var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA1, 0, "value");
var stA2 = stA1;var stI3 = 1;var stA4 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA4);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,"");
var stA4 = invoker.append__Ljava_lang_StringBuilder_2I(stA4,lcI1);
var stA4 = invoker.toString__Ljava_lang_String_2(stA4);
Array.at(stA2, stI3, stA4);
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
    m.access = 2;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("Next player: X");
var lcA1 = stA0;
var stA0 = "div";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 4);
var stA3 = stA2;var stI4 = 0;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "status");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
Array.at(stA7, 0, lcA1);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 1;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA8 = stA7;var stI9 = 0;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, 0);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, 1);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, 2);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 2;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA8 = stA7;var stI9 = 0;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, 3);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, 4);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, 5);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 3;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA8 = stA7;var stI9 = 0;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, (6));
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, (7));
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, (8));
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2$BoardfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2$Board', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2$BoardfillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2$BoardfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2$Board';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2;
    var refs_java_lang_StringBuilder;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2$Board = cz_xelfi_demo_react4jdemo_TicTacToe2$Board;


function cz_xelfi_demo_react4jdemo_TicTacToe2() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_cSquare'] = null;
  m = c._cSquare = function (v) {  if (arguments.length == 1) CLS['fld_cSquare'] = v; return CLS['fld_cSquare']; };
  CLS['fld_cBoard'] = null;
  m = c._cBoard = function (v) {  if (arguments.length == 1) CLS['fld_cBoard'] = v; return CLS['fld_cBoard']; };
  CLS['fld_cGame'] = null;
  m = c._cGame = function (v) {  if (arguments.length == 1) CLS['fld_cGame'] = v; return CLS['fld_cGame']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.onPageLoad__V = function() {
var stA0 = "Square";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
c._cSquare(stA0);
var stA0 = "Board";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2 = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
c._cBoard(stA0);
var stA0 = "Game";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3 = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
c._cGame(stA0);
(refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['render__VLjava_lang_String_2Ljava_lang_String_2']("Game", "root");
return;

};
c['onPageLoad__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.access$000__Ljava_lang_Object_2 = function() {
return c._cSquare();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__Ljava_lang_Object_2 = function() {
return c._cBoard();

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1;
    var refs_net_java_html_react_React;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2 = registerClass(exports,'cz_xelfi_demo_react4jdemo_TicTacToe2',cz_xelfi_demo_react4jdemo_TicTacToe2);


function cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe2$Game;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Game || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Game = cz_xelfi_demo_react4jdemo_TicTacToe2$Game(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2$$Lambda$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Game;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3 = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3;


function cz_xelfi_demo_react4jdemo_TicTacToe2$Game() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2$Game;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = "div";var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA1, 0, "className");
Array.at(stA1, 1, "game");
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 2);
var stA3 = stA2;var stI4 = 0;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "game-board");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe2 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2 = cz_xelfi_demo_react4jdemo_TicTacToe2(false))).access$100__Ljava_lang_Object_2();
var stA11 = null;var stA12 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, stA12);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 1;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "game-info");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 2);
var stA8 = stA7;var stI9 = 0;var stA10 = "div";var stA11 = null;var stA12 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, stA12);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = "ol";var stA11 = null;var stA12 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, stA12);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2$GamefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2$Game', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2$GamefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2$GamefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2$Game';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
    var refs_net_java_html_react_React;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2$Game = cz_xelfi_demo_react4jdemo_TicTacToe2$Game;


function cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe2$Board;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Board || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Board = cz_xelfi_demo_react4jdemo_TicTacToe2$Board(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2$$Lambda$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Board;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2 = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2;


function cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe2Square;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe2Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2Square = cz_xelfi_demo_react4jdemo_TicTacToe2Square(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2Square;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1;


function cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_BoardBase3(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._squares = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_squares'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_squares']; };
  m = c._xIsNext = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_xIsNext'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_xIsNext']; };
    m = CLS.cons__VLjava_util_List_2Z = function(lcA1, lcI2) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_BoardBase3 || (refs_cz_xelfi_demo_react4jdemo_BoardBase3 = cz_xelfi_demo_react4jdemo_BoardBase3(false))).constructor.cons__V.call(lcA0);
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_squares'] = lcA1;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_xIsNext'] = lcI2;
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$BoardStatefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$BoardStatefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$BoardStatefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$BoardState';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_BoardBase3;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_squares'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_xIsNext'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState = cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState;


function cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arg$1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1_arg$1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1_arg$1']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1_arg$1'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1_arg$1'].onClick__V();
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_2 = function(lcA0) {
var stA0 = new cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1;
c.constructor.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/SquareBase$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1_arg$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1 = cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1;


function cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe1Game;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1Game || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1Game = cz_xelfi_demo_react4jdemo_TicTacToe1Game(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1$$Lambda$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1Game;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3 = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3;


function cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe1Game;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1Game || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1Game = cz_xelfi_demo_react4jdemo_TicTacToe1Game(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1$$Lambda$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1Game;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3 = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3;


function cz_xelfi_demo_react4jdemo_TicTacToe1Game() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1Game;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_TicTacToe1$Game(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Game || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Game = cz_xelfi_demo_react4jdemo_TicTacToe1$Game(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = "div";var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA1, 0, "className");
Array.at(stA1, 1, "game");
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 4);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 1;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "game-board");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA8 = stA7;var stI9 = 1;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2']("Board", null, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 2;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 3;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "game-info");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 5);
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA8 = stA7;var stI9 = 1;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2']("div", null, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA8 = stA7;var stI9 = 3;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2']("ol", null, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 4;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 20;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1GamefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1Game', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1GamefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1GamefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1Game';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Game;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1Game = cz_xelfi_demo_react4jdemo_TicTacToe1Game;


function cz_xelfi_demo_react4jdemo_TicTacToe1$Game() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1$Game;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1$GamefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1$Game', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1$GamefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1$GamefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1$Game';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1$Game = cz_xelfi_demo_react4jdemo_TicTacToe1$Game;


function cz_xelfi_demo_react4jdemo_TicTacToe2Square$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2Square$1;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React4J$Callback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$_callback1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_val$_callback1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_val$_callback1']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_this$0'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_this$0']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe2Square_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_this$0'] = lcA1;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_val$_callback1'] = lcA2;
(refs_net_java_html_react_React4J$Callback || (refs_net_java_html_react_React4J$Callback = vm.net_java_html_react_React4J$Callback(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.callback__V_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
invoker.run__V(lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_val$_callback1']);
return;

};
c['callback__V_3Ljava_lang_Object_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2Square$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2Square$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2Square$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2Square$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React4J$Callback;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_val$_callback1'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2Square$1 = cz_xelfi_demo_react4jdemo_TicTacToe2Square$1;


function cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe2Square;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe2Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2Square = cz_xelfi_demo_react4jdemo_TicTacToe2Square(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2Square;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1;


function cz_xelfi_demo_react4jdemo_LikeState$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeState$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeState$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeState$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeState$1fillInstOf });
    cz_xelfi_demo_react4jdemo_LikeState$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeState$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeState$1 = cz_xelfi_demo_react4jdemo_LikeState$1;


function cz_xelfi_demo_react4jdemo_TicTacToe2$Board() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2$Board;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderSquare__Lnet_java_html_react_React$Element_2I = function(lcI1) {
  var  lcA0 = this;
var stA0 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe2 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2 = cz_xelfi_demo_react4jdemo_TicTacToe2(false))).access$000__Ljava_lang_Object_2();
var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA1, 0, "value");
var stA2 = stA1;var stI3 = 1;var stA4 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA4);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,"");
var stA4 = invoker.append__Ljava_lang_StringBuilder_2I(stA4,lcI1);
var stA4 = invoker.toString__Ljava_lang_String_2(stA4);
Array.at(stA2, stI3, stA4);
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
    m.access = 2;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("Next player: X");
var lcA1 = stA0;
var stA0 = "div";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 4);
var stA3 = stA2;var stI4 = 0;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "status");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
Array.at(stA7, 0, lcA1);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 1;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA8 = stA7;var stI9 = 0;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, 0);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, 1);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, 2);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 2;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA8 = stA7;var stI9 = 0;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, 3);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, 4);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, 5);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 3;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA8 = stA7;var stI9 = 0;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, (6));
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, (7));
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2I.call(lcA0, (8));
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2$BoardfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2$Board', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2$BoardfillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2$BoardfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2$Board';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2;
    var refs_java_lang_StringBuilder;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2$Board = cz_xelfi_demo_react4jdemo_TicTacToe2$Board;


function cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe1Board;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1Board || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1Board = cz_xelfi_demo_react4jdemo_TicTacToe1Board(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1$$Lambda$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1Board;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2 = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2;


function cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe1Board;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1Board || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1Board = cz_xelfi_demo_react4jdemo_TicTacToe1Board(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1$$Lambda$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1Board;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2 = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2;


function cz_xelfi_demo_react4jdemo_TicTacToe1Board() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1Board;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_TicTacToe1$Board(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Board || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Board = cz_xelfi_demo_react4jdemo_TicTacToe1$Board(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderBoard__Lnet_java_html_react_React$Element_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = "div";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, (8));
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 1;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "status");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](lcA1);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 2;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 3;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, (7));
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "0");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 3;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "1");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 4;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 5;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "2");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = (6);var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 4;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 5;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, (7));
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "3");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 3;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "4");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 4;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 5;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "5");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = (6);var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = (6);var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = (7);var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, (7));
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "6");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 3;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "7");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 4;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 5;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "8");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = (6);var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
    m.access = 20;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1BoardfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1Board', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1BoardfillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1BoardfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1Board';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Board;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1Board = cz_xelfi_demo_react4jdemo_TicTacToe1Board;


function cz_xelfi_demo_react4jdemo_TicTacToe1$Board() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1$Board;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderBoard__Lnet_java_html_react_React$Element_2Ljava_lang_String_2 = function(lcA1) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.renderBoard__Lnet_java_html_react_React$Element_2Ljava_lang_String_2("Next player: X");
return stA0;

};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1$BoardfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1$Board', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1$BoardfillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1$BoardfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1$Board';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1$Board = cz_xelfi_demo_react4jdemo_TicTacToe1$Board;


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


function cz_xelfi_demo_react4jdemo_TicTacToe3Square() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3Square;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_TicTacToe3$Square(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square = cz_xelfi_demo_react4jdemo_TicTacToe3$Square(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderButton__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3Square$1;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1 = cz_xelfi_demo_react4jdemo_TicTacToe3Square$1(false))).constructor.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe3Square_2Ljava_lang_Runnable_2.call(stA0, lcA0, lcA2);
var stA0 = (refs_net_java_html_react_React4J || (refs_net_java_html_react_React4J = vm.net_java_html_react_React4J(false)))['wrapCallback__Ljava_lang_Object_2Lnet_java_html_react_React4J$Callback_2'](stA0);
var lcA3 = stA0;
var stA0 = "button";var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 4);
Array.at(stA1, 0, "className");
Array.at(stA1, 1, "square");
Array.at(stA1, 2, "onClick");
Array.at(stA1, 3, lcA3);
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](lcA1);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
    m.access = 20;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3SquarefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3Square', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3SquarefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3SquarefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3Square';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1;
    var refs_net_java_html_react_React4J;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3Square = cz_xelfi_demo_react4jdemo_TicTacToe3Square;


function cz_xelfi_demo_react4jdemo_ReactLikeButton$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_ReactLikeButton$1;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React4J$Callback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$_callback1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_val$_callback1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_val$_callback1']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_this$0'] = v; return this['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_this$0']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_ReactLikeButton_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_this$0'] = lcA1;
lcA0['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_val$_callback1'] = lcA2;
(refs_net_java_html_react_React4J$Callback || (refs_net_java_html_react_React4J$Callback = vm.net_java_html_react_React4J$Callback(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.callback__V_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
invoker.run__V(lcA0['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_val$_callback1']);
return;

};
c['callback__V_3Ljava_lang_Object_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_ReactLikeButton$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_ReactLikeButton$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_ReactLikeButton$1fillInstOf });
    cz_xelfi_demo_react4jdemo_ReactLikeButton$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/ReactLikeButton$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React4J$Callback;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_val$_callback1'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_ReactLikeButton$1 = cz_xelfi_demo_react4jdemo_ReactLikeButton$1;


function cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3Square;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3Square = cz_xelfi_demo_react4jdemo_TicTacToe3Square(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3Square;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1;


function cz_xelfi_demo_react4jdemo_ReactLikeButton() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_ReactLikeButton;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_LikeButton(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_LikeButton || (refs_cz_xelfi_demo_react4jdemo_LikeButton = cz_xelfi_demo_react4jdemo_LikeButton(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderLikeButton__Lnet_java_html_react_React$Element_2Ljava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_ReactLikeButton$1;
(refs_cz_xelfi_demo_react4jdemo_ReactLikeButton$1 || (refs_cz_xelfi_demo_react4jdemo_ReactLikeButton$1 = cz_xelfi_demo_react4jdemo_ReactLikeButton$1(false))).constructor.cons__VLcz_xelfi_demo_react4jdemo_ReactLikeButton_2Ljava_lang_Runnable_2.call(stA0, lcA0, lcA1);
var stA0 = (refs_net_java_html_react_React4J || (refs_net_java_html_react_React4J = vm.net_java_html_react_React4J(false)))['wrapCallback__Ljava_lang_Object_2Lnet_java_html_react_React4J$Callback_2'](stA0);
var lcA2 = stA0;
var stA0 = "button";var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA1, 0, "onClick");
Array.at(stA1, 1, lcA2);
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("Like");
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
c['renderLikeButton__Lnet_java_html_react_React$Element_2Ljava_lang_Runnable_2'] = m;

    m.access = 20;
    m.cls = CLS;
    m = c.renderReply__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = "div";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("\n  You like React for JavaFX Light! See ");
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 1;var stA5 = "a";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "href");
Array.at(stA6, 1, "like.html");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("more");
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 2;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("...\n");
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
c['renderReply__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 20;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_ReactLikeButtonfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_ReactLikeButton', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_ReactLikeButtonfillInstOf });
    cz_xelfi_demo_react4jdemo_ReactLikeButtonfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/ReactLikeButton';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_LikeButton;
    var refs_cz_xelfi_demo_react4jdemo_ReactLikeButton$1;
    var refs_net_java_html_react_React4J;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_ReactLikeButton = cz_xelfi_demo_react4jdemo_ReactLikeButton;


function cz_xelfi_demo_react4jdemo_LikeButton() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeButton;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
var stA0 = lcA0;var stA1 = new cz_xelfi_demo_react4jdemo_LikeButton$LikeState;
(refs_cz_xelfi_demo_react4jdemo_LikeButton$LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeButton$LikeState = cz_xelfi_demo_react4jdemo_LikeButton$LikeState(false))).constructor.cons__VZ.call(stA1, 0);
invoker.setState__VLjava_lang_Object_2(stA0,stA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.doLike__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = new cz_xelfi_demo_react4jdemo_LikeButton$LikeState;
(refs_cz_xelfi_demo_react4jdemo_LikeButton$LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeButton$LikeState = cz_xelfi_demo_react4jdemo_LikeButton$LikeState(false))).constructor.cons__VZ.call(stA1, 1);
invoker.setState__VLjava_lang_Object_2(stA0,stA1);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.renderReply__Lnet_java_html_react_React$Element_2 = function() {
};
c['renderReply__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.renderLikeButton__Lnet_java_html_react_React$Element_2Ljava_lang_Runnable_2 = function(lcA1) {
};
c['renderLikeButton__Lnet_java_html_react_React$Element_2Ljava_lang_Runnable_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_cz_xelfi_demo_react4jdemo_LikeButton$LikeState']) vm.java_lang_Class(false).castEx(stA0, 'cz.xelfi.demo.react4jdemo.LikeButton$LikeState');
if ((stA0['fld_cz_xelfi_demo_react4jdemo_LikeButton$LikeState_liked']) == 0) { gt = 18; break IF; }
var stA0 = invoker.renderReply__Lnet_java_html_react_React$Element_2(lcA0);
return stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

var stA0 = lcA0;var stA1 = (refs_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1 = cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1(false))).lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_LikeButton_2(lcA0);
var stA0 = invoker.renderLikeButton__Lnet_java_html_react_React$Element_2Ljava_lang_Runnable_2(stA0,stA1);
return stA0;

    }
}}
};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.onPageLoad__V = function() {
var stA0 = "LikeButton";var stA1 = (refs_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2 || (refs_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2 = cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
(refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['render__VLjava_lang_String_2Ljava_lang_String_2']("LikeButton", "like_button_container");
return;

};
c['onPageLoad__V'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeButtonfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeButton', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeButtonfillInstOf });
    cz_xelfi_demo_react4jdemo_LikeButtonfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeButton';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
    var refs_cz_xelfi_demo_react4jdemo_LikeButton$LikeState;
    var refs_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1;
    var refs_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeButton = registerClass(exports,'cz_xelfi_demo_react4jdemo_LikeButton',cz_xelfi_demo_react4jdemo_LikeButton);


function cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_ReactLikeButton;
(refs_cz_xelfi_demo_react4jdemo_ReactLikeButton || (refs_cz_xelfi_demo_react4jdemo_ReactLikeButton = cz_xelfi_demo_react4jdemo_ReactLikeButton(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2fillInstOf });
    cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeButton$$Lambda$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_ReactLikeButton;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2 = cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2;


function cz_xelfi_demo_react4jdemo_ReactLikeButton() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_ReactLikeButton;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_LikeButton(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_LikeButton || (refs_cz_xelfi_demo_react4jdemo_LikeButton = cz_xelfi_demo_react4jdemo_LikeButton(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderLikeButton__Lnet_java_html_react_React$Element_2Ljava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_ReactLikeButton$1;
(refs_cz_xelfi_demo_react4jdemo_ReactLikeButton$1 || (refs_cz_xelfi_demo_react4jdemo_ReactLikeButton$1 = cz_xelfi_demo_react4jdemo_ReactLikeButton$1(false))).constructor.cons__VLcz_xelfi_demo_react4jdemo_ReactLikeButton_2Ljava_lang_Runnable_2.call(stA0, lcA0, lcA1);
var stA0 = (refs_net_java_html_react_React4J || (refs_net_java_html_react_React4J = vm.net_java_html_react_React4J(false)))['wrapCallback__Ljava_lang_Object_2Lnet_java_html_react_React4J$Callback_2'](stA0);
var lcA2 = stA0;
var stA0 = "button";var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA1, 0, "onClick");
Array.at(stA1, 1, lcA2);
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("Like");
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
c['renderLikeButton__Lnet_java_html_react_React$Element_2Ljava_lang_Runnable_2'] = m;

    m.access = 20;
    m.cls = CLS;
    m = c.renderReply__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = "div";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("\n  You like React for JavaFX Light! See ");
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 1;var stA5 = "a";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "href");
Array.at(stA6, 1, "like.html");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("more");
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 2;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("...\n");
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
c['renderReply__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 20;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_ReactLikeButtonfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_ReactLikeButton', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_ReactLikeButtonfillInstOf });
    cz_xelfi_demo_react4jdemo_ReactLikeButtonfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/ReactLikeButton';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_LikeButton;
    var refs_cz_xelfi_demo_react4jdemo_ReactLikeButton$1;
    var refs_net_java_html_react_React4J;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_ReactLikeButton = cz_xelfi_demo_react4jdemo_ReactLikeButton;


function cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arg$1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1_arg$1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1_arg$1']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_LikeButton_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1_arg$1'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1_arg$1'].doLike__V();
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_LikeButton_2 = function(lcA0) {
var stA0 = new cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1;
c.constructor.cons__VLcz_xelfi_demo_react4jdemo_LikeButton_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeButton$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1_arg$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1 = cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1;


function cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe2$Board;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Board || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Board = cz_xelfi_demo_react4jdemo_TicTacToe2$Board(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2$$Lambda$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Board;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2 = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2;


function cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arg$1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1_arg$1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1_arg$1']; };
    m = CLS.cons__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1_arg$1'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square = cz_xelfi_demo_react4jdemo_TicTacToe1$Square(false))).lambda$render$0__VLjava_lang_String_2(lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1_arg$1']);
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.lambdaFactory$__Ljava_lang_Runnable_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1;
c.constructor.cons__VLjava_lang_String_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1$Square$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1_arg$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1;


function cz_xelfi_demo_react4jdemo_TicTacToe1$Square() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1$Square;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderSquare__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"");
var stA1 = invoker.getProperty__Ljava_lang_Object_2Ljava_lang_String_2(lcA0,"value");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
var stA0 = lcA0;var stA1 = lcA1;var stA2 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1(false))).lambdaFactory$__Ljava_lang_Runnable_2Ljava_lang_String_2(lcA1);
var stA0 = stA0.renderSquare__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2(stA1, stA2);
return stA0;

};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.lambda$render$0__VLjava_lang_String_2 = function(lcA0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Clicked ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA0);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
invoker.println__VLjava_lang_String_2((refs_java_lang_System || (refs_java_lang_System = vm.java_lang_System(false)))['_err'](),lcA1);
(refs_cz_xelfi_demo_react4jdemo_JsUtils || (refs_cz_xelfi_demo_react4jdemo_JsUtils = cz_xelfi_demo_react4jdemo_JsUtils(false))).alert__VLjava_lang_String_2(lcA1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1$SquarefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1$Square', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1$SquarefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1$SquarefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1$Square';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
    var refs_java_lang_StringBuilder;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1;
    var refs_java_lang_System;
    var refs_cz_xelfi_demo_react4jdemo_JsUtils;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1$Square = cz_xelfi_demo_react4jdemo_TicTacToe1$Square;

vm.java_lang_System = link('java/lang/System', function(f) { vm.java_lang_System =  f; });

function cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arg$1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1_arg$1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1_arg$1']; };
    m = CLS.cons__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1_arg$1'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square = cz_xelfi_demo_react4jdemo_TicTacToe1$Square(false))).lambda$render$0__VLjava_lang_String_2(lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1_arg$1']);
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.lambdaFactory$__Ljava_lang_Runnable_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1;
c.constructor.cons__VLjava_lang_String_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1$Square$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1_arg$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1;


function cz_xelfi_demo_react4jdemo_TicTacToe1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.onPageLoad__V = function() {
var stA0 = "Square";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
var stA0 = "Board";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2 = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
var stA0 = "Game";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3 = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
(refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['render__VLjava_lang_String_2Ljava_lang_String_2']("Game", "root");
return;

};
c['onPageLoad__V'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1;
    var refs_net_java_html_react_React;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1 = registerClass(exports,'cz_xelfi_demo_react4jdemo_TicTacToe1',cz_xelfi_demo_react4jdemo_TicTacToe1);


function cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe1Square;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1Square = cz_xelfi_demo_react4jdemo_TicTacToe1Square(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1Square;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1;


function cz_xelfi_demo_react4jdemo_TicTacToe1Square() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1Square;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_TicTacToe1$Square(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square = cz_xelfi_demo_react4jdemo_TicTacToe1$Square(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderSquare__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe1Square$1;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1 = cz_xelfi_demo_react4jdemo_TicTacToe1Square$1(false))).constructor.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe1Square_2Ljava_lang_Runnable_2.call(stA0, lcA0, lcA2);
var stA0 = (refs_net_java_html_react_React4J || (refs_net_java_html_react_React4J = vm.net_java_html_react_React4J(false)))['wrapCallback__Ljava_lang_Object_2Lnet_java_html_react_React4J$Callback_2'](stA0);
var lcA3 = stA0;
var stA0 = "button";var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 4);
Array.at(stA1, 0, "className");
Array.at(stA1, 1, "square");
Array.at(stA1, 2, "onClick");
Array.at(stA1, 3, lcA3);
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](lcA1);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
    m.access = 20;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1SquarefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1Square', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1SquarefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1SquarefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1Square';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1;
    var refs_net_java_html_react_React4J;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1Square = cz_xelfi_demo_react4jdemo_TicTacToe1Square;


function cz_xelfi_demo_react4jdemo_TicTacToe1Square$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1Square$1;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React4J$Callback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$_callback1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_val$_callback1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_val$_callback1']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_this$0'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_this$0']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe1Square_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_this$0'] = lcA1;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_val$_callback1'] = lcA2;
(refs_net_java_html_react_React4J$Callback || (refs_net_java_html_react_React4J$Callback = vm.net_java_html_react_React4J$Callback(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.callback__V_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
invoker.run__V(lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_val$_callback1']);
return;

};
c['callback__V_3Ljava_lang_Object_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1Square$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1Square$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1Square$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1Square$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React4J$Callback;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_val$_callback1'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1Square$1 = cz_xelfi_demo_react4jdemo_TicTacToe1Square$1;


function cz_xelfi_demo_react4jdemo_TicTacToe1$Game() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1$Game;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1$GamefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1$Game', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1$GamefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1$GamefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1$Game';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1$Game = cz_xelfi_demo_react4jdemo_TicTacToe1$Game;


function cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).constructor.$class, (refs_cz_xelfi_demo_react4jdemo_CodeComponent || (refs_cz_xelfi_demo_react4jdemo_CodeComponent = cz_xelfi_demo_react4jdemo_CodeComponent(false))).constructor.$class, 3, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"name", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"url", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"code", 2, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 28; break IF; }
  case 1:{ gt = 45; break IF; }
  case 2:{ gt = 62; break IF; }
  default: { gt = 79; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = lcA1;var stA1 = (refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).access$100__Lcz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setName__VLjava_lang_String_2(stA1);
return;
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stA0 = lcA1;var stA1 = (refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).access$100__Lcz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setUrl__VLjava_lang_String_2(stA1);
return;
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stA0 = lcA1;var stA1 = (refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).access$100__Lcz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCode__VLjava_lang_String_2(stA1);
return;
    }
    X_79: for (;;) { IF: if (gt <= 79) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 28; break IF; }
  case 1:{ gt = 33; break IF; }
  case 2:{ gt = 38; break IF; }
  default: { gt = 43; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = lcA1.getName__Ljava_lang_String_2();
return stA0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stA0 = lcA1.getUrl__Ljava_lang_String_2();
return stA0;
    }
    X_38: for (;;) { IF: if (gt <= 38) {

var stA0 = lcA1.getCode__Ljava_lang_String_2();
return stA0;
    }
    X_43: for (;;) { IF: if (gt <= 43) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var stA0 = (refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 103; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

if ((lcI3) != (2)) { gt = 46; break IF; }
if (lcA4 !== null && !lcA4['$instOf_java_lang_Exception']) vm.java_lang_Class(false).castEx(lcA4, 'java.lang.Exception');
var lcA6 = lcA4;
if ((lcA5[0] || Array.at(lcA5, 0)) !== null && !(lcA5[0] || Array.at(lcA5, 0))['$instOf_cz_xelfi_demo_react4jdemo_CodeComponent']) vm.java_lang_Class(false).castEx((lcA5[0] || Array.at(lcA5, 0)), 'cz.xelfi.demo.react4jdemo.CodeComponent');
(refs_cz_xelfi_demo_react4jdemo_CodeComponent || (refs_cz_xelfi_demo_react4jdemo_CodeComponent = cz_xelfi_demo_react4jdemo_CodeComponent(false))).loadCodeFailed__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_Throwable_2Lcz_xelfi_demo_react4jdemo_CodeComponent_2(lcA1, lcA6, (lcA5[0] || Array.at(lcA5, 0)));
return;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

if ((lcI3) != (1)) { gt = 103; break IF; }
if (lcA4 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA4, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA4, '');
var lcA6 = lcA4;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 1);
Array.at(stA0, 0, null);
var lcA7 = stA0;
var stA0 = (refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).access$100__Lcz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType_2();
var stA1 = (refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2(lcA1);
var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(stA1);
invoker.copyJSON__VLnet_java_html_BrwsrCtx_2_3Ljava_lang_Object_2Ljava_lang_Class_2_3Ljava_lang_Object_2(stA0,stA1, lcA6, (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA7);
if ((lcA5[0] || Array.at(lcA5, 0)) !== null && !(lcA5[0] || Array.at(lcA5, 0))['$instOf_cz_xelfi_demo_react4jdemo_CodeComponent']) vm.java_lang_Class(false).castEx((lcA5[0] || Array.at(lcA5, 0)), 'cz.xelfi.demo.react4jdemo.CodeComponent');
(refs_cz_xelfi_demo_react4jdemo_CodeComponent || (refs_cz_xelfi_demo_react4jdemo_CodeComponent = cz_xelfi_demo_react4jdemo_CodeComponent(false))).loadCode__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2Lcz_xelfi_demo_react4jdemo_CodeComponent_2(lcA1, (lcA7[0] || Array.at(lcA7, 0)), (lcA5[0] || Array.at(lcA5, 0)));
return;
    }
    X_103: for (;;) { IF: if (gt <= 103) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"index: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," type: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.read__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_LoadingUrl;
(refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_LoadingUrl$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).access$400__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
lcA0.onMessage__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
lcA0.onChange__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var stA0 = lcA0.cloneTo__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
lcA0.call__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
lcA0.setValue__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_LoadingUrl$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaTypefillInstOf });
    cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LoadingUrl$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_LoadingUrl;
    var refs_cz_xelfi_demo_react4jdemo_CodeComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_UnsupportedOperationException;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType = cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType;


function cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3$Game;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Game || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Game = cz_xelfi_demo_react4jdemo_TicTacToe3$Game(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$$Lambda$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Game;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3 = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3;


function cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX || (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderReply__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = "div";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("You like React for Java! Continue to the   ");
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 1;var stA5 = "a";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "href");
Array.at(stA6, 1, "ttt1.html");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("tutorial");
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 2;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("...");
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
c['renderReply__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 20;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFXfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFXfillInstOf });
    cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFXfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/ReactLikeButtonNoJavaFX';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX = cz_xelfi_demo_react4jdemo_ReactLikeButtonNoJavaFX;


function cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3$Board;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board = cz_xelfi_demo_react4jdemo_TicTacToe3$Board(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$$Lambda$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2 = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2;


function cz_xelfi_demo_react4jdemo_LoadingUrl() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LoadingUrl;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto']; };
  m = c._prop_name = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name']; };
  m = c._prop_url = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url']; };
  m = c._prop_code = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_cz_xelfi_demo_react4jdemo_CodeComponent || (refs_cz_xelfi_demo_react4jdemo_CodeComponent = cz_xelfi_demo_react4jdemo_CodeComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'],"name");
return lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'];

};
c['getName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto']);
var lcA2 = lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'],"name", lcA2, lcA1);
return;

    }
}}
};
c['setName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.withName__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.setName__VLjava_lang_String_2(lcA1);
return lcA0;

};
c['withName__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getUrl__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'],"url");
return lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'];

};
c['getUrl__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setUrl__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto']);
var lcA2 = lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'],"url", lcA2, lcA1);
return;

    }
}}
};
c['setUrl__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.withUrl__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.setUrl__VLjava_lang_String_2(lcA1);
return lcA0;

};
c['withUrl__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCode__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'],"code");
return lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'];

};
c['getCode__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCode__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto']);
var lcA2 = lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'],"code", lcA2, lcA1);
return;

    }
}}
};
c['setCode__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.withCode__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.setCode__VLjava_lang_String_2(lcA1);
return lcA0;

};
c['withCode__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadCode__VLjava_lang_String_2Lcz_xelfi_demo_react4jdemo_CodeComponent_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'];var stI1 = 0;var stA2 = null;var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA1);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"");
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
var stA4 = null;var stA5 = null;var stA6 = null;var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA7, 0, lcA2);
invoker.loadJSONWithHeaders__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stI1, stA2, stA3, stA4, stA5, stA6, stA7);
return;

};
c['loadCode__VLjava_lang_String_2Lcz_xelfi_demo_react4jdemo_CodeComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 3);
var lcA3 = stA0;
var stA0 = lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 3);
Array.at(stA2, 0, "name");
Array.at(stA2, 1, "url");
Array.at(stA2, 2, "code");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'] = (lcA3[2] || Array.at(lcA3, 2));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 14; break IF; }
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
var stA0 = lcA0;{ gt = 33; break IF; }
    }
    X_14: for (;;) { IF: if (gt <= 14) {

if ((lcA0) !== null) { gt = 25; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
{ gt = 33; break IF; }
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, lcA0);
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return stA0;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(123));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"name");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"url");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getUrl__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"code");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCode__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto']);
var stA0 = c.clone__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_LoadingUrl;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getName__Ljava_lang_String_2();
stA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getUrl__Ljava_lang_String_2();
stA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getCode__Ljava_lang_String_2();
stA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'] = stA1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "Please specify targetId=\"\" in your @Model annotation");
{ var stA0 = stA0; throw stA0; }

};
    m.access = 2;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA0)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA1 != null && lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'], lcA2['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'], lcA2['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'], lcA2['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

return 1;

    }
}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'], lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lcz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2 = function(lcA0) {
return lcA0['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_LoadingUrl$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType;
(refs_cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType = cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType(false))).constructor.cons__VLcz_xelfi_demo_react4jdemo_LoadingUrl$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LoadingUrlfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LoadingUrlfillInstOf });
    cz_xelfi_demo_react4jdemo_LoadingUrlfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LoadingUrl';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_CodeComponent;
    var refs_java_lang_StringBuilder;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_IllegalStateException;
    var refs_cz_xelfi_demo_react4jdemo_LoadingUrl$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_proto'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_name'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_url'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_LoadingUrl_prop_code'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LoadingUrl = registerClass(exports,'cz_xelfi_demo_react4jdemo_LoadingUrl',cz_xelfi_demo_react4jdemo_LoadingUrl);


function cz_xelfi_demo_react4jdemo_TicTacToe3Square$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3Square$1;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React4J$Callback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$_callback1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_val$_callback1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_val$_callback1']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_this$0'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_this$0']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe3Square_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_this$0'] = lcA1;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_val$_callback1'] = lcA2;
(refs_net_java_html_react_React4J$Callback || (refs_net_java_html_react_React4J$Callback = vm.net_java_html_react_React4J$Callback(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.callback__V_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
invoker.run__V(lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_val$_callback1']);
return;

};
c['callback__V_3Ljava_lang_Object_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3Square$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3Square$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3Square$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3Square$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React4J$Callback;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_val$_callback1'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3Square$1_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3Square$1 = cz_xelfi_demo_react4jdemo_TicTacToe3Square$1;


function cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe2$Game;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Game || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Game = cz_xelfi_demo_react4jdemo_TicTacToe2$Game(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2$$Lambda$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Game;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3 = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3;


function cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe1Square;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1Square = cz_xelfi_demo_react4jdemo_TicTacToe1Square(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1Square;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1;


function cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_cz_xelfi_demo_react4jdemo_LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeState = cz_xelfi_demo_react4jdemo_LikeState(false))).constructor.$class, (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX || (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX(false))).constructor.$class, 1, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"liked", 0, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLcz_xelfi_demo_react4jdemo_LikeState_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 40; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = lcA1;var stA1 = (refs_cz_xelfi_demo_react4jdemo_LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeState = cz_xelfi_demo_react4jdemo_LikeState(false))).access$100__Lcz_xelfi_demo_react4jdemo_LikeState$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setLiked__VZ(stI1);
return;
    }
    X_40: for (;;) { IF: if (gt <= 40) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_LikeState_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 28; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stI0 = lcA1.isLiked__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_28: for (;;) { IF: if (gt <= 28) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLcz_xelfi_demo_react4jdemo_LikeState_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LikeState');
var stA0 = (refs_cz_xelfi_demo_react4jdemo_LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeState = cz_xelfi_demo_react4jdemo_LikeState(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lcz_xelfi_demo_react4jdemo_LikeState_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLcz_xelfi_demo_react4jdemo_LikeState_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLcz_xelfi_demo_react4jdemo_LikeState_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"index: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," type: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.read__Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_LikeState;
(refs_cz_xelfi_demo_react4jdemo_LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeState = cz_xelfi_demo_react4jdemo_LikeState(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_LikeState$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lcz_xelfi_demo_react4jdemo_LikeState_2Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_cz_xelfi_demo_react4jdemo_LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeState = cz_xelfi_demo_react4jdemo_LikeState(false))).access$400__Lcz_xelfi_demo_react4jdemo_LikeState_2Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LikeState');
lcA0.onMessage__VLcz_xelfi_demo_react4jdemo_LikeState_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LikeState');
lcA0.onChange__VLcz_xelfi_demo_react4jdemo_LikeState_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LikeState');
var stA0 = lcA0.cloneTo__Lcz_xelfi_demo_react4jdemo_LikeState_2Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LikeState');
lcA0.call__VLcz_xelfi_demo_react4jdemo_LikeState_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LikeState');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_LikeState_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LikeState');
lcA0.setValue__VLcz_xelfi_demo_react4jdemo_LikeState_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_LikeState$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeState$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeState$Html4JavaTypefillInstOf });
    cz_xelfi_demo_react4jdemo_LikeState$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeState$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_LikeState;
    var refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_Boolean;
    var refs_java_lang_UnsupportedOperationException;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType = cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType;


function cz_xelfi_demo_react4jdemo_ButtonState$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_ButtonState$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_ButtonState$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_ButtonState$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_ButtonState$1fillInstOf });
    cz_xelfi_demo_react4jdemo_ButtonState$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/ButtonState$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_ButtonState$1 = cz_xelfi_demo_react4jdemo_ButtonState$1;


function cz_xelfi_demo_react4jdemo_ButtonState() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_ButtonState;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._instance = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_ButtonState_instance'] = v; return this['fld_cz_xelfi_demo_react4jdemo_ButtonState_instance']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_ButtonState_proto'] = v; return this['fld_cz_xelfi_demo_react4jdemo_ButtonState_proto']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl || (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.connect__VLcz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0['fld_cz_xelfi_demo_react4jdemo_ButtonState_proto'];var stI1 = 1;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA2, 0, lcA1);
invoker.runInBrowser__VI_3Ljava_lang_Object_2(stA0,stI1, stA2);
return;

};
c['connect__VLcz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = new cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl;
(refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl || (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl(false))).constructor.cons__V.call(stA1);
stA0['fld_cz_xelfi_demo_react4jdemo_ButtonState_instance'] = stA1;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_cz_xelfi_demo_react4jdemo_ButtonState_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
var lcA3 = stA0;
var stA0 = lcA0['fld_cz_xelfi_demo_react4jdemo_ButtonState_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 14; break IF; }
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
var stA0 = lcA0;{ gt = 33; break IF; }
    }
    X_14: for (;;) { IF: if (gt <= 14) {

if ((lcA0) !== null) { gt = 25; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
{ gt = 33; break IF; }
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, lcA0);
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return stA0;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(123));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lcz_xelfi_demo_react4jdemo_ButtonState_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_cz_xelfi_demo_react4jdemo_ButtonState_proto']);
var stA0 = c.clone__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lcz_xelfi_demo_react4jdemo_ButtonState_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_ButtonState;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lcz_xelfi_demo_react4jdemo_ButtonState_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "Please specify targetId=\"\" in your @Model annotation");
{ var stA0 = stA0; throw stA0; }

};
    m.access = 2;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA0)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA1 != null && lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.ButtonState');
var lcA2 = lcA1;
return 1;

    }
}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lcz_xelfi_demo_react4jdemo_ButtonState_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lcz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl_2Lcz_xelfi_demo_react4jdemo_ButtonState_2 = function(lcA0) {
return lcA0['fld_cz_xelfi_demo_react4jdemo_ButtonState_instance'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lcz_xelfi_demo_react4jdemo_ButtonState_2 = function(lcA0) {
return lcA0['fld_cz_xelfi_demo_react4jdemo_ButtonState_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_ButtonState$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType;
(refs_cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType || (refs_cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType = cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType(false))).constructor.cons__VLcz_xelfi_demo_react4jdemo_ButtonState$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_ButtonStatefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_ButtonState', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_ButtonStatefillInstOf });
    cz_xelfi_demo_react4jdemo_ButtonStatefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/ButtonState';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_IllegalStateException;
    var refs_cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_ButtonState_instance'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_ButtonState_proto'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_ButtonState = registerClass(exports,'cz_xelfi_demo_react4jdemo_ButtonState',cz_xelfi_demo_react4jdemo_ButtonState);


function cz_xelfi_demo_react4jdemo_TicTacToe3$Square() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$Square;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._className = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square_className'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square_className']; };
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square_className'] = "square";
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderButton__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = invoker.getProperty__Ljava_lang_Object_2Ljava_lang_String_2(lcA0,"value");
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA1 = stA0;
var stA0 = lcA0;var stA1 = lcA1;var stA2 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1(false))).lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_TicTacToe3$Square_2(lcA0);
var stA0 = stA0.renderButton__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2(stA1, stA2);
return stA0;

};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.lambda$render$0__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Square_2 = function(lcA0) {
invoker.onEvent__VLjava_lang_String_2(lcA0,"onClick");
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$SquarefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$Square', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$SquarefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$SquarefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$Square';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square_className'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$Square = cz_xelfi_demo_react4jdemo_TicTacToe3$Square;


function cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
var stA0 = lcA0;var stA1 = new cz_xelfi_demo_react4jdemo_LikeState;
(refs_cz_xelfi_demo_react4jdemo_LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeState = cz_xelfi_demo_react4jdemo_LikeState(false))).constructor.cons__VZ.call(stA1, 0);
invoker.setState__VLjava_lang_Object_2(stA0,stA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.doLike__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = new cz_xelfi_demo_react4jdemo_LikeState;
(refs_cz_xelfi_demo_react4jdemo_LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeState = cz_xelfi_demo_react4jdemo_LikeState(false))).constructor.cons__VZ.call(stA1, 1);
invoker.setState__VLjava_lang_Object_2(stA0,stA1);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.renderReply__Lnet_java_html_react_React$Element_2 = function() {
};
c['renderReply__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(stA0, 'cz.xelfi.demo.react4jdemo.LikeState');
var stI0 = stA0.isLiked__Z();
if ((stI0) == 0) { gt = 18; break IF; }
var stA0 = invoker.renderReply__Lnet_java_html_react_React$Element_2(lcA0);
return stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {
var stA0 = new cz_xelfi_demo_react4jdemo_ButtonState;
(refs_cz_xelfi_demo_react4jdemo_ButtonState || (refs_cz_xelfi_demo_react4jdemo_ButtonState = cz_xelfi_demo_react4jdemo_ButtonState(false))).constructor.cons__V.call(stA0);
var lcA1 = stA0;
lcA1.connect__VLcz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX_2(lcA0);
var stA0 = "button";var stA1 = lcA1;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("Like");
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

    }
}}
};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.onPageLoad__V = function() {
var stA0 = "LikeButton";var stA1 = (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1 = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
(refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['render__VLjava_lang_String_2Ljava_lang_String_2']("LikeButton", "like_button_container");
return;

};
c['onPageLoad__V'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFXfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFXfillInstOf });
    cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFXfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeButtonNoJavaFX';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
    var refs_cz_xelfi_demo_react4jdemo_LikeState;
    var refs_cz_xelfi_demo_react4jdemo_ButtonState;
    var refs_net_java_html_react_React;
    var refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$$Lambda$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX = registerClass(exports,'cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX',cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX);


function cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arg$1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1_arg$1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1_arg$1']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Square_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1_arg$1'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square = cz_xelfi_demo_react4jdemo_TicTacToe3$Square(false))).lambda$render$0__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Square_2(lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1_arg$1']);
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_TicTacToe3$Square_2 = function(lcA0) {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1;
c.constructor.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Square_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$Square$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Square;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1_arg$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe3$Square$$Lambda$1;


function cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._ui = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl_ui'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl_ui']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.connect__VLcz_xelfi_demo_react4jdemo_ButtonState_2Lcz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl_ui'] = lcA2;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.onClick__V = function() {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl_ui'].doLike__V();
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrlfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrlfillInstOf });
    cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrlfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeButtonNoJavaFX$ButtonStateCntrl';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl_ui'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl;


function cz_xelfi_demo_react4jdemo_TicTacToe2$Game() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2$Game;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = "div";var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA1, 0, "className");
Array.at(stA1, 1, "game");
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 2);
var stA3 = stA2;var stI4 = 0;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "game-board");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe2 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2 = cz_xelfi_demo_react4jdemo_TicTacToe2(false))).access$100__Ljava_lang_Object_2();
var stA11 = null;var stA12 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, stA12);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 1;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "game-info");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 2);
var stA8 = stA7;var stI9 = 0;var stA10 = "div";var stA11 = null;var stA12 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, stA12);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = "ol";var stA11 = null;var stA12 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, stA12);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2$GamefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2$Game', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2$GamefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2$GamefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2$Game';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
    var refs_net_java_html_react_React;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2$Game = cz_xelfi_demo_react4jdemo_TicTacToe2$Game;


function cz_xelfi_demo_react4jdemo_TicTacToe1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.onPageLoad__V = function() {
var stA0 = "Square";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
var stA0 = "Board";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2 = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
var stA0 = "Game";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3 = cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
(refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['render__VLjava_lang_String_2Ljava_lang_String_2']("Game", "root");
return;

};
c['onPageLoad__V'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$1;
    var refs_net_java_html_react_React;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$2;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1$$Lambda$3;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1 = registerClass(exports,'cz_xelfi_demo_react4jdemo_TicTacToe1',cz_xelfi_demo_react4jdemo_TicTacToe1);


function cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arg$1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1_arg$1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1_arg$1']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_LikeButton_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1_arg$1'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1_arg$1'].doLike__V();
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_LikeButton_2 = function(lcA0) {
var stA0 = new cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1;
c.constructor.cons__VLcz_xelfi_demo_react4jdemo_LikeButton_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeButton$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1_arg$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1 = cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1;


function cz_xelfi_demo_react4jdemo_SquareBase() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_SquareBase;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._info = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_SquareBase_info'] = v; return this['fld_cz_xelfi_demo_react4jdemo_SquareBase_info']; };
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

if ((lcA0['fld_cz_xelfi_demo_react4jdemo_SquareBase_info']) !== null) { gt = 54; break IF; }
if (lcA0 !== null && !lcA0['$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps']) vm.java_lang_Class(false).castEx(lcA0, 'cz.xelfi.demo.react4jdemo.TicTacToe3$Board$SquareProps');
var lcA1 = lcA0;
var stA0 = (refs_com_dukescript_api_javafx_beans_FXBeanInfo || (refs_com_dukescript_api_javafx_beans_FXBeanInfo = vm.com_dukescript_api_javafx_beans_FXBeanInfo(false)))['newBuilder__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_Object_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.constant__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Object_2(lcA2,"value", lcA1['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_value']);
var stA0 = lcA2;var stA1 = "onClick";var stA2 = lcA1;var stA3 = stA2;
var stA4 = invoker.getClass__Ljava_lang_Class_2(stA3);
var stA2 = (refs_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1 = cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1(false))).lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_2(stA2);
var stA0 = invoker.action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Runnable_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = invoker.build__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2(lcA2);
stA0['fld_cz_xelfi_demo_react4jdemo_SquareBase_info'] = stA1;
    }
    X_54: for (;;) { IF: if (gt <= 54) {

return lcA0['fld_cz_xelfi_demo_react4jdemo_SquareBase_info'];

    }
}}
};
c['getFXBeanInfo__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_SquareBasefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_SquareBase', { value : true });
      vm.com_dukescript_api_javafx_beans_FXBeanInfo$Provider(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_SquareBasefillInstOf });
    cz_xelfi_demo_react4jdemo_SquareBasefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/SquareBase';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.com_dukescript_api_javafx_beans_FXBeanInfo$Provider(false).constructor.$class
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_com_dukescript_api_javafx_beans_FXBeanInfo;
    var refs_cz_xelfi_demo_react4jdemo_SquareBase$$Lambda$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_SquareBase_info'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_SquareBase = cz_xelfi_demo_react4jdemo_SquareBase;


function cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_SquareBase(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._onClick = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_onClick'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_onClick']; };
  m = c._value = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_value'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_value']; };
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_SquareBase || (refs_cz_xelfi_demo_react4jdemo_SquareBase = cz_xelfi_demo_react4jdemo_SquareBase(false))).constructor.cons__V.call(lcA0);
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_value'] = lcA1;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_onClick'] = lcA2;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.onClick__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
(refs_cz_xelfi_demo_react4jdemo_JsUtils || (refs_cz_xelfi_demo_react4jdemo_JsUtils = cz_xelfi_demo_react4jdemo_JsUtils(false))).debugger__V();
if ((lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_onClick']) === null) { gt = 19; break IF; }
invoker.run__V(lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_onClick']);
    }
    X_19: for (;;) { IF: if (gt <= 19) {
return;

    }
}}
};
    m.access = 16;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquarePropsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquarePropsfillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquarePropsfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$Board$SquareProps';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_SquareBase;
    var refs_cz_xelfi_demo_react4jdemo_JsUtils;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_onClick'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps_value'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps = cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps;


function cz_xelfi_demo_react4jdemo_LikeState$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeState$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeState$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeState$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeState$1fillInstOf });
    cz_xelfi_demo_react4jdemo_LikeState$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeState$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeState$1 = cz_xelfi_demo_react4jdemo_LikeState$1;


function cz_xelfi_demo_react4jdemo_JsUtils() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_JsUtils;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$$fn$$alert_1'] = null;
  m = c._$$fn$$alert_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$alert_1'] = v; return CLS['fld_$$fn$$alert_1']; };
  CLS['fld_$$fn$$debugger_2'] = null;
  m = c._$$fn$$debugger_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$debugger_2'] = v; return CLS['fld_$$fn$$debugger_2']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.alert__VLjava_lang_String_2 = function() {
  var r = (function(msg) {

  msg = vm.java_lang_Class(false).toJS(msg);alert(msg);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 9;
    m.cls = CLS;
    m = c.debugger__V = function() {
  var r = (function() {
debugger;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_JsUtilsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_JsUtils', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_JsUtilsfillInstOf });
    cz_xelfi_demo_react4jdemo_JsUtilsfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/JsUtils';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_JsUtils = cz_xelfi_demo_react4jdemo_JsUtils;


function cz_xelfi_demo_react4jdemo_TicTacToe1Square$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1Square$1;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React4J$Callback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$_callback1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_val$_callback1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_val$_callback1']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_this$0'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_this$0']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe1Square_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_this$0'] = lcA1;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_val$_callback1'] = lcA2;
(refs_net_java_html_react_React4J$Callback || (refs_net_java_html_react_React4J$Callback = vm.net_java_html_react_React4J$Callback(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.callback__V_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
invoker.run__V(lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_val$_callback1']);
return;

};
c['callback__V_3Ljava_lang_Object_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1Square$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1Square$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1Square$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1Square$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React4J$Callback;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_val$_callback1'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1Square$1 = cz_xelfi_demo_react4jdemo_TicTacToe1Square$1;


function cz_xelfi_demo_react4jdemo_BoardBase3() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_BoardBase3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._info = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_BoardBase3_info'] = v; return this['fld_cz_xelfi_demo_react4jdemo_BoardBase3_info']; };
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

if ((lcA0['fld_cz_xelfi_demo_react4jdemo_BoardBase3_info']) !== null) { gt = 50; break IF; }
if (lcA0 !== null && !lcA0['$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState']) vm.java_lang_Class(false).castEx(lcA0, 'cz.xelfi.demo.react4jdemo.TicTacToe3$BoardState');
var lcA1 = lcA0;
var stA0 = (refs_com_dukescript_api_javafx_beans_FXBeanInfo || (refs_com_dukescript_api_javafx_beans_FXBeanInfo = vm.com_dukescript_api_javafx_beans_FXBeanInfo(false)))['newBuilder__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_Object_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.constant__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Object_2(lcA2,"squares", lcA1['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_squares']);
var stA0 = lcA2;var stA1 = "xIsNext";var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA1['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_xIsNext']);
var stA0 = invoker.constant__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = invoker.build__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2(lcA2);
stA0['fld_cz_xelfi_demo_react4jdemo_BoardBase3_info'] = stA1;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

return lcA0['fld_cz_xelfi_demo_react4jdemo_BoardBase3_info'];

    }
}}
};
c['getFXBeanInfo__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_BoardBase3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_BoardBase3', { value : true });
      vm.com_dukescript_api_javafx_beans_FXBeanInfo$Provider(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_BoardBase3fillInstOf });
    cz_xelfi_demo_react4jdemo_BoardBase3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/BoardBase3';
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
    this['fld_cz_xelfi_demo_react4jdemo_BoardBase3_info'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_BoardBase3 = cz_xelfi_demo_react4jdemo_BoardBase3;


function cz_xelfi_demo_react4jdemo_OnPageLoad() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_OnPageLoad;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.main__V_3Ljava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var lcA1 = (lcA0[0] || Array.at(lcA0, 0));
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 7; break IF; }}
throw e;
}{ gt = 11; break IF; }
    }
    X_7: for (;;) { IF: if (gt <= 7) {
var lcA2 = stA0;
var lcA1 = "";
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var lcA3 = lcA1;
var lcI4 = -1;
var stI0 = invoker.hashCode__I(lcA3);
switch (stI0) {
  case 3570877: { gt = 79; break IF; }
  case 3570878: { gt = 94; break IF; }
  case 3570879: { gt = 109; break IF; }
  case 2023014453: { gt = 64; break IF; }
  default: { gt = 121; break IF; }
}
    }
    X_64: for (;;) { IF: if (gt <= 64) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA3,"like+model");
if ((stI0) == 0) { gt = 121; break IF; }
var lcI4 = 0;
{ gt = 121; break IF; }
    }
    X_79: for (;;) { IF: if (gt <= 79) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA3,"ttt1");
if ((stI0) == 0) { gt = 121; break IF; }
var lcI4 = 1;
{ gt = 121; break IF; }
    }
    X_94: for (;;) { IF: if (gt <= 94) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA3,"ttt2");
if ((stI0) == 0) { gt = 121; break IF; }
var lcI4 = 2;
{ gt = 121; break IF; }
    }
    X_109: for (;;) { IF: if (gt <= 109) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA3,"ttt3");
if ((stI0) == 0) { gt = 121; break IF; }
var lcI4 = 3;
    }
    X_121: for (;;) { IF: if (gt <= 121) {

switch (lcI4) {
  case 0:{ gt = 152; break IF; }
  case 1:{ gt = 161; break IF; }
  case 2:{ gt = 170; break IF; }
  case 3:{ gt = 179; break IF; }
  default: { gt = 188; break IF; }
}
    }
    X_152: for (;;) { IF: if (gt <= 152) {
(refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX || (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX(false))).onPageLoad__V();
var lcA2 = "LikeButtonNoJavaFX.java";
{ gt = 194; break IF; }
    }
    X_161: for (;;) { IF: if (gt <= 161) {
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1 = cz_xelfi_demo_react4jdemo_TicTacToe1(false))).onPageLoad__V();
var lcA2 = "TicTacToe1.java";
{ gt = 194; break IF; }
    }
    X_170: for (;;) { IF: if (gt <= 170) {
(refs_cz_xelfi_demo_react4jdemo_TicTacToe2 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2 = cz_xelfi_demo_react4jdemo_TicTacToe2(false))).onPageLoad__V();
var lcA2 = "TicTacToe2.java";
{ gt = 194; break IF; }
    }
    X_179: for (;;) { IF: if (gt <= 179) {
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3 = cz_xelfi_demo_react4jdemo_TicTacToe3(false))).onPageLoad__V();
var lcA2 = "TicTacToe3.java";
{ gt = 194; break IF; }
    }
    X_188: for (;;) { IF: if (gt <= 188) {
(refs_cz_xelfi_demo_react4jdemo_LikeButton || (refs_cz_xelfi_demo_react4jdemo_LikeButton = cz_xelfi_demo_react4jdemo_LikeButton(false))).onPageLoad__V();
var lcA2 = "LikeButton.java";
    }
    X_194: for (;;) { IF: if (gt <= 194) {

(refs_cz_xelfi_demo_react4jdemo_CodeComponent || (refs_cz_xelfi_demo_react4jdemo_CodeComponent = cz_xelfi_demo_react4jdemo_CodeComponent(false))).loadCode__VLjava_lang_String_2(lcA2);
return;

    }
}}}}}}}}}}}}}}
};
c['main__V_3Ljava_lang_String_2'] = m;

    m.access = 137;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_OnPageLoadfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_OnPageLoad', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_OnPageLoadfillInstOf });
    cz_xelfi_demo_react4jdemo_OnPageLoadfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/OnPageLoad';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3;
    var refs_cz_xelfi_demo_react4jdemo_LikeButton;
    var refs_cz_xelfi_demo_react4jdemo_CodeComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_OnPageLoad = registerClass(exports,'cz_xelfi_demo_react4jdemo_OnPageLoad',cz_xelfi_demo_react4jdemo_OnPageLoad);

vm.java_lang_Exception = link('java/lang/Exception', function(f) { vm.java_lang_Exception =  f; });

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
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square_className'] = "square";
invoker.setState__VLjava_lang_Object_2(lcA0,null);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderSquare__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0;var stA1 = invoker.state__Ljava_lang_Object_2(lcA0);
if ((stA1) !== null) { gt = 12; break IF; }
var stA1 = null;{ gt = 22; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stA1 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA1 !== null && !stA1['$instOf_java_lang_Character']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Character');
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var stA2 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1(false))).lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_TicTacToe2$Square_2(lcA0);
var stA0 = stA0.renderSquare__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2(stA1, stA2);
return stA0;

    }
}}}
};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.lambda$render$0__VLcz_xelfi_demo_react4jdemo_TicTacToe2$Square_2 = function(lcA0) {
var stA0 = lcA0;var stA1 = (refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false)))['valueOf__Ljava_lang_Character_2C']((88));
invoker.setState__VLjava_lang_Object_2(stA0,stA1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2$SquarefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2$Square', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2$SquarefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2$SquarefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2$Square';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1;
    var refs_java_lang_Character;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square_className'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2$Square = cz_xelfi_demo_react4jdemo_TicTacToe2$Square;


function cz_xelfi_demo_react4jdemo_TicTacToe3$Game() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$Game;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = "div";var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA1, 0, "className");
Array.at(stA1, 1, "game");
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 2);
var stA3 = stA2;var stI4 = 0;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "game-board");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe3 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3 = cz_xelfi_demo_react4jdemo_TicTacToe3(false))).access$100__Ljava_lang_Object_2();
var stA11 = null;var stA12 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, stA12);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 1;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "game-info");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 2);
var stA8 = stA7;var stI9 = 0;var stA10 = "div";var stA11 = null;var stA12 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, stA12);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = "ol";var stA11 = null;var stA12 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, stA12);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$GamefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$Game', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$GamefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$GamefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$Game';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
    var refs_net_java_html_react_React;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$Game = cz_xelfi_demo_react4jdemo_TicTacToe3$Game;


function cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_ReactLikeButton;
(refs_cz_xelfi_demo_react4jdemo_ReactLikeButton || (refs_cz_xelfi_demo_react4jdemo_ReactLikeButton = cz_xelfi_demo_react4jdemo_ReactLikeButton(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2fillInstOf });
    cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeButton$$Lambda$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_ReactLikeButton;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2 = cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2;


function cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_CodeComponent;
(refs_cz_xelfi_demo_react4jdemo_CodeComponent || (refs_cz_xelfi_demo_react4jdemo_CodeComponent = cz_xelfi_demo_react4jdemo_CodeComponent(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(stA0, lcA1);
if (stA0 !== null && !stA0['$instOf_net_java_html_react_React$Component']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.react.React$Component');
return stA0;

};
c['create__Lnet_java_html_react_React$Component_2Lnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1', { value : true });
      vm.net_java_html_react_React$ComponentFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/CodeComponent$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.net_java_html_react_React$ComponentFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_CodeComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1 = cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1;


function cz_xelfi_demo_react4jdemo_TicTacToe2() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_cSquare'] = null;
  m = c._cSquare = function (v) {  if (arguments.length == 1) CLS['fld_cSquare'] = v; return CLS['fld_cSquare']; };
  CLS['fld_cBoard'] = null;
  m = c._cBoard = function (v) {  if (arguments.length == 1) CLS['fld_cBoard'] = v; return CLS['fld_cBoard']; };
  CLS['fld_cGame'] = null;
  m = c._cGame = function (v) {  if (arguments.length == 1) CLS['fld_cGame'] = v; return CLS['fld_cGame']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.onPageLoad__V = function() {
var stA0 = "Square";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
c._cSquare(stA0);
var stA0 = "Board";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2 = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
c._cBoard(stA0);
var stA0 = "Game";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3 = cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
c._cGame(stA0);
(refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['render__VLjava_lang_String_2Ljava_lang_String_2']("Game", "root");
return;

};
c['onPageLoad__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.access$000__Ljava_lang_Object_2 = function() {
return c._cSquare();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__Ljava_lang_Object_2 = function() {
return c._cBoard();

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$1;
    var refs_net_java_html_react_React;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$2;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2$$Lambda$3;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2 = registerClass(exports,'cz_xelfi_demo_react4jdemo_TicTacToe2',cz_xelfi_demo_react4jdemo_TicTacToe2);


function cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_cz_xelfi_demo_react4jdemo_ButtonState || (refs_cz_xelfi_demo_react4jdemo_ButtonState = cz_xelfi_demo_react4jdemo_ButtonState(false))).constructor.$class, (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl || (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl(false))).constructor.$class, 0, 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"onClick", 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLcz_xelfi_demo_react4jdemo_ButtonState_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_ButtonState_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLcz_xelfi_demo_react4jdemo_ButtonState_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 28; break IF; }
  case 1: { gt = 36; break IF; }
  default: { gt = 58; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = (refs_cz_xelfi_demo_react4jdemo_ButtonState || (refs_cz_xelfi_demo_react4jdemo_ButtonState = cz_xelfi_demo_react4jdemo_ButtonState(false))).access$100__Lcz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl_2Lcz_xelfi_demo_react4jdemo_ButtonState_2(lcA1);
stA0.onClick__V();
return;
    }
    X_36: for (;;) { IF: if (gt <= 36) {

if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA3, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA3, '');
var lcA5 = lcA3;
var stA0 = (refs_cz_xelfi_demo_react4jdemo_ButtonState || (refs_cz_xelfi_demo_react4jdemo_ButtonState = cz_xelfi_demo_react4jdemo_ButtonState(false))).access$100__Lcz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl_2Lcz_xelfi_demo_react4jdemo_ButtonState_2(lcA1);
if ((lcA5[0] || Array.at(lcA5, 0)) !== null && !(lcA5[0] || Array.at(lcA5, 0))['$instOf_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX']) vm.java_lang_Class(false).castEx((lcA5[0] || Array.at(lcA5, 0)), 'cz.xelfi.demo.react4jdemo.LikeButtonNoJavaFX');
stA0.connect__VLcz_xelfi_demo_react4jdemo_ButtonState_2Lcz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX_2(lcA1, (lcA5[0] || Array.at(lcA5, 0)));
return;
    }
    X_58: for (;;) { IF: if (gt <= 58) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.ButtonState');
var stA0 = (refs_cz_xelfi_demo_react4jdemo_ButtonState || (refs_cz_xelfi_demo_react4jdemo_ButtonState = cz_xelfi_demo_react4jdemo_ButtonState(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lcz_xelfi_demo_react4jdemo_ButtonState_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLcz_xelfi_demo_react4jdemo_ButtonState_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLcz_xelfi_demo_react4jdemo_ButtonState_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"index: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," type: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.read__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_ButtonState;
(refs_cz_xelfi_demo_react4jdemo_ButtonState || (refs_cz_xelfi_demo_react4jdemo_ButtonState = cz_xelfi_demo_react4jdemo_ButtonState(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_ButtonState$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_cz_xelfi_demo_react4jdemo_ButtonState || (refs_cz_xelfi_demo_react4jdemo_ButtonState = cz_xelfi_demo_react4jdemo_ButtonState(false))).access$400__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.ButtonState');
lcA0.onMessage__VLcz_xelfi_demo_react4jdemo_ButtonState_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.ButtonState');
lcA0.onChange__VLcz_xelfi_demo_react4jdemo_ButtonState_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.ButtonState');
var stA0 = lcA0.cloneTo__Lcz_xelfi_demo_react4jdemo_ButtonState_2Lcz_xelfi_demo_react4jdemo_ButtonState_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.ButtonState');
lcA0.call__VLcz_xelfi_demo_react4jdemo_ButtonState_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.ButtonState');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_ButtonState_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_ButtonState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.ButtonState');
lcA0.setValue__VLcz_xelfi_demo_react4jdemo_ButtonState_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_ButtonState$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaTypefillInstOf });
    cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/ButtonState$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_ButtonState;
    var refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX$ButtonStateCntrl;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_UnsupportedOperationException;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType = cz_xelfi_demo_react4jdemo_ButtonState$Html4JavaType;


function cz_xelfi_demo_react4jdemo_TicTacToe1Board() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1Board;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_TicTacToe1$Board(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Board || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Board = cz_xelfi_demo_react4jdemo_TicTacToe1$Board(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderBoard__Lnet_java_html_react_React$Element_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = "div";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, (8));
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 1;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "status");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](lcA1);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 2;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 3;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, (7));
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "0");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 3;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "1");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 4;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 5;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "2");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = (6);var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 4;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 5;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, (7));
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "3");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 3;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "4");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 4;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 5;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "5");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = (6);var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = (6);var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = (7);var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, (7));
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "6");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 3;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "7");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 4;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 5;var stA10 = "Square";var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA11, 0, "value");
Array.at(stA11, 1, "8");
var stA11 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA11);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = (6);var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
    m.access = 20;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1BoardfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1Board', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1BoardfillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1BoardfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1Board';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Board;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1Board = cz_xelfi_demo_react4jdemo_TicTacToe1Board;


function cz_xelfi_demo_react4jdemo_TicTacToe3$Board() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$Board;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_winningLines'] = null;
  m = c._winningLines = function (v) {  if (arguments.length == 1) CLS['fld_winningLines'] = v; return CLS['fld_winningLines']; };
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
var stA0 = (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['nCopies__Ljava_util_List_2ILjava_lang_Object_2']((9), null);
var lcA2 = stA0;
var stA0 = lcA0;var stA1 = new cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState = cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState(false))).constructor.cons__VLjava_util_List_2Z.call(stA1, lcA2, 1);
invoker.setState__VLjava_lang_Object_2(stA0,stA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.handleClick__VI = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_ArrayList;
var stA1 = stA0;var stA2 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA2 !== null && !stA2['$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState']) vm.java_lang_Class(false).castEx(stA2, 'cz.xelfi.demo.react4jdemo.TicTacToe3$BoardState');
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__VLjava_util_Collection_2'].call(stA1, stA2['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_squares']);
var lcA2 = stA0;
var stA0 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState']) vm.java_lang_Class(false).castEx(stA0, 'cz.xelfi.demo.react4jdemo.TicTacToe3$BoardState');
if ((stA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_xIsNext']) == 0) { gt = 47; break IF; }
var stA0 = lcA2;var stI1 = lcI1;var stA2 = (refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false)))['valueOf__Ljava_lang_Character_2C']((88));
var stA0 = invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2(stA0,stI1, stA2);
{ gt = 60; break IF; }
    }
    X_47: for (;;) { IF: if (gt <= 47) {

var stA0 = lcA2;var stI1 = lcI1;var stA2 = (refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false)))['valueOf__Ljava_lang_Character_2C']((79));
var stA0 = invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2(stA0,stI1, stA2);
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = lcA0;var stA1 = new cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState;
var stA2 = stA1;var stA3 = lcA2;var stA4 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA4 !== null && !stA4['$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState']) vm.java_lang_Class(false).castEx(stA4, 'cz.xelfi.demo.react4jdemo.TicTacToe3$BoardState');
if ((stA4['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_xIsNext']) != 0) { gt = 83; break IF; }
var stI4 = 1;{ gt = 84; break IF; }
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var stI4 = 0;    }
    X_84: for (;;) { IF: if (gt <= 84) {
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState = cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState(false))).constructor.cons__VLjava_util_List_2Z.call(stA2, stA3, stI4);
invoker.setState__VLjava_lang_Object_2(stA0,stA1);
return;

    }
}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.renderSquare__Lnet_java_html_react_React$Element_2ZI = function(lcI1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState']) vm.java_lang_Class(false).castEx(stA0, 'cz.xelfi.demo.react4jdemo.TicTacToe3$BoardState');
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_squares'],lcI2);
if (stA0 !== null && !stA0['$instOf_java_lang_Character']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.Character');
var lcA3 = stA0;
if ((lcI1) != 0) { gt = 28; break IF; }
if ((lcA3) === null) { gt = 32; break IF; }
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = null;{ gt = 37; break IF; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stA0 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1(false))).lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_TicTacToe3$Board_2I(lcA0, lcI2);
    }
    X_37: for (;;) { IF: if (gt <= 37) {
var lcA4 = stA0;
var stA0 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe3 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3 = cz_xelfi_demo_react4jdemo_TicTacToe3(false))).access$000__Ljava_lang_Object_2();
var stA1 = new cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps;
var stA2 = stA1;if ((lcA3) !== null) { gt = 54; break IF; }
var stA3 = null;{ gt = 73; break IF; }
    }
    X_54: for (;;) { IF: if (gt <= 54) {
var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA3,lcA3);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
    }
    X_73: for (;;) { IF: if (gt <= 73) {

(refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps = cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_Runnable_2.call(stA2, stA3, lcA4);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

    }
}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.calculateWinner__Ljava_lang_Character_2Ljava_util_List_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI1 = 0;
    }
    X_2: for (;;) { IF: if (gt <= 2) {

if ((lcI1) >= ((c._winningLines()).length)) { gt = 88; break IF; }
var lcA2 = (c._winningLines()[lcI1] || Array.at(c._winningLines(), lcI1));
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA0,(lcA2[0] || Array.at(lcA2, 0)));
if (stA0 !== null && !stA0['$instOf_java_lang_Character']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.Character');
var lcA3 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA0,(lcA2[1] || Array.at(lcA2, 1)));
if (stA0 !== null && !stA0['$instOf_java_lang_Character']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.Character');
var lcA4 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA0,(lcA2[2] || Array.at(lcA2, 2)));
if (stA0 !== null && !stA0['$instOf_java_lang_Character']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.Character');
var lcA5 = stA0;
if ((lcA3) === null) { gt = 82; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA3,lcA4);
if ((stI0) == 0) { gt = 82; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA4,lcA5);
if ((stI0) == 0) { gt = 82; break IF; }
return lcA3;
    }
    X_82: for (;;) { IF: if (gt <= 82) {
lcI1++;
{ gt = 0; continue X_2; }
    }
    X_88: for (;;) { IF: if (gt <= 88) {

return null;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState']) vm.java_lang_Class(false).castEx(stA0, 'cz.xelfi.demo.react4jdemo.TicTacToe3$BoardState');
var stA0 = c.calculateWinner__Ljava_lang_Character_2Ljava_util_List_2(stA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_squares']);
var lcA1 = stA0;
if ((lcA1) === null) { gt = 22; break IF; }
var stI0 = 1;{ gt = 23; break IF; }
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var stI0 = 0;    }
    X_23: for (;;) { IF: if (gt <= 23) {
var lcI2 = stI0;
if ((lcA1) !== null) { gt = 73; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Next player: ");
var stA1 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA1 !== null && !stA1['$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState']) vm.java_lang_Class(false).castEx(stA1, 'cz.xelfi.demo.react4jdemo.TicTacToe3$BoardState');
if ((stA1['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState_xIsNext']) == 0) { gt = 58; break IF; }
var stI1 = (88);{ gt = 60; break IF; }
    }
    X_58: for (;;) { IF: if (gt <= 58) {

var stI1 = (79);    }
    X_60: for (;;) { IF: if (gt <= 60) {
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,stI1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA0);
var lcA3 = stA0;
{ gt = 96; break IF; }
    }
    X_73: for (;;) { IF: if (gt <= 73) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Winner ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,lcA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA0);
var lcA3 = stA0;
    }
    X_96: for (;;) { IF: if (gt <= 96) {

var stA0 = "div";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 4);
var stA3 = stA2;var stI4 = 0;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "status");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
Array.at(stA7, 0, lcA3);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 1;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA8 = stA7;var stI9 = 0;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, 0);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, 1);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, 2);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 2;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA8 = stA7;var stI9 = 0;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, 3);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, 4);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, 5);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 3;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "board-row");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA8 = stA7;var stI9 = 0;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, (6));
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 1;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, (7));
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = c.renderSquare__Lnet_java_html_react_React$Element_2ZI.call(lcA0, lcI2, (8));
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

    }
}}}}}}}
};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.lambda$renderSquare$0__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Board_2I = function(lcA0, lcI1) {
c.handleClick__VI.call(lcA0, lcI1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[[I', null, (8));
var stA1 = stA0;var stI2 = 0;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 3);
Array.at(stA3, 0, 0);
Array.at(stA3, 1, 1);
Array.at(stA3, 2, 2);
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 1;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 3);
Array.at(stA3, 0, 3);
Array.at(stA3, 1, 4);
Array.at(stA3, 2, 5);
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 2;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 3);
Array.at(stA3, 0, (6));
Array.at(stA3, 1, (7));
Array.at(stA3, 2, (8));
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 3;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 3);
Array.at(stA3, 0, 0);
Array.at(stA3, 1, 3);
Array.at(stA3, 2, (6));
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 4;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 3);
Array.at(stA3, 0, 1);
Array.at(stA3, 1, 4);
Array.at(stA3, 2, (7));
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 5;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 3);
Array.at(stA3, 0, 2);
Array.at(stA3, 1, 5);
Array.at(stA3, 2, (8));
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = (6);var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 3);
Array.at(stA3, 0, 0);
Array.at(stA3, 1, 4);
Array.at(stA3, 2, (8));
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = (7);var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 3);
Array.at(stA3, 0, 2);
Array.at(stA3, 1, 4);
Array.at(stA3, 2, (6));
Array.at(stA1, stI2, stA3);
c._winningLines(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$BoardfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$Board', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$BoardfillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$BoardfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$Board';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_net_java_html_react_React$Component;
    var refs_java_util_Collections;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$BoardState;
    var refs_java_util_ArrayList;
    var refs_java_lang_Character;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3;
    var refs_java_lang_StringBuilder;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$SquareProps;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$Board = cz_xelfi_demo_react4jdemo_TicTacToe3$Board;


function cz_xelfi_demo_react4jdemo_ReactLikeButton$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_ReactLikeButton$1;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React4J$Callback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$_callback1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_val$_callback1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_val$_callback1']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_this$0'] = v; return this['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_this$0']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_ReactLikeButton_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_this$0'] = lcA1;
lcA0['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_val$_callback1'] = lcA2;
(refs_net_java_html_react_React4J$Callback || (refs_net_java_html_react_React4J$Callback = vm.net_java_html_react_React4J$Callback(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.callback__V_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
invoker.run__V(lcA0['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_val$_callback1']);
return;

};
c['callback__V_3Ljava_lang_Object_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_ReactLikeButton$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_ReactLikeButton$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_ReactLikeButton$1fillInstOf });
    cz_xelfi_demo_react4jdemo_ReactLikeButton$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/ReactLikeButton$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React4J$Callback;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_val$_callback1'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_ReactLikeButton$1_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_ReactLikeButton$1 = cz_xelfi_demo_react4jdemo_ReactLikeButton$1;


function cz_xelfi_demo_react4jdemo_LikeButton() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeButton;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
var stA0 = lcA0;var stA1 = new cz_xelfi_demo_react4jdemo_LikeButton$LikeState;
(refs_cz_xelfi_demo_react4jdemo_LikeButton$LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeButton$LikeState = cz_xelfi_demo_react4jdemo_LikeButton$LikeState(false))).constructor.cons__VZ.call(stA1, 0);
invoker.setState__VLjava_lang_Object_2(stA0,stA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.doLike__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = new cz_xelfi_demo_react4jdemo_LikeButton$LikeState;
(refs_cz_xelfi_demo_react4jdemo_LikeButton$LikeState || (refs_cz_xelfi_demo_react4jdemo_LikeButton$LikeState = cz_xelfi_demo_react4jdemo_LikeButton$LikeState(false))).constructor.cons__VZ.call(stA1, 1);
invoker.setState__VLjava_lang_Object_2(stA0,stA1);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.renderReply__Lnet_java_html_react_React$Element_2 = function() {
};
c['renderReply__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.renderLikeButton__Lnet_java_html_react_React$Element_2Ljava_lang_Runnable_2 = function(lcA1) {
};
c['renderLikeButton__Lnet_java_html_react_React$Element_2Ljava_lang_Runnable_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_cz_xelfi_demo_react4jdemo_LikeButton$LikeState']) vm.java_lang_Class(false).castEx(stA0, 'cz.xelfi.demo.react4jdemo.LikeButton$LikeState');
if ((stA0['fld_cz_xelfi_demo_react4jdemo_LikeButton$LikeState_liked']) == 0) { gt = 18; break IF; }
var stA0 = invoker.renderReply__Lnet_java_html_react_React$Element_2(lcA0);
return stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

var stA0 = lcA0;var stA1 = (refs_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1 = cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1(false))).lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_LikeButton_2(lcA0);
var stA0 = invoker.renderLikeButton__Lnet_java_html_react_React$Element_2Ljava_lang_Runnable_2(stA0,stA1);
return stA0;

    }
}}
};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.onPageLoad__V = function() {
var stA0 = "LikeButton";var stA1 = (refs_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2 || (refs_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2 = cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
(refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['render__VLjava_lang_String_2Ljava_lang_String_2']("LikeButton", "like_button_container");
return;

};
c['onPageLoad__V'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeButtonfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeButton', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeButtonfillInstOf });
    cz_xelfi_demo_react4jdemo_LikeButtonfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeButton';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
    var refs_cz_xelfi_demo_react4jdemo_LikeButton$LikeState;
    var refs_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$1;
    var refs_cz_xelfi_demo_react4jdemo_LikeButton$$Lambda$2;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeButton = registerClass(exports,'cz_xelfi_demo_react4jdemo_LikeButton',cz_xelfi_demo_react4jdemo_LikeButton);


function cz_xelfi_demo_react4jdemo_LoadingUrl$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LoadingUrl$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LoadingUrl$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LoadingUrl$1fillInstOf });
    cz_xelfi_demo_react4jdemo_LoadingUrl$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LoadingUrl$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LoadingUrl$1 = cz_xelfi_demo_react4jdemo_LoadingUrl$1;


function cz_xelfi_demo_react4jdemo_TicTacToe2Square() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2Square;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_TicTacToe2$Square(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square = cz_xelfi_demo_react4jdemo_TicTacToe2$Square(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderSquare__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe2Square$1;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1 = cz_xelfi_demo_react4jdemo_TicTacToe2Square$1(false))).constructor.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe2Square_2Ljava_lang_Runnable_2.call(stA0, lcA0, lcA2);
var stA0 = (refs_net_java_html_react_React4J || (refs_net_java_html_react_React4J = vm.net_java_html_react_React4J(false)))['wrapCallback__Ljava_lang_Object_2Lnet_java_html_react_React4J$Callback_2'](stA0);
var lcA3 = stA0;
var stA0 = "button";var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 4);
Array.at(stA1, 0, "className");
Array.at(stA1, 1, "square");
Array.at(stA1, 2, "onClick");
Array.at(stA1, 3, lcA3);
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](lcA1);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
    m.access = 20;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2SquarefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2Square', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2SquarefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2SquarefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2Square';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2Square$1;
    var refs_net_java_html_react_React4J;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2Square = cz_xelfi_demo_react4jdemo_TicTacToe2Square;


function cz_xelfi_demo_react4jdemo_CodeComponent() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_CodeComponent;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_CLAZZ'] = null;
  m = c._CLAZZ = function (v) {  if (arguments.length == 1) CLS['fld_CLAZZ'] = v; return CLS['fld_CLAZZ']; };
  CLS['fld_WORDS'] = null;
  m = c._WORDS = function (v) {  if (arguments.length == 1) CLS['fld_WORDS'] = v; return CLS['fld_WORDS']; };
  CLS['fld_$$fn$$homePageUrl_1'] = null;
  m = c._$$fn$$homePageUrl_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$homePageUrl_1'] = v; return CLS['fld_$$fn$$homePageUrl_1']; };
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
var stA0 = invoker.as__Ljava_lang_Object_2Ljava_lang_Class_2(lcA1,(refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(stA0, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA2.getUrl__Ljava_lang_String_2();
stA0.loadCode__VLjava_lang_String_2Lcz_xelfi_demo_react4jdemo_CodeComponent_2(stA1, lcA0);
invoker.setState__VLjava_lang_Object_2(lcA0,lcA2);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.loadCode__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2Lcz_xelfi_demo_react4jdemo_CodeComponent_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA1,"/*");
if ((stI0) == 0) { gt = 29; break IF; }
var stI0 = invoker.indexOf__ILjava_lang_String_2(lcA1,"*/");
var lcI3 = stI0;
if ((lcI3) == (-1)) { gt = 29; break IF; }
var stA0 = invoker.substring__Ljava_lang_String_2I(lcA1,(((lcI3) + (2)) | 0));
var lcA1 = stA0;
    }
    X_29: for (;;) { IF: if (gt <= 29) {

var stA0 = lcA2;var stA1 = lcA0.clone__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2();
var stA1 = stA1.withCode__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2(lcA1);
invoker.setState__VLjava_lang_Object_2(stA0,stA1);
return;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.loadCodeFailed__VLcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_Throwable_2Lcz_xelfi_demo_react4jdemo_CodeComponent_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getUrl__Ljava_lang_String_2();
var stI0 = invoker.startsWith__ZLjava_lang_String_2(stA0,"https://raw.githubusercontent.com/jtulach/netbeans-html4j/react4jdemo/src/main/java/cz/xelfi/demo/react4jdemo/");
if ((stI0) == 0) { gt = 23; break IF; }
var stA0 = lcA0;var stA1 = invoker.getMessage__Ljava_lang_String_2(lcA1);
stA0.setUrl__VLjava_lang_String_2(stA1);
{ gt = 58; break IF; }
    }
    X_23: for (;;) { IF: if (gt <= 23) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"https://raw.githubusercontent.com/jtulach/netbeans-html4j/react4jdemo/src/main/java/cz/xelfi/demo/react4jdemo/");
var stA2 = lcA0.getName__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setUrl__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = lcA0.getUrl__Ljava_lang_String_2();
stA0.loadCode__VLjava_lang_String_2Lcz_xelfi_demo_react4jdemo_CodeComponent_2(stA1, lcA2);
    }
    X_58: for (;;) { IF: if (gt <= 58) {

invoker.setState__VLjava_lang_Object_2(lcA2,lcA0);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(stA0, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var stA0 = stA0.getCode__Ljava_lang_String_2();
if ((stA0) !== null) { gt = 61; break IF; }
var stA0 = "div";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA5);
var stA5 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA5,"Loading ");
var stA6 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA6 !== null && !stA6['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(stA6, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var stA6 = stA6.getUrl__Ljava_lang_String_2();
var stA5 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA5,stA6);
var stA5 = invoker.toString__Ljava_lang_String_2(stA5);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA5);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
var lcA1 = stA0;
{ gt = 81; break IF; }
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stA0 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(stA0, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var stA0 = stA0.getCode__Ljava_lang_String_2();
var stA1 = (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['emptyMap__Ljava_util_Map_2']();
var stA2 = (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['emptySet__Ljava_util_Set_2']();
var stA0 = c.boldJavaKeywords__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_util_Map_2Ljava_util_Set_2(stA0, stA1, stA2);
var lcA1 = stA0;
    }
    X_81: for (;;) { IF: if (gt <= 81) {

var stA0 = "div";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 2);
var stA3 = stA2;var stI4 = 0;var stA5 = "table";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "width");
Array.at(stA6, 1, "100%");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA8 = stA7;var stI9 = 0;var stA10 = "tr";var stA11 = null;var stA12 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA13 = stA12;var stI14 = 0;var stA15 = "td";var stA16 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA16, 0, "align");
Array.at(stA16, 1, "center");
var stA16 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA16);
var stA17 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA18 = stA17;var stI19 = 0;var stA20 = "a";var stA21 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 4);
Array.at(stA21, 0, "target");
Array.at(stA21, 1, "_blank");
Array.at(stA21, 2, "href");
var stA22 = stA21;var stI23 = 3;var stA24 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA24);
var stA24 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA24,"https://github.com/jtulach/netbeans-html4j/blob/react4jdemo/src/main/java/cz/xelfi/demo/react4jdemo/");
var stA25 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA25 !== null && !stA25['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(stA25, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var stA25 = stA25.getName__Ljava_lang_String_2();
var stA24 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA24,stA25);
var stA24 = invoker.toString__Ljava_lang_String_2(stA24);
Array.at(stA22, stI23, stA24);
var stA21 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA21);
var stA22 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA23 = stA22;var stI24 = 0;var stA25 = invoker.state__Ljava_lang_Object_2(lcA0);
if (stA25 !== null && !stA25['$instOf_cz_xelfi_demo_react4jdemo_LoadingUrl']) vm.java_lang_Class(false).castEx(stA25, 'cz.xelfi.demo.react4jdemo.LoadingUrl');
var stA25 = stA25.getName__Ljava_lang_String_2();
var stA25 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA25);
Array.at(stA23, stI24, stA25);
var stA20 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA20, stA21, stA22);
Array.at(stA18, stI19, stA20);
var stA15 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA15, stA16, stA17);
Array.at(stA13, stI14, stA15);
var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA10, stA11, stA12);
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
Array.at(stA2, 1, lcA1);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

    }
}}}
};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.homePageUrl__Ljava_lang_String_2 = function() {
  var r = (function() {
return window.location.href;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.loadCode__VLjava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {var stA0 = new vm.java_net_URL;
var stA1 = stA0;var stA2 = new vm.java_net_URL;
var stA3 = stA2;var stA4 = c.homePageUrl__Ljava_lang_String_2();
(refs_java_net_URL || (refs_java_net_URL = vm.java_net_URL(false))).constructor['cons__VLjava_lang_String_2'].call(stA3, stA4);
(refs_java_net_URL || (refs_java_net_URL = vm.java_net_URL(false))).constructor['cons__VLjava_net_URL_2Ljava_lang_String_2'].call(stA1, stA2, lcA0);
var lcA1 = stA0;
var stA0 = c._CLAZZ();var stA1 = new cz_xelfi_demo_react4jdemo_LoadingUrl;
(refs_cz_xelfi_demo_react4jdemo_LoadingUrl || (refs_cz_xelfi_demo_react4jdemo_LoadingUrl = cz_xelfi_demo_react4jdemo_LoadingUrl(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.toExternalForm__Ljava_lang_String_2(lcA1);
var stA1 = stA1.withUrl__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2(stA2);
var stA1 = stA1.withName__Lcz_xelfi_demo_react4jdemo_LoadingUrl_2Ljava_lang_String_2(lcA0);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
var lcA2 = stA0;
(refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['render__VLnet_java_html_react_React$Element_2Ljava_lang_String_2'](lcA2, "codecontainer");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_net_MalformedURLException']) {var stA0 = e;{ gt = 57; break IF; }}
throw e;
}{ gt = 62; break IF; }
    }
    X_57: for (;;) { IF: if (gt <= 57) {
var lcA1 = stA0;
invoker.printStackTrace__V(lcA1);
    }
    X_62: for (;;) { IF: if (gt <= 62) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.boldJavaKeywords__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_util_Map_2Ljava_util_Set_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var lcI4 = 0;
var stA0 = invoker.matcher__Ljava_util_regex_Matcher_2Ljava_lang_CharSequence_2(c._WORDS(),lcA0);
var lcA5 = stA0;
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stI0 = invoker.find__Z(lcA5);
if ((stI0) == 0) { gt = 1979; break IF; }
var stI0 = invoker.start__I(lcA5);
if ((stI0) <= (lcI4)) { gt = 59; break IF; }
var stA0 = lcA3;var stA1 = lcA0;var stI2 = lcI4;var stI3 = invoker.start__I(lcA5);
var stA1 = invoker.substring__Ljava_lang_String_2II(stA1,stI2, stI3);
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.end__I(lcA5);
var lcI4 = stI0;
var stA0 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var lcA7 = stA0;
var lcI8 = -1;
var stI0 = invoker.hashCode__I(lcA7);
switch (stI0) {
  case -1888027236: { gt = 1374; break IF; }
  case -1466596076: { gt = 1248; break IF; }
  case -1408208058: { gt = 533; break IF; }
  case -1325958191: { gt = 726; break IF; }
  case -1305664359: { gt = 780; break IF; }
  case -1184795739: { gt = 942; break IF; }
  case -1052618729: { gt = 1032; break IF; }
  case -977423767: { gt = 1122; break IF; }
  case -934396624: { gt = 1140; break IF; }
  case -915384400: { gt = 924; break IF; }
  case -892481938: { gt = 1176; break IF; }
  case -889473228: { gt = 1230; break IF; }
  case -874432947: { gt = 1302; break IF; }
  case -853259901: { gt = 816; break IF; }
  case -807062458: { gt = 1068; break IF; }
  case -608539730: { gt = 1104; break IF; }
  case -567202649: { gt = 672; break IF; }
  case -314497661: { gt = 1086; break IF; }
  case 3211: { gt = 708; break IF; }
  case 3357: { gt = 906; break IF; }
  case 101577: { gt = 852; break IF; }
  case 104431: { gt = 978; break IF; }
  case 108960: { gt = 1050; break IF; }
  case 115131: { gt = 1338; break IF; }
  case 3039496: { gt = 584; break IF; }
  case 3046192: { gt = 601; break IF; }
  case 3052374: { gt = 888; break IF; }
  case 3116345: { gt = 744; break IF; }
  case 3118337: { gt = 762; break IF; }
  case 3178851: { gt = 870; break IF; }
  case 3327612: { gt = 1014; break IF; }
  case 3392903: { gt = 1446; break IF; }
  case 3559070: { gt = 1266; break IF; }
  case 3569038: { gt = 1410; break IF; }
  case 3625364: { gt = 1356; break IF; }
  case 64711720: { gt = 550; break IF; }
  case 94001407: { gt = 567; break IF; }
  case 94432955: { gt = 618; break IF; }
  case 94742904: { gt = 636; break IF; }
  case 94844771: { gt = 654; break IF; }
  case 97196323: { gt = 1428; break IF; }
  case 97436022: { gt = 798; break IF; }
  case 97526364: { gt = 834; break IF; }
  case 109413500: { gt = 1158; break IF; }
  case 109801339: { gt = 1212; break IF; }
  case 110339814: { gt = 1284; break IF; }
  case 113101617: { gt = 1392; break IF; }
  case 502623545: { gt = 996; break IF; }
  case 902025516: { gt = 960; break IF; }
  case 1052746378: { gt = 1320; break IF; }
  case 1544803905: { gt = 690; break IF; }
  case 1732898850: { gt = 516; break IF; }
  case 1794694483: { gt = 1194; break IF; }
  default: { gt = 1461; break IF; }
}
    }
    X_516: for (;;) { IF: if (gt <= 516) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"abstract");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = 0;
{ gt = 1461; break IF; }
    }
    X_533: for (;;) { IF: if (gt <= 533) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"assert");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = 1;
{ gt = 1461; break IF; }
    }
    X_550: for (;;) { IF: if (gt <= 550) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"boolean");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = 2;
{ gt = 1461; break IF; }
    }
    X_567: for (;;) { IF: if (gt <= 567) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"break");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = 3;
{ gt = 1461; break IF; }
    }
    X_584: for (;;) { IF: if (gt <= 584) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"byte");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = 4;
{ gt = 1461; break IF; }
    }
    X_601: for (;;) { IF: if (gt <= 601) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"case");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = 5;
{ gt = 1461; break IF; }
    }
    X_618: for (;;) { IF: if (gt <= 618) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"catch");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (6);
{ gt = 1461; break IF; }
    }
    X_636: for (;;) { IF: if (gt <= 636) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"class");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (7);
{ gt = 1461; break IF; }
    }
    X_654: for (;;) { IF: if (gt <= 654) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"const");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (8);
{ gt = 1461; break IF; }
    }
    X_672: for (;;) { IF: if (gt <= 672) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"continue");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (9);
{ gt = 1461; break IF; }
    }
    X_690: for (;;) { IF: if (gt <= 690) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"default");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (10);
{ gt = 1461; break IF; }
    }
    X_708: for (;;) { IF: if (gt <= 708) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"do");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (11);
{ gt = 1461; break IF; }
    }
    X_726: for (;;) { IF: if (gt <= 726) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"double");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (12);
{ gt = 1461; break IF; }
    }
    X_744: for (;;) { IF: if (gt <= 744) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"else");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (13);
{ gt = 1461; break IF; }
    }
    X_762: for (;;) { IF: if (gt <= 762) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"enum");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (14);
{ gt = 1461; break IF; }
    }
    X_780: for (;;) { IF: if (gt <= 780) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"extends");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (15);
{ gt = 1461; break IF; }
    }
    X_798: for (;;) { IF: if (gt <= 798) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"final");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (16);
{ gt = 1461; break IF; }
    }
    X_816: for (;;) { IF: if (gt <= 816) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"finally");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (17);
{ gt = 1461; break IF; }
    }
    X_834: for (;;) { IF: if (gt <= 834) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"float");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (18);
{ gt = 1461; break IF; }
    }
    X_852: for (;;) { IF: if (gt <= 852) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"for");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (19);
{ gt = 1461; break IF; }
    }
    X_870: for (;;) { IF: if (gt <= 870) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"goto");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (20);
{ gt = 1461; break IF; }
    }
    X_888: for (;;) { IF: if (gt <= 888) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"char");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (21);
{ gt = 1461; break IF; }
    }
    X_906: for (;;) { IF: if (gt <= 906) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"if");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (22);
{ gt = 1461; break IF; }
    }
    X_924: for (;;) { IF: if (gt <= 924) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"implements");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (23);
{ gt = 1461; break IF; }
    }
    X_942: for (;;) { IF: if (gt <= 942) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"import");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (24);
{ gt = 1461; break IF; }
    }
    X_960: for (;;) { IF: if (gt <= 960) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"instanceof");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (25);
{ gt = 1461; break IF; }
    }
    X_978: for (;;) { IF: if (gt <= 978) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"int");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (26);
{ gt = 1461; break IF; }
    }
    X_996: for (;;) { IF: if (gt <= 996) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"interface");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (27);
{ gt = 1461; break IF; }
    }
    X_1014: for (;;) { IF: if (gt <= 1014) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"long");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (28);
{ gt = 1461; break IF; }
    }
    X_1032: for (;;) { IF: if (gt <= 1032) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"native");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (29);
{ gt = 1461; break IF; }
    }
    X_1050: for (;;) { IF: if (gt <= 1050) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"new");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (30);
{ gt = 1461; break IF; }
    }
    X_1068: for (;;) { IF: if (gt <= 1068) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"package");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (31);
{ gt = 1461; break IF; }
    }
    X_1086: for (;;) { IF: if (gt <= 1086) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"private");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (32);
{ gt = 1461; break IF; }
    }
    X_1104: for (;;) { IF: if (gt <= 1104) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"protected");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (33);
{ gt = 1461; break IF; }
    }
    X_1122: for (;;) { IF: if (gt <= 1122) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"public");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (34);
{ gt = 1461; break IF; }
    }
    X_1140: for (;;) { IF: if (gt <= 1140) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"return");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (35);
{ gt = 1461; break IF; }
    }
    X_1158: for (;;) { IF: if (gt <= 1158) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"short");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (36);
{ gt = 1461; break IF; }
    }
    X_1176: for (;;) { IF: if (gt <= 1176) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"static");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (37);
{ gt = 1461; break IF; }
    }
    X_1194: for (;;) { IF: if (gt <= 1194) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"strictfp");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (38);
{ gt = 1461; break IF; }
    }
    X_1212: for (;;) { IF: if (gt <= 1212) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"super");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (39);
{ gt = 1461; break IF; }
    }
    X_1230: for (;;) { IF: if (gt <= 1230) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"switch");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (40);
{ gt = 1461; break IF; }
    }
    X_1248: for (;;) { IF: if (gt <= 1248) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"synchronized");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (41);
{ gt = 1461; break IF; }
    }
    X_1266: for (;;) { IF: if (gt <= 1266) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"this");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (42);
{ gt = 1461; break IF; }
    }
    X_1284: for (;;) { IF: if (gt <= 1284) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"throw");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (43);
{ gt = 1461; break IF; }
    }
    X_1302: for (;;) { IF: if (gt <= 1302) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"throws");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (44);
{ gt = 1461; break IF; }
    }
    X_1320: for (;;) { IF: if (gt <= 1320) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"transient");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (45);
{ gt = 1461; break IF; }
    }
    X_1338: for (;;) { IF: if (gt <= 1338) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"try");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (46);
{ gt = 1461; break IF; }
    }
    X_1356: for (;;) { IF: if (gt <= 1356) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"void");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (47);
{ gt = 1461; break IF; }
    }
    X_1374: for (;;) { IF: if (gt <= 1374) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"volatile");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (48);
{ gt = 1461; break IF; }
    }
    X_1392: for (;;) { IF: if (gt <= 1392) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"while");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (49);
{ gt = 1461; break IF; }
    }
    X_1410: for (;;) { IF: if (gt <= 1410) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"true");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (50);
{ gt = 1461; break IF; }
    }
    X_1428: for (;;) { IF: if (gt <= 1428) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"false");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (51);
{ gt = 1461; break IF; }
    }
    X_1446: for (;;) { IF: if (gt <= 1446) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"null");
if ((stI0) == 0) { gt = 1461; break IF; }
var lcI8 = (52);
    }
    X_1461: for (;;) { IF: if (gt <= 1461) {

switch (lcI8) {
  case 0:{ gt = 1688; break IF; }
  case 1:{ gt = 1688; break IF; }
  case 2:{ gt = 1688; break IF; }
  case 3:{ gt = 1688; break IF; }
  case 4:{ gt = 1688; break IF; }
  case 5:{ gt = 1688; break IF; }
  case 6:{ gt = 1688; break IF; }
  case 7:{ gt = 1688; break IF; }
  case 8:{ gt = 1688; break IF; }
  case 9:{ gt = 1688; break IF; }
  case 10:{ gt = 1688; break IF; }
  case 11:{ gt = 1688; break IF; }
  case 12:{ gt = 1688; break IF; }
  case 13:{ gt = 1688; break IF; }
  case 14:{ gt = 1688; break IF; }
  case 15:{ gt = 1688; break IF; }
  case 16:{ gt = 1688; break IF; }
  case 17:{ gt = 1688; break IF; }
  case 18:{ gt = 1688; break IF; }
  case 19:{ gt = 1688; break IF; }
  case 20:{ gt = 1688; break IF; }
  case 21:{ gt = 1688; break IF; }
  case 22:{ gt = 1688; break IF; }
  case 23:{ gt = 1688; break IF; }
  case 24:{ gt = 1688; break IF; }
  case 25:{ gt = 1688; break IF; }
  case 26:{ gt = 1688; break IF; }
  case 27:{ gt = 1688; break IF; }
  case 28:{ gt = 1688; break IF; }
  case 29:{ gt = 1688; break IF; }
  case 30:{ gt = 1688; break IF; }
  case 31:{ gt = 1688; break IF; }
  case 32:{ gt = 1688; break IF; }
  case 33:{ gt = 1688; break IF; }
  case 34:{ gt = 1688; break IF; }
  case 35:{ gt = 1688; break IF; }
  case 36:{ gt = 1688; break IF; }
  case 37:{ gt = 1688; break IF; }
  case 38:{ gt = 1688; break IF; }
  case 39:{ gt = 1688; break IF; }
  case 40:{ gt = 1688; break IF; }
  case 41:{ gt = 1688; break IF; }
  case 42:{ gt = 1688; break IF; }
  case 43:{ gt = 1688; break IF; }
  case 44:{ gt = 1688; break IF; }
  case 45:{ gt = 1688; break IF; }
  case 46:{ gt = 1688; break IF; }
  case 47:{ gt = 1688; break IF; }
  case 48:{ gt = 1688; break IF; }
  case 49:{ gt = 1688; break IF; }
  case 50:{ gt = 1688; break IF; }
  case 51:{ gt = 1688; break IF; }
  case 52:{ gt = 1688; break IF; }
  default: { gt = 1716; break IF; }
}
    }
    X_1688: for (;;) { IF: if (gt <= 1688) {

var stA0 = "b";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA5);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
var lcA6 = stA0;
{ gt = 1967; break IF; }
    }
    X_1716: for (;;) { IF: if (gt <= 1716) {

var stA0 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stI0 = invoker.startsWith__ZLjava_lang_String_2(stA0,"//");
if ((stI0) == 0) { gt = 1774; break IF; }
var stA0 = "em";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stI6 = 0;var stA7 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stI7 = invoker.length__I(stA7);
var stA5 = invoker.substring__Ljava_lang_String_2II(stA5,stI6, (((stI7) - (1)) | 0));
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA5);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
var lcA6 = stA0;
{ gt = 1967; break IF; }
    }
    X_1774: for (;;) { IF: if (gt <= 1774) {

var stA0 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stI0 = invoker.startsWith__ZLjava_lang_String_2(stA0,"\"");
if ((stI0) == 0) { gt = 1817; break IF; }
var stA0 = "em";var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA5);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
var lcA6 = stA0;
{ gt = 1967; break IF; }
    }
    X_1817: for (;;) { IF: if (gt <= 1817) {

var stA0 = lcA1;var stA1 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA9 = stA0;
if ((lcA9) !== null) { gt = 1916; break IF; }
var stA0 = "java.lang";var stA1 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stA0 = c.tryLoad__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stA1);
var lcA9 = stA0;
if ((lcA9) !== null) { gt = 1916; break IF; }
if ((lcA2) === null) { gt = 1916; break IF; }
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA2);
var lcA10 = stA0;
    }
    X_1870: for (;;) { IF: if (gt <= 1870) {

var stI0 = invoker.hasNext__Z(lcA10);
if ((stI0) == 0) { gt = 1916; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA10);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA11 = stA0;
var stA0 = lcA11;var stA1 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stA0 = c.tryLoad__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stA1);
var lcA9 = stA0;
if ((lcA9) === null) { gt = 1913; break IF; }
{ gt = 1916; break IF; }
    }
    X_1913: for (;;) { IF: if (gt <= 1913) {
{ gt = 0; continue X_1870; }
    }
    X_1916: for (;;) { IF: if (gt <= 1916) {

if ((lcA9) !== null) { gt = 1935; break IF; }
var stA0 = invoker.group__Ljava_lang_String_2I(lcA5,0);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA0);
var lcA6 = stA0;
{ gt = 1967; break IF; }
    }
    X_1935: for (;;) { IF: if (gt <= 1935) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"{@link ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA9);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"}");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA0);
var lcA6 = stA0;
    }
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
    X_1967: for (;;) { IF: if (gt <= 1967) {

var stI0 = invoker.add__ZLjava_lang_Object_2(lcA3,lcA6);
{ gt = 20; continue X_0; }
    }
    X_1979: for (;;) { IF: if (gt <= 1979) {

var stI0 = lcI4;var stI1 = invoker.length__I(lcA0);
if ((stI0) >= (stI1)) { gt = 2004; break IF; }
var stA0 = lcA3;var stA1 = invoker.substring__Ljava_lang_String_2I(lcA0,lcI4);
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
    }
    X_2004: for (;;) { IF: if (gt <= 2004) {

var stA0 = "pre";var stA1 = null;var stA2 = lcA3;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 0);
var stA2 = invoker.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(stA2,stA3);
if (stA2 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA2, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(stA2, '');
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.tryLoad__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcA1) {
return null;

};
    m.access = 10;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = "CodeComponent";var stA1 = (refs_cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1 = cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
c._CLAZZ(stA0);
var stA0 = (refs_java_util_regex_Pattern || (refs_java_util_regex_Pattern = vm.java_util_regex_Pattern(false)))['compile__Ljava_util_regex_Pattern_2Ljava_lang_String_2']("(\\w+)|(//.*)\n|(\"[^\"]*\")");
c._WORDS(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_CodeComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_CodeComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_CodeComponentfillInstOf });
    cz_xelfi_demo_react4jdemo_CodeComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/CodeComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_net_java_html_react_React$Component;
    var refs_cz_xelfi_demo_react4jdemo_LoadingUrl;
    var refs_java_lang_StringBuilder;
    var refs_net_java_html_react_React;
    var refs_java_util_Collections;
    var refs_java_net_URL;
    var refs_java_util_ArrayList;
    var refs_cz_xelfi_demo_react4jdemo_CodeComponent$$Lambda$1;
    var refs_java_util_regex_Pattern;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_CodeComponent = cz_xelfi_demo_react4jdemo_CodeComponent;


function cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arg$1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1_arg$1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1_arg$1']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe2$Square_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1_arg$1'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square = cz_xelfi_demo_react4jdemo_TicTacToe2$Square(false))).lambda$render$0__VLcz_xelfi_demo_react4jdemo_TicTacToe2$Square_2(lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1_arg$1']);
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_TicTacToe2$Square_2 = function(lcA0) {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1;
c.constructor.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe2$Square_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe2$Square$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2$Square;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1_arg$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe2$Square$$Lambda$1;


function cz_xelfi_demo_react4jdemo_TicTacToe1Game() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1Game;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_TicTacToe1$Game(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Game || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Game = cz_xelfi_demo_react4jdemo_TicTacToe1$Game(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = "div";var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA1, 0, "className");
Array.at(stA1, 1, "game");
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 4);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 1;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "game-board");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 3);
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA8 = stA7;var stI9 = 1;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2']("Board", null, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 2;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA3, stI4, stA5);
var stA3 = stA2;var stI4 = 3;var stA5 = "div";var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "className");
Array.at(stA6, 1, "game-info");
var stA6 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 5);
var stA8 = stA7;var stI9 = 0;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA8 = stA7;var stI9 = 1;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2']("div", null, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 2;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("    ");
Array.at(stA8, stI9, stA10);
if (null !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](null, 1, vm.net_java_html_react_React$Element)) vm.java_lang_Class(false).castEx(null, '');
var stA8 = stA7;var stI9 = 3;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2']("ol", null, null);
Array.at(stA8, stI9, stA10);
var stA8 = stA7;var stI9 = 4;var stA10 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2']("  ");
Array.at(stA8, stI9, stA10);
var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA5, stA6, stA7);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 20;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1GamefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1Game', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1GamefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1GamefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1Game';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Game;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1Game = cz_xelfi_demo_react4jdemo_TicTacToe1Game;


function cz_xelfi_demo_react4jdemo_OnPageLoad() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_OnPageLoad;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.main__V_3Ljava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var lcA1 = (lcA0[0] || Array.at(lcA0, 0));
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 7; break IF; }}
throw e;
}{ gt = 11; break IF; }
    }
    X_7: for (;;) { IF: if (gt <= 7) {
var lcA2 = stA0;
var lcA1 = "";
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var lcA3 = lcA1;
var lcI4 = -1;
var stI0 = invoker.hashCode__I(lcA3);
switch (stI0) {
  case 3570877: { gt = 79; break IF; }
  case 3570878: { gt = 94; break IF; }
  case 3570879: { gt = 109; break IF; }
  case 2023014453: { gt = 64; break IF; }
  default: { gt = 121; break IF; }
}
    }
    X_64: for (;;) { IF: if (gt <= 64) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA3,"like+model");
if ((stI0) == 0) { gt = 121; break IF; }
var lcI4 = 0;
{ gt = 121; break IF; }
    }
    X_79: for (;;) { IF: if (gt <= 79) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA3,"ttt1");
if ((stI0) == 0) { gt = 121; break IF; }
var lcI4 = 1;
{ gt = 121; break IF; }
    }
    X_94: for (;;) { IF: if (gt <= 94) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA3,"ttt2");
if ((stI0) == 0) { gt = 121; break IF; }
var lcI4 = 2;
{ gt = 121; break IF; }
    }
    X_109: for (;;) { IF: if (gt <= 109) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA3,"ttt3");
if ((stI0) == 0) { gt = 121; break IF; }
var lcI4 = 3;
    }
    X_121: for (;;) { IF: if (gt <= 121) {

switch (lcI4) {
  case 0:{ gt = 152; break IF; }
  case 1:{ gt = 161; break IF; }
  case 2:{ gt = 170; break IF; }
  case 3:{ gt = 179; break IF; }
  default: { gt = 188; break IF; }
}
    }
    X_152: for (;;) { IF: if (gt <= 152) {
(refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX || (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX(false))).onPageLoad__V();
var lcA2 = "LikeButtonNoJavaFX.java";
{ gt = 194; break IF; }
    }
    X_161: for (;;) { IF: if (gt <= 161) {
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1 = cz_xelfi_demo_react4jdemo_TicTacToe1(false))).onPageLoad__V();
var lcA2 = "TicTacToe1.java";
{ gt = 194; break IF; }
    }
    X_170: for (;;) { IF: if (gt <= 170) {
(refs_cz_xelfi_demo_react4jdemo_TicTacToe2 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe2 = cz_xelfi_demo_react4jdemo_TicTacToe2(false))).onPageLoad__V();
var lcA2 = "TicTacToe2.java";
{ gt = 194; break IF; }
    }
    X_179: for (;;) { IF: if (gt <= 179) {
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3 = cz_xelfi_demo_react4jdemo_TicTacToe3(false))).onPageLoad__V();
var lcA2 = "TicTacToe3.java";
{ gt = 194; break IF; }
    }
    X_188: for (;;) { IF: if (gt <= 188) {
(refs_cz_xelfi_demo_react4jdemo_LikeButton || (refs_cz_xelfi_demo_react4jdemo_LikeButton = cz_xelfi_demo_react4jdemo_LikeButton(false))).onPageLoad__V();
var lcA2 = "LikeButton.java";
    }
    X_194: for (;;) { IF: if (gt <= 194) {

(refs_cz_xelfi_demo_react4jdemo_CodeComponent || (refs_cz_xelfi_demo_react4jdemo_CodeComponent = cz_xelfi_demo_react4jdemo_CodeComponent(false))).loadCode__VLjava_lang_String_2(lcA2);
return;

    }
}}}}}}}}}}}}}}
};
c['main__V_3Ljava_lang_String_2'] = m;

    m.access = 137;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_OnPageLoadfillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_OnPageLoad', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_OnPageLoadfillInstOf });
    cz_xelfi_demo_react4jdemo_OnPageLoadfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/OnPageLoad';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe2;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3;
    var refs_cz_xelfi_demo_react4jdemo_LikeButton;
    var refs_cz_xelfi_demo_react4jdemo_CodeComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_OnPageLoad = registerClass(exports,'cz_xelfi_demo_react4jdemo_OnPageLoad',cz_xelfi_demo_react4jdemo_OnPageLoad);


function cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arg$1 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$1'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$1']; };
  m = c._arg$2 = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$2'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$2']; };
    m = CLS.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Board_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$1'] = lcA1;
lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$2'] = lcI2;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board = cz_xelfi_demo_react4jdemo_TicTacToe3$Board(false))).lambda$renderSquare$0__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Board_2I(lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$1'], lcA0['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$2']);
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.lambdaFactory$__Ljava_lang_Runnable_2Lcz_xelfi_demo_react4jdemo_TicTacToe3$Board_2I = function(lcA0, lcI1) {
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1;
c.constructor.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe3$Board_2I.call(stA0, lcA0, lcI1);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3$Board$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$Board;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$1'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1_arg$2'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe3$Board$$Lambda$1;


function cz_xelfi_demo_react4jdemo_TicTacToe1Square() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1Square;
  if (!CLS.$class) {
    var pp = cz_xelfi_demo_react4jdemo_TicTacToe1$Square(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square = cz_xelfi_demo_react4jdemo_TicTacToe1$Square(false))).constructor.cons__VLnet_java_html_react_React$Props_2.call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderSquare__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_TicTacToe1Square$1;
(refs_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1 = cz_xelfi_demo_react4jdemo_TicTacToe1Square$1(false))).constructor.cons__VLcz_xelfi_demo_react4jdemo_TicTacToe1Square_2Ljava_lang_Runnable_2.call(stA0, lcA0, lcA2);
var stA0 = (refs_net_java_html_react_React4J || (refs_net_java_html_react_React4J = vm.net_java_html_react_React4J(false)))['wrapCallback__Ljava_lang_Object_2Lnet_java_html_react_React4J$Callback_2'](stA0);
var lcA3 = stA0;
var stA0 = "button";var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 4);
Array.at(stA1, 0, "className");
Array.at(stA1, 1, "square");
Array.at(stA1, 2, "onClick");
Array.at(stA1, 3, lcA3);
var stA1 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['props__Lnet_java_html_react_React$Props_2_3Ljava_lang_Object_2'](stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lnet/java/html/react/React$Element;', vm.net_java_html_react_React$Element, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createText__Lnet_java_html_react_React$Element_2Ljava_lang_String_2'](lcA1);
Array.at(stA3, stI4, stA5);
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['createElement__Lnet_java_html_react_React$Element_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lnet_java_html_react_React$Element_2'](stA0, stA1, stA2);
return stA0;

};
    m.access = 20;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1SquarefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1Square', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1SquarefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1SquarefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1Square';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1Square$1;
    var refs_net_java_html_react_React4J;
    var refs_net_java_html_react_React;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1Square = cz_xelfi_demo_react4jdemo_TicTacToe1Square;


function cz_xelfi_demo_react4jdemo_LikeState() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_LikeState;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LikeState_proto'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LikeState_proto']; };
  m = c._prop_liked = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked'] = v; return this['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX || (refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX = cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.isLiked__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_proto'],"liked");
return lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked'];

};
c['isLiked__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setLiked__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked'] = lcI1;
var stA0 = lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_proto'];var stA1 = "liked";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setLiked__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_cz_xelfi_demo_react4jdemo_LikeState_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VZ = function(lcI1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked'] = lcI1;
return;

};
CLS['cons__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
var lcA3 = stA0;
var stA0 = lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 1);
Array.at(stA2, 0, "liked");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
var stA0 = lcA0;if (((lcA3[0] || Array.at(lcA3, 0))) !== null) { gt = 39; break IF; }
var stI1 = 0;{ gt = 51; break IF; }
    }
    X_39: for (;;) { IF: if (gt <= 39) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[0] || Array.at(lcA3, 0)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_51: for (;;) { IF: if (gt <= 51) {
stA0['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked'] = stI1;
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 14; break IF; }
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
var stA0 = lcA0;{ gt = 33; break IF; }
    }
    X_14: for (;;) { IF: if (gt <= 14) {

if ((lcA0) !== null) { gt = 25; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
{ gt = 33; break IF; }
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, lcA0);
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return stA0;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(123));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"liked");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isLiked__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lcz_xelfi_demo_react4jdemo_LikeState_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_proto']);
var stA0 = c.clone__Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lcz_xelfi_demo_react4jdemo_LikeState_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new cz_xelfi_demo_react4jdemo_LikeState;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stI1 = lcA0.isLiked__Z();
stA0['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked'] = stI1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lcz_xelfi_demo_react4jdemo_LikeState_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "Please specify targetId=\"\" in your @Model annotation");
{ var stA0 = stA0; throw stA0; }

};
    m.access = 2;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA0)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA1 != null && lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_cz_xelfi_demo_react4jdemo_LikeState']) vm.java_lang_Class(false).castEx(lcA1, 'cz.xelfi.demo.react4jdemo.LikeState');
var lcA2 = lcA1;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 46; break IF; }
return 0;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

return 1;

    }
}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lcz_xelfi_demo_react4jdemo_LikeState_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lcz_xelfi_demo_react4jdemo_LikeState$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lcz_xelfi_demo_react4jdemo_LikeState_2 = function(lcA0) {
return lcA0['fld_cz_xelfi_demo_react4jdemo_LikeState_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lcz_xelfi_demo_react4jdemo_LikeState$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lcz_xelfi_demo_react4jdemo_LikeState_2Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lcz_xelfi_demo_react4jdemo_LikeState_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType;
(refs_cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType || (refs_cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType = cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType(false))).constructor.cons__VLcz_xelfi_demo_react4jdemo_LikeState$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_LikeStatefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_LikeState', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_LikeStatefillInstOf });
    cz_xelfi_demo_react4jdemo_LikeStatefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/LikeState';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_cz_xelfi_demo_react4jdemo_LikeButtonNoJavaFX;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_IllegalStateException;
    var refs_cz_xelfi_demo_react4jdemo_LikeState$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_cz_xelfi_demo_react4jdemo_LikeState_proto'] = null;
    this['fld_cz_xelfi_demo_react4jdemo_LikeState_prop_liked'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_LikeState = registerClass(exports,'cz_xelfi_demo_react4jdemo_LikeState',cz_xelfi_demo_react4jdemo_LikeState);


function cz_xelfi_demo_react4jdemo_TicTacToe3() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_cSquare'] = null;
  m = c._cSquare = function (v) {  if (arguments.length == 1) CLS['fld_cSquare'] = v; return CLS['fld_cSquare']; };
  CLS['fld_cBoard'] = null;
  m = c._cBoard = function (v) {  if (arguments.length == 1) CLS['fld_cBoard'] = v; return CLS['fld_cBoard']; };
  CLS['fld_cGame'] = null;
  m = c._cGame = function (v) {  if (arguments.length == 1) CLS['fld_cGame'] = v; return CLS['fld_cGame']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.onPageLoad__V = function() {
var stA0 = "Square";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
c._cSquare(stA0);
var stA0 = "Board";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2 = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
c._cBoard(stA0);
var stA0 = "Game";var stA1 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3 = cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3(false))).lambdaFactory$__Lnet_java_html_react_React$ComponentFactory_2();
var stA0 = (refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['register__Ljava_lang_Object_2Ljava_lang_String_2Lnet_java_html_react_React$ComponentFactory_2'](stA0, stA1);
c._cGame(stA0);
(refs_net_java_html_react_React || (refs_net_java_html_react_React = vm.net_java_html_react_React(false)))['render__VLjava_lang_String_2Ljava_lang_String_2']("Game", "root");
return;

};
c['onPageLoad__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.access$000__Ljava_lang_Object_2 = function() {
return c._cSquare();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__Ljava_lang_Object_2 = function() {
return c._cBoard();

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe3', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe3fillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$1;
    var refs_net_java_html_react_React;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$2;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe3$$Lambda$3;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe3 = registerClass(exports,'cz_xelfi_demo_react4jdemo_TicTacToe3',cz_xelfi_demo_react4jdemo_TicTacToe3);


function cz_xelfi_demo_react4jdemo_TicTacToe1$Square() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe1$Square;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
(refs_net_java_html_react_React$Component || (refs_net_java_html_react_React$Component = vm.net_java_html_react_React$Component(false))).constructor['cons__VLnet_java_html_react_React$Props_2'].call(lcA0, lcA1);
return;

};
CLS['cons__VLnet_java_html_react_React$Props_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.renderSquare__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.render__Lnet_java_html_react_React$Element_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"");
var stA1 = invoker.getProperty__Ljava_lang_Object_2Ljava_lang_String_2(lcA0,"value");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
var stA0 = lcA0;var stA1 = lcA1;var stA2 = (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1 || (refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1 = cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1(false))).lambdaFactory$__Ljava_lang_Runnable_2Ljava_lang_String_2(lcA1);
var stA0 = stA0.renderSquare__Lnet_java_html_react_React$Element_2Ljava_lang_String_2Ljava_lang_Runnable_2(stA1, stA2);
return stA0;

};
c['render__Lnet_java_html_react_React$Element_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.lambda$render$0__VLjava_lang_String_2 = function(lcA0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Clicked ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA0);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
invoker.println__VLjava_lang_String_2((refs_java_lang_System || (refs_java_lang_System = vm.java_lang_System(false)))['_err'](),lcA1);
(refs_cz_xelfi_demo_react4jdemo_JsUtils || (refs_cz_xelfi_demo_react4jdemo_JsUtils = cz_xelfi_demo_react4jdemo_JsUtils(false))).alert__VLjava_lang_String_2(lcA1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_TicTacToe1$SquarefillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_TicTacToe1$Square', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_TicTacToe1$SquarefillInstOf });
    cz_xelfi_demo_react4jdemo_TicTacToe1$SquarefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/TicTacToe1$Square';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_react_React$Component;
    var refs_java_lang_StringBuilder;
    var refs_cz_xelfi_demo_react4jdemo_TicTacToe1$Square$$Lambda$1;
    var refs_java_lang_System;
    var refs_cz_xelfi_demo_react4jdemo_JsUtils;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_TicTacToe1$Square = cz_xelfi_demo_react4jdemo_TicTacToe1$Square;


function cz_xelfi_demo_react4jdemo_ButtonState$1() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_ButtonState$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function cz_xelfi_demo_react4jdemo_ButtonState$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_cz_xelfi_demo_react4jdemo_ButtonState$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: cz_xelfi_demo_react4jdemo_ButtonState$1fillInstOf });
    cz_xelfi_demo_react4jdemo_ButtonState$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'cz/xelfi/demo/react4jdemo/ButtonState$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.cz_xelfi_demo_react4jdemo_ButtonState$1 = cz_xelfi_demo_react4jdemo_ButtonState$1;

  invoker.build__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2 = function(target) {
    return target['build__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2']();
  };
  invoker.constant__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['constant__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.setState__VLjava_lang_Object_2 = function(target, p1) {
    return target['setState__VLjava_lang_Object_2'](p1);
  };
  invoker.state__Ljava_lang_Object_2 = function(target) {
    return target['state__Ljava_lang_Object_2']();
  };
  invoker.toString__Ljava_lang_String_2 = function(target) {
    return target['toString__Ljava_lang_String_2']();
  };
  invoker.as__Ljava_lang_Object_2Ljava_lang_Class_2 = function(target, p1) {
    return target['as__Ljava_lang_Object_2Ljava_lang_Class_2'](p1);
  };
  invoker.startsWith__ZLjava_lang_String_2 = function(target, p1) {
    return target['startsWith__ZLjava_lang_String_2'](p1);
  };
  invoker.indexOf__ILjava_lang_String_2 = function(target, p1) {
    return target['indexOf__ILjava_lang_String_2'](p1);
  };
  invoker.substring__Ljava_lang_String_2I = function(target, p1) {
    return target['substring__Ljava_lang_String_2I'](p1);
  };
  invoker.getMessage__Ljava_lang_String_2 = function(target) {
    return target['getMessage__Ljava_lang_String_2']();
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p1);
  };
  invoker.toExternalForm__Ljava_lang_String_2 = function(target) {
    return target['toExternalForm__Ljava_lang_String_2']();
  };
  invoker.printStackTrace__V = function(target) {
    return target['printStackTrace__V']();
  };
  invoker.matcher__Ljava_util_regex_Matcher_2Ljava_lang_CharSequence_2 = function(target, p1) {
    return target['matcher__Ljava_util_regex_Matcher_2Ljava_lang_CharSequence_2'](p1);
  };
  invoker.find__Z = function(target) {
    return target['find__Z']();
  };
  invoker.start__I = function(target) {
    return target['start__I']();
  };
  invoker.substring__Ljava_lang_String_2II = function(target, p1, p2) {
    return target['substring__Ljava_lang_String_2II'](p1,p2);
  };
  invoker.add__ZLjava_lang_Object_2 = function(target, p1) {
    return target['add__ZLjava_lang_Object_2'](p1);
  };
  invoker.end__I = function(target) {
    return target['end__I']();
  };
  invoker.group__Ljava_lang_String_2I = function(target, p1) {
    return target['group__Ljava_lang_String_2I'](p1);
  };
  invoker.hashCode__I = function(target) {
    return target['hashCode__I']();
  };
  invoker.equals__ZLjava_lang_Object_2 = function(target, p1) {
    return target['equals__ZLjava_lang_Object_2'](p1);
  };
  invoker.length__I = function(target) {
    return target['length__I']();
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['get__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.iterator__Ljava_util_Iterator_2 = function(target) {
    return target['iterator__Ljava_util_Iterator_2']();
  };
  invoker.hasNext__Z = function(target) {
    return target['hasNext__Z']();
  };
  invoker.next__Ljava_lang_Object_2 = function(target) {
    return target['next__Ljava_lang_Object_2']();
  };
  invoker.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(target, p1) {
    return target['toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2'](p1);
  };
  invoker.accessProperty__VLjava_lang_String_2 = function(target, p1) {
    return target['accessProperty__VLjava_lang_String_2'](p1);
  };
  invoker.verifyUnlocked__V = function(target) {
    return target['verifyUnlocked__V']();
  };
  invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['isSame__ZLjava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2, p3) {
    return target['valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2,p3);
  };
  invoker.loadJSONWithHeaders__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(target, p1, p2, p3, p4, p5, p6, p7) {
    return target['loadJSONWithHeaders__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2'](p1,p2,p3,p4,p5,p6,p7);
  };
  invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(target, p1, p2) {
    return target['createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](p1,p2);
  };
  invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(target, p1, p2, p3) {
    return target['extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2'](p1,p2,p3);
  };
  invoker.append__Ljava_lang_StringBuilder_2C = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2C'](p1);
  };
  invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2 = function(target, p1) {
    return target['toJSON__Ljava_lang_String_2Ljava_lang_Object_2'](p1);
  };
  invoker.getContext__Lnet_java_html_BrwsrCtx_2 = function(target) {
    return target['getContext__Lnet_java_html_BrwsrCtx_2']();
  };
  invoker.getName__Ljava_lang_String_2 = function(target) {
    return target['getName__Ljava_lang_String_2']();
  };
  invoker.hashPlus__ILjava_lang_Object_2I = function(target, p1, p2) {
    return target['hashPlus__ILjava_lang_Object_2I'](p1,p2);
  };
  invoker.registerProperty__VLjava_lang_String_2IZZ = function(target, p1, p2, p3, p4) {
    return target['registerProperty__VLjava_lang_String_2IZZ'](p1,p2,p3,p4);
  };
  invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.copyJSON__VLnet_java_html_BrwsrCtx_2_3Ljava_lang_Object_2Ljava_lang_Class_2_3Ljava_lang_Object_2 = function(target, p1, p2, p3, p4) {
    return target['copyJSON__VLnet_java_html_BrwsrCtx_2_3Ljava_lang_Object_2Ljava_lang_Class_2_3Ljava_lang_Object_2'](p1,p2,p3,p4);
  };
  invoker.append__Ljava_lang_StringBuilder_2I = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2I'](p1);
  };
  invoker.booleanValue__Z = function(target) {
    return target['booleanValue__Z']();
  };
  invoker.renderReply__Lnet_java_html_react_React$Element_2 = function(target) {
    return target['renderReply__Lnet_java_html_react_React$Element_2']();
  };
  invoker.runInBrowser__VI_3Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['runInBrowser__VI_3Ljava_lang_Object_2'](p1,p2);
  };
  invoker.registerFunction__VLjava_lang_String_2I = function(target, p1, p2) {
    return target['registerFunction__VLjava_lang_String_2I'](p1,p2);
  };
  invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2 = function(target, p1) {
    return target['boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2'](p1);
  };
  invoker.run__V = function(target) {
    return target['run__V']();
  };
  invoker.getClass__Ljava_lang_Class_2 = function(target) {
    return target['getClass__Ljava_lang_Class_2']();
  };
  invoker.action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Runnable_2 = function(target, p1, p2) {
    return target['action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Runnable_2'](p1,p2);
  };
  invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2 = function(target, p1, p2) {
    return target['set__Ljava_lang_Object_2ILjava_lang_Object_2'](p1,p2);
  };
  invoker.get__Ljava_lang_Object_2I = function(target, p1) {
    return target['get__Ljava_lang_Object_2I'](p1);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2'](p1);
  };
  invoker.getProperty__Ljava_lang_Object_2Ljava_lang_String_2 = function(target, p1) {
    return target['getProperty__Ljava_lang_Object_2Ljava_lang_String_2'](p1);
  };
  invoker.onEvent__VLjava_lang_String_2 = function(target, p1) {
    return target['onEvent__VLjava_lang_String_2'](p1);
  };
  invoker.renderLikeButton__Lnet_java_html_react_React$Element_2Ljava_lang_Runnable_2 = function(target, p1) {
    return target['renderLikeButton__Lnet_java_html_react_React$Element_2Ljava_lang_Runnable_2'](p1);
  };
  invoker.println__VLjava_lang_String_2 = function(target, p1) {
    return target['println__VLjava_lang_String_2'](p1);
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQoNCg==');
  exports['registerResource']('cz/xelfi/demo/react4jdemo/net.java.html.js 2.classes', 'Y3oueGVsZmkuZGVtby5yZWFjdDRqZGVtby5Kc1V0aWxzCmN6LnhlbGZpLmRlbW8ucmVhY3Q0amRlbW8uQ29kZUNvbXBvbmVudAo=');
  exports['registerResource']('cz/xelfi/demo/react4jdemo/net.java.html.js 3.classes', 'Y3oueGVsZmkuZGVtby5yZWFjdDRqZGVtby5Db2RlQ29tcG9uZW50CmN6LnhlbGZpLmRlbW8ucmVhY3Q0amRlbW8uSnNVdGlscwo=');
  exports['registerResource']('cz/xelfi/demo/react4jdemo/net.java.html.js 4.classes', 'Y3oueGVsZmkuZGVtby5yZWFjdDRqZGVtby5Db2RlQ29tcG9uZW50CmN6LnhlbGZpLmRlbW8ucmVhY3Q0amRlbW8uSnNVdGlscwo=');
  exports['registerResource']('META-INF/net.java.html.js 2.classes', 'Y3oueGVsZmkuZGVtby5yZWFjdDRqZGVtby5Kc1V0aWxzCmN6LnhlbGZpLmRlbW8ucmVhY3Q0amRlbW8uQ29kZUNvbXBvbmVudAo=');
  exports['registerResource']('META-INF/net.java.html.js 3.classes', 'Y3oueGVsZmkuZGVtby5yZWFjdDRqZGVtby5Db2RlQ29tcG9uZW50CmN6LnhlbGZpLmRlbW8ucmVhY3Q0amRlbW8uSnNVdGlscwo=');
});